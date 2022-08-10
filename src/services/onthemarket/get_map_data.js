module.exports = function(app){

    const https = require('https');
    const axios = require('axios').default;
    const url = require('url')
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │            RIGHTMOVE MAP            │
    // └─────────────────────────────────────┘
    app.post('/onthemarketMap', (req, res) => {

        const requestURL = new URL(req.body)

        let pathparts = requestURL.pathname.split('/');
        let searchType = pathparts[1]
        let numBeds = pathparts[2].charAt(0)
        let locationID = pathparts[3]

        let constructedURL = 'https://www.onthemarket.com/map/show-pins/'
        constructedURL += '?search-type='+searchType;
        constructedURL += '&min-bedrooms='+numBeds;
        constructedURL += '&location-id='+locationID;
        constructedURL += '&'+requestURL.searchParams.toString()

        // At instance level ignore SSL cert issues.
        const agent = new https.Agent({  
            rejectUnauthorized: false
        });
        
        axios({
            method: 'get',
            url: constructedURL,
            headers:{ 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36' },
            httpsAgent: agent
        })
        .then(function (response) {

            data = response.data;
            data = Array.from(data.properties);
        
            var map = {
                item: {
                    id:        "id",
                    longitude: "location.lon",
                    latitude:  "location.lat"
                },
                each: function(item){
                    item.source = "onthemarket";
                    item.url = "https://www.onthemarket.com/details/"+item.id
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