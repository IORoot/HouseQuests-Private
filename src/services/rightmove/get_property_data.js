module.exports = function(app){

    const request = require('request');
    const cheerio = require('cheerio');
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │          RIGHTMOVE PROPERTY         │
    // └─────────────────────────────────────┘
    app.post('/rightmoveProperty', (req, res) => {

        var marker = JSON.parse(req.body);
        var target = marker.url;

        request({
            uri: target,
            headers:{
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36'
            }
        }, function( err, response, body){
        
            if (err) return;
        
            var $ = cheerio.load(body);
        
            var modeldata = $('script:contains("PAGE_MODEL")').text().split(';');
        
            var data = modeldata.toString().replace('window.PAGE_MODEL = ', '');
        
            data = JSON.parse(data);
        
            var map = {
                item: {
                    id:             "propertyData.id",
                    description:    "propertyData.text.description",
                    title:          "propertyData.text.pageTitle",
                    price:          "propertyData.prices.primaryPrice",
                    images:         "propertyData.images",
                    floorplan:      "propertyData.floorplans[0].url",
                    longitude:      "propertyData.location.longitude",
                    latitude:       "propertyData.location.latitude",
                    bedrooms:       "propertyData.bedrooms",
                    tenure:         "propertyData.tenure.tenureType",
                    link:           "metadata.copyLinkUrl"
                },

                each: function(item){
                    item.source = "rightmove";
                    item.url = "https://rightmove.co.uk/properties/"+item.id
                    return item; 
                }
            }
        
            var result = transform(data, map);

            result['station'] = data.propertyData.nearestStations[0].name + '(' + Math.round(data.propertyData.nearestStations[0].distance * 100) / 100 + 'miles )'

            res.json(result)
            
        });
    });

}