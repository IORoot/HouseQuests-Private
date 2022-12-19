module.exports = function(app){

    const https = require('https');
    const axios = require('axios').default;
    const url = require('url')
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │            ONTHEMARKET MAP          │
    // └─────────────────────────────────────┘
    app.post('/onthemarketMap', (req, res) => {

        const requestURL = url.parse(req.body, true)

        // Split the pathname into an array
        if (!requestURL.pathname){ return }
        let pathparts = requestURL.pathname.split('/');


        // SEARCH-TYPE Get the first path part (which should be the search-type)
        let searchType = pathparts[1]
        if (!searchType){ return }
        if (searchType !== 'to-rent' && searchType !== 'for-sale'){ return }
        

        // PROPERTY-TYPE & Number of Beds
        let propertyType = pathparts[2]
        if (!propertyType){ return }
        let firstCharacter = propertyType.charAt(0)
        let numBeds = null
        if (firstCharacter >= '0' && firstCharacter <= '9') { numBeds = firstCharacter }


        // LOCATION ID
        let locationID = pathparts[3]

        // Construct the correct URL
        let constructedURL = 'https://www.onthemarket.com/map/show-pins/'

        if (searchType){
            constructedURL += '?search-type='+searchType;
        }
        
        if (numBeds){
            constructedURL += '&min-bedrooms='+numBeds;
        }
        
        if (locationID){
            constructedURL += '&location-id='+locationID;
        }
        
        if (requestURL.search){
            let searchQuery = requestURL.search.toString().replace(/^\?/, '')
            constructedURL += '&'+searchQuery
        }

        // At instance level ignore SSL cert issues.
        const agent = new https.Agent({  
            rejectUnauthorized: false
        });
        
        axios({
            method: 'get',
            url: constructedURL,
            // headers:{ 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36' },
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