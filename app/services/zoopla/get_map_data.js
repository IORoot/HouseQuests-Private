// This now uses Puppeteer to scrape Zoopla!
module.exports = function(app){

    app.post('/zooplaMap', (req, res) => {

        var target = req.body;
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

                var properties = jsonData.props.pageProps.listings;
        
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