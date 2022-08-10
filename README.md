# Rightmove / Zoopla Project.

* 1. [Things I want to do first](#ThingsIwanttodofirst)
* 2. [Refactor](#Refactor)
* 3. [Features](#Features)
* 4. [Layers to add](#Layerstoadd)
* 5. [House Report](#HouseReport)
	* 5.1. [GOV](#GOV)
	* 5.2. [Gov.uk - Land Registry](#Gov.uk-LandRegistry)
	* 5.3. [House Prices](#HousePrices)
* 6. [Crimes](#Crimes)
* 7. [Other Data sources to use](#OtherDatasourcestouse)
	* 7.1. [Census Data](#CensusData)
	* 7.2. [Random data](#Randomdata)
	* 7.3. [Traffic](#Traffic)
	* 7.4. [Getting closest station](#Gettingcloseststation)
	* 7.5. [APIs](#APIs)
* 8. [Data Already Used.](#DataAlreadyUsed.)
	* 8.1. [Schools](#Schools)
	* 8.2. [Universities](#Universities)
	* 8.3. [Police Crime API](#PoliceCrimeAPI)
	* 8.4. [Bus stations / routes](#Busstationsroutes)
	* 8.5. [Tube](#Tube)
	* 8.6. [Trains / Rail Maps](#TrainsRailMaps)
	* 8.7. [City of London MapsServers](#CityofLondonMapsServers)
	* 8.8. [Zoopla / Rightmove Direct APIs & Scraping](#ZooplaRightmoveDirectAPIsScraping)
* 9. [Other Links](#OtherLinks)

##  1. <a name='ThingsIwanttodofirst'></a>Things I want to do first
- [ ] House Report
- [ ] highlight current house
- [x] Turn searches on / off
- [x] measurement tool (walk / cycle / drive)
- [x] Turn blacklist on / off
- [ ] Toggle Favourites on / off (different colours)
- [ ] Advanced location filtering. 
    - AND / OR / NOT / XOR close to features


##  2. <a name='Refactor'></a>Refactor
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
##  3. <a name='Features'></a>Features

- [ ] House Report

    - Property
      - [x] Crimes at property
      - [x] Broadband Services
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
      - [ ] Closest Schools + ofsted rating
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
      - [ ] Number of renters in area vs owners
  
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


##  4. <a name='Layerstoadd'></a>Layers to add

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


##  5. <a name='HouseReport'></a>House Report

###  5.1. <a name='GOV'></a>GOV
- [GOV APIs](https://www.api.gov.uk/#uk-public-sector-apis)

###  5.2. <a name='Gov.uk-LandRegistry'></a>Gov.uk - Land Registry
- [Land Registry Data](https://use-land-property-data.service.gov.uk/)

###  5.3. <a name='HousePrices'></a>House Prices

Use Local Property Prices in area to determine how wealthy the area is.
- [Zoopla Lookup](https://www.zoopla.co.uk/house-prices/se13-7aa/?q=SE137AA&search_source=house-prices)
- [nethouseprices Lookup](https://nethouseprices.com/house-prices/se13%207aa)
- [property Prices](https://www.gov.uk/government/collections/price-paid-data)
- [property Price Report Tool](https://landregistry.data.gov.uk/app/ppd)
- 
Postcode-based Standard report
- [Standard property price reports ](https://www.gov.uk/guidance/price-paid-data-standard-reports)
- [Report Tool - generate CSV showing volume of sales in area in price band](https://landregistry.data.gov.uk/app/standard-reports)

##  6. <a name='Crimes'></a>Crimes
- [Crimes at a property](https://data.police.uk/docs/method/crimes-at-location/)



##  7. <a name='OtherDatasourcestouse'></a>Other Data sources to use


###  7.1. <a name='CensusData'></a>Census Data
- [Census 2021](https://www.ons.gov.uk/census/censustransformationprogramme/census2021outputs/2021dataproducts)
- [API details](https://digitalblog.ons.gov.uk/category/api/)
###  7.2. <a name='Randomdata'></a>Random data
- [Various London Maps](https://mappinglondon.co.uk/category/data/)
- [Datastore](https://data.london.gov.uk/dataset?q=location&sort=score%20desc,%20metadata_modified%20desc&_groups_limit=0&res_format=SHP)
- [OpenStreetMap Map Features](https://wiki.openstreetmap.org/wiki/Map_features)
- [OpenStreetMap Tester](]http://overpass-turbo.eu/)
- [Commuter Hotspots](https://www.totallymoney.com/commuter-hotspots/tool/)
- [PropertyChecker](https://propertychecker.co.uk/property-details/?postcode=SE13%207AA&paon=11)
- [Postcode API](https://postcodes.io/docs) - contains more than postcodes.

###  7.3. <a name='Traffic'></a>Traffic
- [GOV - Road Traffic Stats](https://roadtraffic.dft.gov.uk/#14/51.4569/-0.0177/basemap-countpoints)
- [TomTom Traffic API](https://developer.tomtom.com/traffic-api/documentation/product-information/introduction)
- [Bing Traffic API](https://docs.microsoft.com/en-us/bingmaps/rest-services/traffic/?redirectedfrom=MSDN)
- [MapBox Traffic API](https://docs.mapbox.com/api/navigation/directions/)

###  7.4. <a name='Gettingcloseststation'></a>Getting closest station
-  [Forum Post](https://techforum.tfl.gov.uk/t/api-for-getting-the-nearest-train-stations/1671)
-  [TFL API endpoint](https://api-portal.tfl.gov.uk/api-details#api=StopPoint&operation=StopPoint_GetByGeoPointByQueryLatQueryLonQueryStopTypesQueryRadiusQueryUseSt)

###  7.5. <a name='APIs'></a>APIs
- [Ordinance Survey API](https://api.os.uk/)





##  8. <a name='DataAlreadyUsed.'></a>Data Already Used.

###  8.1. <a name='Schools'></a>Schools
- [London Schools Atlas](https://data.london.gov.uk/dataset/london-schools-atlas)
- [GOV School data](https://www.get-information-schools.service.gov.uk/Downloads)
- [Schools Map](https://apps.london.gov.uk/schools/)

###  8.2. <a name='Universities'></a>Universities
- [UCAS Map](https://www.ucas.com/explore/unis?studyYear=current&map=true)

###  8.3. <a name='PoliceCrimeAPI'></a>Police Crime API
- [Police API](https://data.police.uk/docs/)
- [Crime Stats](https://data.london.gov.uk/strategic-crime-analysis/)
- [Crime Maps](https://open-innovations.org/blog/2018-09-26-crime-maps)

###  8.4. <a name='Busstationsroutes'></a>Bus stations / routes
- [Transport for London Unified API](https://api.tfl.gov.uk/)
- [TfL Bus Stop Locations and Routes](https://data.london.gov.uk/dataset/tfl-bus-stop-locations-and-routes)
- [OpenStreetMap Playground](http://overpass-turbo.eu/)
- [List of bus routes](http://londonbusroutes.net/routes.htm)
- [LIVE London bus map](http://traintimes.org.uk/map/london-buses/#1)

###  8.5. <a name='Tube'></a>Tube

- [TFL API](https://api.tfl.gov.uk/)
- [Tube Map](http://www.tflmap.com/)
- [Access to Jobs commuting](https://www.trustforlondon.org.uk/data/access-to-work-in-london-by-public-and-personal-transport/)
- [Tube map ZONES](https://github.com/oobrien/vis/blob/master/tube/data/zones1to6.json)
- [Tube Map JSON Data](https://github.com/oobrien/vis/tree/master/tube/data)
- [Live Tube Map](http://traintimes.org.uk/map/tube/)
- [TFL API Example requests](https://content.tfl.gov.uk/example-api-requests.pdf)

###  8.6. <a name='TrainsRailMaps'></a>Trains / Rail Maps
- [London Train Stations](https://www.doogal.co.uk/london_stations)
- [Rail Lines](https://maps.walkingclub.org.uk/rail/rail_lines_google_map.shtml)
- [GOV Transport Access / Nodes](https://www.gov.uk/government/publications/national-public-transport-access-node-schema)
- [GOV NaPTAN Data](https://data.3dhub.org.uk/dataset/national-public-transport-access-nodes-naptan-bus-rail-and-tram-stops)
- [LIVE Train Times](http://traintimes.org.uk/map/#lbg)

###  8.7. <a name='CityofLondonMapsServers'></a>City of London MapsServers
- [ArcGIS REST Service](https://www.mapping.cityoflondon.gov.uk/arcgis/rest/services)

###  8.8. <a name='ZooplaRightmoveDirectAPIsScraping'></a>Zoopla / Rightmove Direct APIs & Scraping

- [Python Wrapper for Zoopla](https://anthonybloomer.github.io/zoopla/)
- [PHP Rightmove Property Feed](https://github.com/frozensheep/rightmoveADF)
- [Python Tutorial to scrape Rightmove](https://low-brandon96.medium.com/scraping-property-listings-from-rightmove-bd3cfb36516a)




##  9. <a name='OtherLinks'></a>Other Links
- [Batch Geocoding](https://www.doogal.co.uk/BatchGeocoding)