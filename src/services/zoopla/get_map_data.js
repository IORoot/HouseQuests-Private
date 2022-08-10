module.exports = function(app){

    const https = require('https');
    const axios = require('axios').default;
    const cheerio = require('cheerio');
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │             ZOOPLA MAP              │
    // └─────────────────────────────────────┘
    app.post('/zooplaMap', (req, res) => {

        var target = req.body;

        // At instance level ignore SSL cert issues.
        const agent = new https.Agent({  
            rejectUnauthorized: false
        });

        axios({
            method: 'get',
            url: target,
            headers:{ 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36' },
            httpsAgent: agent
        })
        .then(function (response) {

            var $ = cheerio.load(response.data);

            var data = JSON.parse($('#__NEXT_DATA__').text());

            var properties = data.props.pageProps.initialProps.listings;
        
            var map = {
                item: {
                    id:         "listingId",
                    longitude:  "pos.lng",
                    latitude:   "pos.lat",
                },
                each: function(item){
                    item.source = "zoopla";
                    item.url = "https://zoopla.co.uk/for-sale/details/"+item.id
                    item.id = parseInt(item.id)
                    return item; 
                }
            }

            var result = transform(properties, map);

            res.send(result)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return;
        })

    });
}