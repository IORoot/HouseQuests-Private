# Rightmove / Zoopla Project.


<!-- vscode-markdown-toc -->
* 1. [GOV](#GOV)
* 2. [Gov.uk - Land Registry](#Gov.uk-LandRegistry)
* 3. [House Prices](#HousePrices)
* 4. [Crimes](#Crimes)
* 5. [Random data](#Randomdata)
* 6. [Traffic](#Traffic)
* 7. [Getting closest station](#Gettingcloseststation)
* 8. [APIs](#APIs)
* 9. [Schools](#Schools)
* 10. [Universities](#Universities)
* 11. [Police Crime API](#PoliceCrimeAPI)
* 12. [Bus stations / routes](#Busstationsroutes)
* 13. [Tube](#Tube)
* 14. [Trains / Rail Maps](#TrainsRailMaps)
* 15. [City of London MapsServers](#CityofLondonMapsServers)
* 16. [Zoopla / Rightmove Direct APIs & Scraping](#ZooplaRightmoveDirectAPIsScraping)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Refactor
- [ ] Load layers on request, not by default
    - [x] bus routes
    - [x] academies / free schools
    - [x] state schools
    - [x] universities
    - [x] childrens centers
    - [] supermarkets
- [] Better app structure
- [] Make all Zoopla/Rightmove requests frontend
- [] Save last Zoopla/Rightmove request
- [] User Accounts - free / unlimited
- [] Loading icon - subtle - in corner?
- [x] Popup modal for clearing custom icon colours


# Features

- [] Unified Search?
    - Zoopla
    - Rightmove
    - OnTheMarket
- [] OnTheMarket
    - [JSON](https://www.onthemarket.com/map/show-pins/?search-type=for-sale&min-bedrooms=1&location-id=se13&max-price=325000&min-price=275000&new-home-flag=F&retirement=false&shared-ownership=false&sort-field=keywords&view=map)
- [] House Report
    - [] Prices of surrounding property. 
        - Price vs Avg Street price of properties
        - Price vs Avg Area price of properties
        - Price vs National Avg
        - Prices of houses in street
    - [] Crimes at property
    - [] any construction near
    - [] Broadband Services
    - [] Council tax bands
    - [] Price Change History 
    - [] Extra Zoopla / Rightmove Data
        - Borough
        - EPC (energy performance certificate)
        - Estate Agent Link
        - Ground Rent
        - Service Charge
        - Length of Lease
        - Council Tax
        - Closest Schools
        - Broadband Speed
- [] Tube / Train stations say which route they're on
- [] Advanced location filtering. 
    - AND / OR / NOT / XOR close to features
    - stations / lines / crimes 
- [] Changing highlightList colour multiple times keeps adding entries to localStorage array. Just replace current one, don't keep adding.
- [] favourites always load, no need to query zoopla / rightmove.
- [] import / export favourites
- [x] Highlight properties my changing icon colour (custom colour)
- [x] Show floorplans
- [x] Hide crimes toggle
- [x] Text highlighter
- [x] Better blacklist listing
- [x] Google street-view link on drawer
    - https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=51.485127,-0.055555
- [X] Desatuate / Invert colours / Sepia / Dark-mode
- [x] Blacklist removal (refresh list on click)
- [x] Blacklist add (refresh list on click)


# Layers to add

- [] Broadband Services
- [] school catchment radius
- [] air polution
- [] Delivery services (deliveroo, uber-eats, just-eat, etc)
- [] small supermarkets.
- [] Pollen
- [] Mobile Phone Towers
- [] Phone coverage
- [] Conservation areas
- [] Flood areas
- [] planning permission
- [] waste services
- [] any construction near
- [] radioactive materials in the land
- [] sweage plant / waste plant / recycle center
- [] Amazon Prime
- [] Council tax bands
- [] Bike routes
- [] Flight paths
- [] Bars / Pubs / Nightclubs near
- [] air quality
- [] Windows / Sunlight / House Orientation
- [x] Trains (stations / Routes)
- [x] Tube (stations / Routes)
- [x] Buses (Stations / Routes)
- [x] Crime Boroughs
- [x] Crime Hotspots
- [x] Universities
- [x] Bus Routes
- [x] supermarkets. 
- [x] school locations


Noise Levels

- Are you near a train line?
- Are you near a busy street?
- How busy is the street? Google Traffic?

# House Report

##  1. <a name='GOV'></a>GOV
- [GOV APIs](https://www.api.gov.uk/#uk-public-sector-apis)

##  2. <a name='Gov.uk-LandRegistry'></a>Gov.uk - Land Registry
- [Land Registry Data](https://use-land-property-data.service.gov.uk/)

##  3. <a name='HousePrices'></a>House Prices

Use Local Property Prices in area to determine how wealthy the area is.
- [Zoopla Lookup](https://www.zoopla.co.uk/house-prices/se13-7aa/?q=SE137AA&search_source=house-prices)
- [nethouseprices Lookup](https://nethouseprices.com/house-prices/se13%207aa)
- [property Prices](https://www.gov.uk/government/collections/price-paid-data)
- [property Price Report Tool](https://landregistry.data.gov.uk/app/ppd)
- 
Postcode-based Standard report
- [Standard property price reports ](https://www.gov.uk/guidance/price-paid-data-standard-reports)
- [Report Tool - generate CSV showing volume of sales in area in price band](https://landregistry.data.gov.uk/app/standard-reports)

##  4. <a name='Crimes'></a>Crimes
- [Crimes at a property](https://data.police.uk/docs/method/crimes-at-location/)






# Other Data sources to use

##  5. <a name='Randomdata'></a>Random data
- [Various London Maps](https://mappinglondon.co.uk/category/data/)
- [Datastore](https://data.london.gov.uk/dataset?q=location&sort=score%20desc,%20metadata_modified%20desc&_groups_limit=0&res_format=SHP)
- [OpenStreetMap Map Features](https://wiki.openstreetmap.org/wiki/Map_features)
- [OpenStreetMap Tester](]http://overpass-turbo.eu/)
- [Commuter Hotspots](https://www.totallymoney.com/commuter-hotspots/tool/)

##  6. <a name='Traffic'></a>Traffic
- [GOV - Road Traffic Stats](https://roadtraffic.dft.gov.uk/#14/51.4569/-0.0177/basemap-countpoints)
- [TomTom Traffic API](https://developer.tomtom.com/traffic-api/documentation/product-information/introduction)
- [Bing Traffic API](https://docs.microsoft.com/en-us/bingmaps/rest-services/traffic/?redirectedfrom=MSDN)
- [MapBox Traffic API](https://docs.mapbox.com/api/navigation/directions/)

##  7. <a name='Gettingcloseststation'></a>Getting closest station
-  [Forum Post](https://techforum.tfl.gov.uk/t/api-for-getting-the-nearest-train-stations/1671)
-  [TFL API endpoint](https://api-portal.tfl.gov.uk/api-details#api=StopPoint&operation=StopPoint_GetByGeoPointByQueryLatQueryLonQueryStopTypesQueryRadiusQueryUseSt)

##  8. <a name='APIs'></a>APIs
- [Ordinance Survey API](https://api.os.uk/)





# Data Already Used.

##  9. <a name='Schools'></a>Schools
- [London Schools Atlas](https://data.london.gov.uk/dataset/london-schools-atlas)
- [GOV School data](https://www.get-information-schools.service.gov.uk/Downloads)
- [Schools Map](https://apps.london.gov.uk/schools/)

##  10. <a name='Universities'></a>Universities
- [UCAS Map](https://www.ucas.com/explore/unis?studyYear=current&map=true)

##  11. <a name='PoliceCrimeAPI'></a>Police Crime API
- [Police API](https://data.police.uk/docs/)
- [Crime Stats](https://data.london.gov.uk/strategic-crime-analysis/)
- [Crime Maps](https://open-innovations.org/blog/2018-09-26-crime-maps)

##  12. <a name='Busstationsroutes'></a>Bus stations / routes
- [Transport for London Unified API](https://api.tfl.gov.uk/)
- [TfL Bus Stop Locations and Routes](https://data.london.gov.uk/dataset/tfl-bus-stop-locations-and-routes)
- [OpenStreetMap Playground](http://overpass-turbo.eu/)
- [List of bus routes](http://londonbusroutes.net/routes.htm)
- [LIVE London bus map](http://traintimes.org.uk/map/london-buses/#1)

##  13. <a name='Tube'></a>Tube

- [TFL API](https://api.tfl.gov.uk/)
- [Tube Map](http://www.tflmap.com/)
- [Access to Jobs commuting](https://www.trustforlondon.org.uk/data/access-to-work-in-london-by-public-and-personal-transport/)
- [Tube map ZONES](https://github.com/oobrien/vis/blob/master/tube/data/zones1to6.json)
- [Tube Map JSON Data](https://github.com/oobrien/vis/tree/master/tube/data)
- [Live Tube Map](http://traintimes.org.uk/map/tube/)
- [TFL API Example requests](https://content.tfl.gov.uk/example-api-requests.pdf)

##  14. <a name='TrainsRailMaps'></a>Trains / Rail Maps
- [London Train Stations](https://www.doogal.co.uk/london_stations)
- [Rail Lines](https://maps.walkingclub.org.uk/rail/rail_lines_google_map.shtml)
- [GOV Transport Access / Nodes](https://www.gov.uk/government/publications/national-public-transport-access-node-schema)
- [GOV NaPTAN Data](https://data.3dhub.org.uk/dataset/national-public-transport-access-nodes-naptan-bus-rail-and-tram-stops)
- [LIVE Train Times](http://traintimes.org.uk/map/#lbg)

##  15. <a name='CityofLondonMapsServers'></a>City of London MapsServers
- [ArcGIS REST Service](https://www.mapping.cityoflondon.gov.uk/arcgis/rest/services)

##  16. <a name='ZooplaRightmoveDirectAPIsScraping'></a>Zoopla / Rightmove Direct APIs & Scraping

- [Python Wrapper for Zoopla](https://anthonybloomer.github.io/zoopla/)
- [PHP Rightmove Property Feed](https://github.com/frozensheep/rightmoveADF)
- [Python Tutorial to scrape Rightmove](https://low-brandon96.medium.com/scraping-property-listings-from-rightmove-bd3cfb36516a)






# Other Links
- [Batch Geocoding](https://www.doogal.co.uk/BatchGeocoding)