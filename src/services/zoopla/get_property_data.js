module.exports = function(app){

    const axios = require('axios').default;
    const cheerio = require('cheerio');
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │           ZOOPLA Property           │
    // └─────────────────────────────────────┘
    app.post('/zooplaProperty', (req, res) => {

        var marker = JSON.parse(req.body);
        var target = marker.url;
        
        axios({
            method: 'get',
            url: target,
            headers:{ 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36' }
        })
        .then(function (response) {

            var $ = cheerio.load(response.data);
        
            var data = JSON.parse($('#__NEXT_DATA__').text());

            data = data.props.pageProps.listingDetails
        
            var map = {
                item: {
                    id:             "listingId",
                    description:    "detailedDescription",
                    title:          "title",
                    price:          "pricing.label",
                    floorplan:      "floorPlan.image[0].filename",
                    longitude:      "location.coordinates.longitude",
                    latitude:       "location.coordinates.latitude",
                    bedrooms:       "counts.numBedrooms",
                    tenure:         "analyticsTaxonomy.tenure",
                },

                each: function(item){
                    item.source = "zoopla";
                    item.url = "https://zoopla.co.uk/for-sale/details/"+item.id
                    item.link = "https://zoopla.co.uk/for-sale/details/"+item.id
                    return item; 
                }
            }
        
            var result = transform(data, map);

            // IMAGES
            // Convert Images array to a standard list of URLs. 
            // [ 'url': 'www', 'url': 'www', ...]
            var imageArray = []
            data.propertyImage.forEach(function(image, index) {
                imageArray.push({ 
                    'url': "https://lid.zoocdn.com/u/1600/1200/" + image.filename,
                    'thumbnail': "https://lid.zoocdn.com/u/480/360/" + image.filename
                });
            });
            result['images'] = imageArray;

            // STATIONS
            // Search for Underground Station
            var station = "Not Specified"
            data.pointsOfInterest.forEach(function(poi, index) {
                if (poi.type == "london_underground_station"){
                    station = poi.title + '( ' + poi.distanceMiles + ' miles )';
                }
            });
            result['station'] = station;

            res.json(result)
        
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return;
        })

    });
}