module.exports = function(app){

    const https = require('https');
    const axios = require('axios').default;
    const cheerio = require('cheerio');
    var { transform } = require("node-json-transform");

    // ┌─────────────────────────────────────┐
    // │           ZOOPLA Property           │
    // └─────────────────────────────────────┘
    app.post('/zooplaProperty', (req, res) => {

        var marker = JSON.parse(req.body);
        var target = marker.url;
        
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

            data = data.props.pageProps.listingDetails

            var map = {
                item: {
                    id:             "listingId",
                    description:    "detailedDescription",
                    title:          "title",
                    price:          "pricing.label",
                    floorplan:      "floorPlan.image[0].filename",
                    longitude:      "location.coordinates.longitude",
                    latitude:       "location.coordinates.latitude",
                    bedrooms:       "counts.numBedrooms",
                    tenure:         "analyticsTaxonomy.tenure",
                    details:        {
                        area:               "floorArea",
                        auction:            "pricing.isAuction",
                        branch:             "branch.name",
                        branchID:           "branch.branchId",
                        branchLogo:         "branch.logoUrl",
                        branchURL:          "branch.branchResultsUri",
                        category:           "category",
                        chain:              "analyticsTaxonomy.chainFree",
                        councilTaxBand:     "councilTaxBand",
                        deposit:            "deposit.label",
                        epcImage:           "epc.image[0].filename",
                        featuresArray:      "features.bullets",
                        furnishedState:     "analyticsTaxonomy.furnishedState",
                        groundRent:         "groundRent.label",
                        leaseExpiry:        "leaseExpiry.yearsRemaining",
                        listingCondition:   "analyticsTaxonomy.listingCondition",
                        numberBaths:        "analyticsTaxonomy.numBaths",
                        numberBeds:         "analyticsTaxonomy.numBeds",
                        pointsOfInterest:   "pointsOfInterest",
                        propertyType:       "propertyType",
                        published:          "publishedOn",
                        retirementHome:     "analyticsTaxonomy.isRetirementHome",
                        section:            "section",
                        serviceCharge:      "serviceCharge",
                        sharedOwnership:    "analyticsTaxonomy.isSharedOwnership",
                        size:               "analyticsTaxonomy.sizeSqFeet",
                        statisticsArray:    "marketStats",
                        postalIncode:       "analyticsTaxonomy.incode",
                        postalOutcode:      "analyticsTaxonomy.outcode",
                    },
                },
                each: function(item){
                    item.source = "zoopla";
                    item.url = "https://zoopla.co.uk/for-sale/details/"+item.id
                    item.postcode =  item.details.postalOutcode + " " + item.details.postalIncode
                    item.link = "https://zoopla.co.uk/for-sale/details/"+item.id
                    item.floorplan = "https://lid.zoocdn.com/u/1600/1200/"+item.floorplan
                    if (item.details.epcImage){
                        item.details.epcImage = "https://lid.zoocdn.com/u/1600/1200/"+item.details.epcImage
                    }
                    return item; 
                }
            }
        
            var result = transform(data, map);

            // IMAGES
            // Convert Images array to a standard list of URLs. 
            // [ 'url': 'www', 'url': 'www', ...]
            var imageArray = []
            data.propertyImage.forEach(function(image, index) {
                imageArray.push({ 
                    'url': "https://lid.zoocdn.com/u/1600/1200/" + image.filename,
                    'thumbnail': "https://lid.zoocdn.com/u/480/360/" + image.filename
                });
            });
            result['images'] = imageArray;

            // Train stations
            result.details.trainStations = []
            if (data.pointsOfInterest){
                data.pointsOfInterest.forEach(function(poi, index) {
                    if (!(poi.type == "london_underground_station") || (poi.type == "national_rail_station")){
                        return
                    }
                    let newStation = {
                        'name': poi.title,
                        'type': poi.type,
                        'distance': Math.round(poi.distanceMiles * 100) / 100 + ' miles'
                    }

                    result.details.trainStations.push(newStation)
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