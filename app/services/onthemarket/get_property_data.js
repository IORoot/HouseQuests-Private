module.exports = function(app){

    const https = require('https');
    const axios = require('axios').default;
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │          RIGHTMOVE PROPERTY         │
    // └─────────────────────────────────────┘
    app.post('/onthemarketProperty', (req, res) => {

        var marker = JSON.parse(req.body);
        var target = marker.url;

        // At instance level ignore SSL cert issues.
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
                    floorplan:      "floorplans[0].large-url",
                    longitude:      "location.lon",
                    latitude:       "location.lat",
                    bedrooms:       "bedrooms-text",
                    tenure:         "unknown",
                    link:           "canonical-url",
                    details:        {
                        area:               "minimum-area",
                        branch:             "agent.name",
                        branchID:           "agent.branch_id",
                        branchLogo:         "agent.logo-path",
                        branchURL:          "agent.website-url",
                        broadband:          "broadband",
                        dataLayer:          "header-data.data-layer",
                        epcRating:          "epc.rating",
                        featuresArray:      "features",
                        newHome:            "new-home-flag",
                        numberBaths:        "bathrooms",
                        numberBeds:         "bedrooms",
                        propertyType:       "prop-sub-id",
                        schools:            "school",
                        mobileReception:    "mobile-reception",
                        trainStations:      "station",
                    }
                },

                each: function(item){
                    item.source = "onthemarket";
                    item.url = "https://www.onthemarket.com/details/"+item.id

                    if (item.details.dataLayer){
                        let dataLayer = JSON.parse(item.details.dataLayer)
                        item.postcode = dataLayer.postcode
                    }
                    
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

            // Closest Station
            result['station'] = data.station[0].name + '(' + data.station[0]["display-distance"] + ' )'

            // Train stations
            if (result.details.trainStations){
                result.details.trainStations.forEach(function(oldStation, index){

                    let lines = ''
                    oldStation['all-networks'].forEach(function(line){
                        lines += line.type + ', '
                    })

                    result.details.trainStations[index] = {
                        'name': oldStation['full-name'],
                        'type': lines,
                        'distance': oldStation['display-distance'] 
                    }
                });
            }

            // schools
            if (result.details.schools){
                result.details.schools.forEach(function(oldSchool, index){

                    let report = 'N/A'
                    if (oldSchool['report-descriptive']){
                        report = oldSchool['report-descriptive']
                    }
                    
                    result.details.schools[index] = {
                        'name': oldSchool['name'],
                        'distance': oldSchool['display-distance'],
                        'report': report
                    }
                })
            }

            // Loop through key-items
            data['key-info'].forEach(function(infoItem){
                
                if(infoItem.title.toLowerCase() == 'tenure'){
                    result.tenure = infoItem.value
                }                

                if(infoItem.title.toLowerCase() == 'council tax'){
                    result.details.councilTaxBand = infoItem.value
                }

                if(infoItem.title.toLowerCase() == 'broadband'){
                    result.details.broadband = infoItem.value
                }
            })

            // Make features an Array of strings.
            result.details.featuresArray.forEach(function(item, index){
                result.details.featuresArray[index] = item.feature
            })


            res.json(result)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return;
        })

    });

}