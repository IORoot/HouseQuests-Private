module.exports = function(app){

    const https = require('https');
    const axios = require('axios').default;
    const cheerio = require('cheerio');
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │          RIGHTMOVE PROPERTY         │
    // └─────────────────────────────────────┘
    app.post('/rightmoveProperty', (req, res) => {

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

            var $ = cheerio.load(response.data);
            
            var modeldata = $('script:contains("PAGE_MODEL")').text().split(';');
        
            var data = modeldata.toString().replace('window.PAGE_MODEL = ', '');
        
            data = JSON.parse(data);

            var map = {
                item: {
                    id:             "propertyData.id",
                    description:    "propertyData.text.description",
                    title:          "propertyData.text.pageTitle",
                    price:          "propertyData.prices.primaryPrice",
                    floorplan:      "propertyData.floorplans[0].url",
                    longitude:      "propertyData.location.longitude",
                    latitude:       "propertyData.location.latitude",
                    postcode:       "analyticsInfo.analyticsProperty.postcode",
                    bedrooms:       "propertyData.bedrooms",
                    tenure:         "propertyData.tenure.tenureType",
                    link:           "metadata.copyLinkUrl",
                    details:        {
                        archived:           "propertyData.status.archived",
                        branch:             "propertyData.customer.branchDisplayName",
                        branchID:           "propertyData.customer.branchId",
                        branchLogo:         "propertyData.customer.logoPath",
                        branchURL:          "propertyData.customer.customerProfileUrl",
                        broadbandUrl:       "propertyData.broadband.broadbandCheckerUrl",
                        councilTaxBand:     "propertyData.livingCosts.councilTaxBand",
                        epcImage:           "propertyData.epcGraphs[0].url",
                        featuresArray:      "propertyData.keyFeatures",
                        groundRent:         "propertyData.livingCosts.annualGroundRent",
                        leaseExpiry:        "propertyData.tenure.yearsRemainingOnLease",
                        listingHistory:     "propertyData.listingHistory",
                        numberBaths:        "propertyData.bathrooms",
                        numberBeds:         "propertyData.bedrooms",
                        pricePerSqFt:       "propertyData.prices.pricePerSqFt",
                        propertyType:       "propertyData.propertySubType",
                        roomsArray:         "propertyData.rooms",
                        serviceCharge:      "propertyData.livingCosts.annualServiceCharge",
                        sharedOwnership:    "propertyData.sharedOwnership.sharedOwnership",
                        sizings:            "propertyData.sizings",
                        status:             "propertyData.status.published",
                        trainStations:      "propertyData.nearestStations",
                    }
                },

                each: function(item){
                    item.source = "rightmove";
                    item.url = "https://rightmove.co.uk/properties/"+item.id
                    item.details.branchURL = 'https://rightmove.co.uk' + item.details.branchURL;
                    return item; 
                }
            }

            var result = transform(data, map);

            // IMAGES
            var imageArray = []
            data.propertyData.images.forEach(function(image, index) {
                imageArray.push({
                    'url': image.url,
                    'thumbnail': image.resizedImageUrls.size476x317
                });
            });
            result['images'] = imageArray;

            // Train stations
            if (result.details.trainStations){
                result.details.trainStations.forEach(function(oldStation, index){
                    result.details.trainStations[index] = {
                        'name': oldStation.name,
                        'type': oldStation.types.join(', '),
                        'distance': Math.round(oldStation.distance * 100) / 100 + ' miles'
                    }
                });
            }

            res.json(result)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return;
        })

    });

}