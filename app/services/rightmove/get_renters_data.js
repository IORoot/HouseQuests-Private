module.exports = function(app){

    const https = require('https');
    const axios = require('axios').default;
    const cheerio = require('cheerio');
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │          Rightmove Renters          │
    // └─────────────────────────────────────┘
    app.post('/rightmoveRenters', (req, res) => {

        var postcode = JSON.parse(req.body);

        console.log(postcode)

        const postcodeArray = postcode.split(" ")

        var target = 'https://www.zoopla.co.uk/to-rent/property/' + postcodeArray[0];
        
        // At instance level ignore SSL cert issues.
        const agent = new https.Agent({  
            rejectUnauthorized: false
        });

        axios({
            method: 'get',
            url: target,
            httpsAgent: agent
        })
        .then(function (response) {

            var $ = cheerio.load(response.data);
        
            var data = JSON.parse($('#__NEXT_DATA__').text());
            
            data = data.props.pageProps.initialProps.searchResults.pagination.totalResults

            res.json(data)
        
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return;
        })

    });
}