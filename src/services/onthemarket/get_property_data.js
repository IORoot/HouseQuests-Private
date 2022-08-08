module.exports = function(app){

    const axios = require('axios').default;
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │          RIGHTMOVE PROPERTY         │
    // └─────────────────────────────────────┘
    app.post('/onthemarketProperty', (req, res) => {

        var marker = JSON.parse(req.body);
        var target = marker.url;

        axios({
            method: 'get',
            url: target,
            headers:{ 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36' }
        })
        .then(function (response) {

            var scriptdata = response.data
            scriptdata = scriptdata.replace(/[\s\S]*__OTM__\.jsonData = /, '');
            scriptdata = scriptdata.replace(/__OTM__\.globals =[\s\S]*/, '');
            scriptdata = scriptdata.replace(/};/, '}');

            data = JSON.parse(scriptdata);

            var map = {
                item: {
                    id:             "id",
                    description:    "description",
                    title:          "page-titles.page-title",
                    price:          "price",
                    // images:         "images",
                    floorplan:      "floorplans[0].large-url",
                    longitude:      "location.lon",
                    latitude:       "location.lat",
                    bedrooms:       "bedrooms-text",
                    tenure:         "unknown",
                    link:           "canonical-url"
                },

                each: function(item){
                    item.source = "onthemarket";
                    item.url = "https://www.onthemarket.com/details/"+item.id
                    return item; 
                }
            }
        
            var result = transform(data, map);
            
            // IMAGES
            // Convert Images array to a standard list of URLs. 
            // [ 'url': 'www', 'url': 'www', ...]
            var imageArray = []
            data.images.forEach(function(image, index) {
                imageArray.push({ 
                    'url': image["large-url"],
                    'thumbnail': image.prefix + '-' + image.geometries.ls.suffix + '.' + image.ext
                });
            });
            result['images'] = imageArray;

            result['station'] = data.station[0].name + '(' + data.station[0]["display-distance"] + ' )'

            res.json(result)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return;
        })

    });

}