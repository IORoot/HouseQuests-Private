// This now uses Puppeteer to scrape Zoopla!
module.exports = function(app){

    // ┌─────────────────────────────────────┐
    // │           ZOOPLA Property           │
    // └─────────────────────────────────────┘
    app.post('/zooplaProperty', (req, res) => {

        var marker = JSON.parse(req.body);
        var target = marker.url;
        var { transform } = require("node-json-transform");

        // Setup Puppeteer
        const Logger = require('./lib/logger.js');
        const FilePaths = require('./lib/file-paths.js');
        const PuppeteerWrapper = require('./lib/puppeteer-wrapper.js');
        const _logger = new Logger();
        const _filePaths = new FilePaths(_logger, "puppeteer-electron-quickstart");
        const _puppeteerWrapper = new PuppeteerWrapper(_logger, _filePaths,
        { headless: true, width:1920, height: 1080 });


        async function main() {

            try {
                // Visit Target
                const page =  await _puppeteerWrapper.newPage();
                await page.goto(target);
        
                // Extract JSON data from the script tag
                const jsonData = await page.evaluate(() => {
                    // Find the script tag with id "__NEXT_DATA__"
                    const scriptElement = document.getElementById('__NEXT_DATA__');
                    if (scriptElement) {
                        // Extract the text content of the script tag
                        const jsonDataString = scriptElement.textContent;
                        // Parse the text content as JSON
                        return JSON.parse(jsonDataString);
                    } else {
                        // Return null if the script tag is not found
                        return null;
                    }
                });
        
                // Uncomment to output the incoming data.
                console.log('JSON data from Zoopla:', jsonData);
                
                data = jsonData.props.pageProps.listingDetails

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
                        }
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

                // Train stations & Schools
                result.details.schools = []
                result.details.trainStations = []
                if (data.pointsOfInterest){

                    // trains
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

                    // schools
                    data.pointsOfInterest.forEach(function(poi, index) {
                        if ((poi.type == "london_underground_station") || (poi.type == "national_rail_station")){
                            return
                        }
                        let newSchool = {
                            'name': poi.title,
                            'distance': Math.round(poi.distanceMiles * 100) / 100 + ' miles',
                            'report': 'Not Supplied'
                        }

                        result.details.schools.push(newSchool)
                    });
                }
    
                res.send(result)

            } catch (error) {
                console.error('Error extracting JSON data:', error);
            }
           
        }

        (async () => {
            try {
                const chromeSet = await _puppeteerWrapper.setup();
                if (!chromeSet) {
                    return;
                }
                await main();
            } catch(e) {
                _logger.logError('Thrown error:');
                _logger.logError(e);
            } finally {
                await _puppeteerWrapper.cleanup();
            }

            _logger.logInfo('Done. Close window to exit');

            await _logger.exportLogs(_filePaths.logsPath());
        })();

        

    });
}