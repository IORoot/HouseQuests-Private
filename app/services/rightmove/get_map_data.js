module.exports = function(app){

    const https = require('https');
    const axios = require('axios').default;
    const cheerio = require('cheerio');
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │            RIGHTMOVE MAP            │
    // └─────────────────────────────────────┘
    app.post('/rightmoveMap', (req, res) => {

        var target = req.body;
        
        // At instance level
        const agent = new https.Agent({  
            rejectUnauthorized: false
        });
        
        axios({
            method: 'get',
            url: target,
            // headers:{ 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36' },
            httpsAgent: agent
        })
        .then(function (response) {

            var $ = cheerio.load(response.data);
        
            var modeldata = $('script:contains("jsonModel")').text().split(';');

            var data = modeldata.toString().replace('window.jsonModel = ', '');
            data = data.substring(0, data.indexOf('window.jsonModel.propertyTypeOptions') );
            data = JSON.parse(data);
            data = Array.from(data.properties);
        
            var map = {
                item: {
                    id:        "id",
                    longitude: "location.longitude",
                    latitude:  "location.latitude"
                },
                each: function(item){
                    item.source = "rightmove";
                    item.url = "https://rightmove.co.uk/properties/"+item.id
                    return item; 
                }
            }
        
            var result = transform(data, map);

            res.send(result)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return;
        })

    });

}