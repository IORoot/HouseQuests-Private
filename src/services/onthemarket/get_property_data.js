module.exports = function(app){

    const request = require('request');
    const cheerio = require('cheerio');
    const URL = require('url')
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │          RIGHTMOVE PROPERTY         │
    // └─────────────────────────────────────┘
    app.post('/onthemarketProperty', (req, res) => {

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
        
            var scriptdata = $('script:contains("__OTM__.jsonData")').text();
            scriptdata = scriptdata.replace(/[\s\S]*__OTM__\.jsonData = /g, '');
            scriptdata = scriptdata.replace(/__OTM__\.globals =[\s\S]*/g, '');
            scriptdata = scriptdata.replace(/};/g, '}');

            data = JSON.parse(scriptdata);
        
            // replace thumnbnail images for big images.
            data.images.forEach(function(image,index){
                data.images[index].url = image["large-url"]
            })

            var map = {
                item: {
                    id:             "id",
                    description:    "description",
                    title:          "page-titles.page-title",
                    price:          "price",
                    images:         "images",
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

            result['station'] = data.station[0].name + '(' + data.station[0]["display-distance"] + ' )'

            res.json(result)
            
        });
    });

}