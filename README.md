# Rightmove / Zoopla Project.

<!-- vscode-markdown-toc -->
* 1. [Refactor](#Refactor)
* 2. [Features](#Features)
* 3. [Layers to add](#Layerstoadd)
* 4. [House Report](#HouseReport)
	* 4.1. [GOV](#GOV)
	* 4.2. [Gov.uk - Land Registry](#Gov.uk-LandRegistry)
	* 4.3. [House Prices](#HousePrices)
* 5. [Crimes](#Crimes)
* 6. [Other Data sources to use](#OtherDatasourcestouse)
	* 6.1. [Census Data](#CensusData)
	* 6.2. [Random data](#Randomdata)
	* 6.3. [Traffic](#Traffic)
	* 6.4. [Getting closest station](#Gettingcloseststation)
	* 6.5. [APIs](#APIs)
* 7. [Data Already Used.](#DataAlreadyUsed.)
	* 7.1. [Schools](#Schools)
	* 7.2. [Universities](#Universities)
	* 7.3. [Police Crime API](#PoliceCrimeAPI)
	* 7.4. [Bus stations / routes](#Busstationsroutes)
	* 7.5. [Tube](#Tube)
	* 7.6. [Trains / Rail Maps](#TrainsRailMaps)
	* 7.7. [City of London MapsServers](#CityofLondonMapsServers)
	* 7.8. [Zoopla / Rightmove Direct APIs & Scraping](#ZooplaRightmoveDirectAPIsScraping)
* 8. [Other Links](#OtherLinks)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## Things I want to do first
- [ ] House Report
- [ ] highlight current house
- [ ] Turn searches on / off
- [ ] Turn blacklist on / off
- [ ] Toggle Favourites on / off (different colours)
- [ ] Advanced location filtering. 
    - AND / OR / NOT / XOR close to features


##  1. <a name='Refactor'></a>Refactor
- [ ] Make all Zoopla/Rightmove requests frontend
- [ ] User Accounts - free / unlimited
- [ ] Loading icon - subtle - in corner?
- [x] Load ALL layers on request, not by default
- [x] Save last Zoopla/Rightmove request
- [x] Popup modal for clearing custom icon colours
- [x] 
    - [x] bus routes
    - [x] academies / free schools
    - [x] state schools
    - [x] universities
    - [x] childrens centers
- [x] Better app structure
- [x] Use Axios or Fetch instead of Request (depreciated)
- [x] Load thumbnail images that link to large.
##  2. <a name='Features'></a>Features

- [ ] House Report

    - Property
      - [ ] Crimes at property
      - [ ] Broadband Services
      - [ ] Council Tax
      - [ ] Price Change History 
      - [ ] Borough
      - [ ] EPC
      - [ ] Ground Rent
      - [ ] Service Charge
      - [ ] Length of Lease
      - [ ] Previously known paid prices 
      - [ ] History of currently listed price (has it gone down since being listed?)
      - [ ] Elevation of building for flats?
      - [ ] planning permissions
      - [ ] Windows / Sunlight / House Orientation


    - Transport
      - [ ] Travel Time to specific location


    - Local Area
      - [ ] Prices of surrounding property. 
        - Price vs Avg Street price of properties
        - Price vs Avg Area price of properties
        - Price vs National Avg
      - [ ] Price of any houses up for sale in surrounding area.
      - [ ] any construction near
      - [ ] Closest Schools
      - [ ] Closest Stations
      - [ ] Census Data
      - [ ] Delivery services (deliveroo, uber-eats, just-eat, etc)
      - [ ] Pollen
      - [ ] air quality


    - Neighbourhood Rating
      - [ ] Ofsted rating of closest school
      - [ ] Crime ratings
          - Number against national average.
          - Type of crime
      - [ ] Supermarket level
  
    - Agent
      - [ ] Estate Agent Link


  
- [ ] Advanced location filtering. 
    - AND / OR / NOT / XOR close to other lng/lats
- [ ] Changing highlightList colour multiple times keeps adding entries to localStorage array. Just replace current one, don't keep adding.
- [ ] favourites always load, no need to query zoopla / rightmove.
- [ ] import / export favourites
- [ ] Elevation of building for flats?
- [ ] highlight current icon
- [ ] square footage
- [ ] properties on a particular route / drive
- [ ] Tube / Train stations say which route they're on 
- [ ] Tube / Train lines - hide / fade / highlight specific lines.
- [ ] Unified Search?
    - Zoopla
    - Rightmove
    - OnTheMarket
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
- [x] OnTheMarket


##  3. <a name='Layerstoadd'></a>Layers to add

- [ ] small supermarkets.
- [ ] Mobile Phone Towers
- [ ] Phone coverage
- [ ] Conservation areas
- [ ] Flood areas
- [ ] waste services
- [ ] any construction near
- [ ] radioactive materials in the land
- [ ] sweage plant / waste plant / recycle center
- [ ] Amazon Prime
- [ ] Bike routes
- [ ] Flight paths
- [ ] Bars / Pubs / Nightclubs near
- [x] Trains (stations / Routes)
- [x] Tube (stations / Routes)
- [x] Buses (Stations / Routes)
- [x] Crime Boroughs
- [x] Crime Hotspots
- [x] Universities
- [x] Bus Routes
- [x] supermarkets. 
- [x] school locations


##  4. <a name='HouseReport'></a>House Report

###  4.1. <a name='GOV'></a>GOV
- [GOV APIs](https://www.api.gov.uk/#uk-public-sector-apis)

###  4.2. <a name='Gov.uk-LandRegistry'></a>Gov.uk - Land Registry
- [Land Registry Data](https://use-land-property-data.service.gov.uk/)

###  4.3. <a name='HousePrices'></a>House Prices

Use Local Property Prices in area to determine how wealthy the area is.
- [Zoopla Lookup](https://www.zoopla.co.uk/house-prices/se13-7aa/?q=SE137AA&search_source=house-prices)
- [nethouseprices Lookup](https://nethouseprices.com/house-prices/se13%207aa)
- [property Prices](https://www.gov.uk/government/collections/price-paid-data)
- [property Price Report Tool](https://landregistry.data.gov.uk/app/ppd)
- 
Postcode-based Standard report
- [Standard property price reports ](https://www.gov.uk/guidance/price-paid-data-standard-reports)
- [Report Tool - generate CSV showing volume of sales in area in price band](https://landregistry.data.gov.uk/app/standard-reports)

##  5. <a name='Crimes'></a>Crimes
- [Crimes at a property](https://data.police.uk/docs/method/crimes-at-location/)



##  6. <a name='OtherDatasourcestouse'></a>Other Data sources to use


###  6.1. <a name='CensusData'></a>Census Data
- [Census 2021](https://www.ons.gov.uk/census/censustransformationprogramme/census2021outputs/2021dataproducts)
- [API details](https://digitalblog.ons.gov.uk/category/api/)
###  6.2. <a name='Randomdata'></a>Random data
- [Various London Maps](https://mappinglondon.co.uk/category/data/)
- [Datastore](https://data.london.gov.uk/dataset?q=location&sort=score%20desc,%20metadata_modified%20desc&_groups_limit=0&res_format=SHP)
- [OpenStreetMap Map Features](https://wiki.openstreetmap.org/wiki/Map_features)
- [OpenStreetMap Tester](]http://overpass-turbo.eu/)
- [Commuter Hotspots](https://www.totallymoney.com/commuter-hotspots/tool/)

###  6.3. <a name='Traffic'></a>Traffic
- [GOV - Road Traffic Stats](https://roadtraffic.dft.gov.uk/#14/51.4569/-0.0177/basemap-countpoints)
- [TomTom Traffic API](https://developer.tomtom.com/traffic-api/documentation/product-information/introduction)
- [Bing Traffic API](https://docs.microsoft.com/en-us/bingmaps/rest-services/traffic/?redirectedfrom=MSDN)
- [MapBox Traffic API](https://docs.mapbox.com/api/navigation/directions/)

###  6.4. <a name='Gettingcloseststation'></a>Getting closest station
-  [Forum Post](https://techforum.tfl.gov.uk/t/api-for-getting-the-nearest-train-stations/1671)
-  [TFL API endpoint](https://api-portal.tfl.gov.uk/api-details#api=StopPoint&operation=StopPoint_GetByGeoPointByQueryLatQueryLonQueryStopTypesQueryRadiusQueryUseSt)

###  6.5. <a name='APIs'></a>APIs
- [Ordinance Survey API](https://api.os.uk/)





##  7. <a name='DataAlreadyUsed.'></a>Data Already Used.

###  7.1. <a name='Schools'></a>Schools
- [London Schools Atlas](https://data.london.gov.uk/dataset/london-schools-atlas)
- [GOV School data](https://www.get-information-schools.service.gov.uk/Downloads)
- [Schools Map](https://apps.london.gov.uk/schools/)

###  7.2. <a name='Universities'></a>Universities
- [UCAS Map](https://www.ucas.com/explore/unis?studyYear=current&map=true)

###  7.3. <a name='PoliceCrimeAPI'></a>Police Crime API
- [Police API](https://data.police.uk/docs/)
- [Crime Stats](https://data.london.gov.uk/strategic-crime-analysis/)
- [Crime Maps](https://open-innovations.org/blog/2018-09-26-crime-maps)

###  7.4. <a name='Busstationsroutes'></a>Bus stations / routes
- [Transport for London Unified API](https://api.tfl.gov.uk/)
- [TfL Bus Stop Locations and Routes](https://data.london.gov.uk/dataset/tfl-bus-stop-locations-and-routes)
- [OpenStreetMap Playground](http://overpass-turbo.eu/)
- [List of bus routes](http://londonbusroutes.net/routes.htm)
- [LIVE London bus map](http://traintimes.org.uk/map/london-buses/#1)

###  7.5. <a name='Tube'></a>Tube

- [TFL API](https://api.tfl.gov.uk/)
- [Tube Map](http://www.tflmap.com/)
- [Access to Jobs commuting](https://www.trustforlondon.org.uk/data/access-to-work-in-london-by-public-and-personal-transport/)
- [Tube map ZONES](https://github.com/oobrien/vis/blob/master/tube/data/zones1to6.json)
- [Tube Map JSON Data](https://github.com/oobrien/vis/tree/master/tube/data)
- [Live Tube Map](http://traintimes.org.uk/map/tube/)
- [TFL API Example requests](https://content.tfl.gov.uk/example-api-requests.pdf)

###  7.6. <a name='TrainsRailMaps'></a>Trains / Rail Maps
- [London Train Stations](https://www.doogal.co.uk/london_stations)
- [Rail Lines](https://maps.walkingclub.org.uk/rail/rail_lines_google_map.shtml)
- [GOV Transport Access / Nodes](https://www.gov.uk/government/publications/national-public-transport-access-node-schema)
- [GOV NaPTAN Data](https://data.3dhub.org.uk/dataset/national-public-transport-access-nodes-naptan-bus-rail-and-tram-stops)
- [LIVE Train Times](http://traintimes.org.uk/map/#lbg)

###  7.7. <a name='CityofLondonMapsServers'></a>City of London MapsServers
- [ArcGIS REST Service](https://www.mapping.cityoflondon.gov.uk/arcgis/rest/services)

###  7.8. <a name='ZooplaRightmoveDirectAPIsScraping'></a>Zoopla / Rightmove Direct APIs & Scraping

- [Python Wrapper for Zoopla](https://anthonybloomer.github.io/zoopla/)
- [PHP Rightmove Property Feed](https://github.com/frozensheep/rightmoveADF)
- [Python Tutorial to scrape Rightmove](https://low-brandon96.medium.com/scraping-property-listings-from-rightmove-bd3cfb36516a)




##  8. <a name='OtherLinks'></a>Other Links
- [Batch Geocoding](https://www.doogal.co.uk/BatchGeocoding)