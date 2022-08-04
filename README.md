# Rightmove / Zoopla Project.

[toc]

# Refactor
[] Load layers on request, not by default
    [x] bus routes
    [x] academies / free schools
    [x] state schools
    [x] universities
    [x] childrens centers
    [] supermarkets
[] Better app structure
[] Make all Zoopla/Rightmove requests frontend
[] Save last Zoopla/Rightmove request
[] User Accounts - free / unlimited
[] Loading icon - subtle - in corner?
[x] Popup modal for clearing custom icon colours


# Features

[] House Report
    [] Crimes at property
[] Tube / Train stations say which route they're on
[] Advanced location filtering. 
    - AND / OR / NOT / XOR close to features
    - stations / lines / crimes 
[x] Blacklist removal (refresh list on click)
[x] Blacklist add (refresh list on click)
[] Changing highlightList colour multiple times keeps adding entries to localStorage array. Just replace current one, don't keep adding.
[] favourites always load, no need to query zoopla / rightmove.
[] import / export favourites
[x] Highlight properties my changing icon colour (custom colour)
[x] Show floorplans
[x] Hide crimes toggle
[x] Text highlighter
[x] Better blacklist listing
[x] Google street-view link on drawer
    - https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=51.485127,-0.055555
[X] Desatuate / Invert colours / Sepia / Dark-mode


# Layers to add

[] school catchment radius
[] air polution
[] Delivery services (deliveroo, uber-eats, just-eat, etc)
[] small supermarkets.
[] Pollen
[] 5G Towers
[] Broadband Services
[] Phone coverage
[] Conservation areas
[] Flood areas
[] planning permission
[] waste services
[] any construction near
[] radioactive materials in the land
[] sweage plant / waste plant / recycle center
[] Amazon Prime
[] Council tax bands
[] Bike routes
[] Flight paths
[] Bars / Pubs / Nightclubs near
[] air quality
[] Windows / Sunlight / House Orientation
[x] Trains (stations / Routes)
[x] Tube (stations / Routes)
[x] Buses (Stations / Routes)
[x] Crime Boroughs
[x] Crime Hotspots
[x] Universities
[x] Bus Routes
[x] supermarkets. 
[x] school locations


Noise Levels

- Are you near a train line?
- Are you near a busy street?
- How busy is the street? Google Traffic?
- 

# House Report


## Gov.uk - Land Registry
- [Land Registry Data](https://use-land-property-data.service.gov.uk/)

## House Prices

Use Local Property Prices in area to determine how wealthy the area is.
- [Zoopla Lookup](https://www.zoopla.co.uk/house-prices/se13-7aa/?q=SE137AA&search_source=house-prices)
- [nethouseprices Lookup](https://nethouseprices.com/house-prices/se13%207aa)
- [property Prices](https://www.gov.uk/government/collections/price-paid-data)
- [property Price Report Tool](https://landregistry.data.gov.uk/app/ppd)
- 
Postcode-based Standard report
- [Standard property price reports ](https://www.gov.uk/guidance/price-paid-data-standard-reports)
- [Report Tool - generate CSV showing volume of sales in area in price band](https://landregistry.data.gov.uk/app/standard-reports)

## Crimes
- [Crimes at a property](https://data.police.uk/docs/method/crimes-at-location/)






# Other Data sources to use

## Random data
- [Various London Maps](https://mappinglondon.co.uk/category/data/)
- [Datastore](https://data.london.gov.uk/dataset?q=location&sort=score%20desc,%20metadata_modified%20desc&_groups_limit=0&res_format=SHP)
- [OpenStreetMap Map Features](https://wiki.openstreetmap.org/wiki/Map_features)
- [OpenStreetMap Tester](]http://overpass-turbo.eu/)
- [Commuter Hotspots](https://www.totallymoney.com/commuter-hotspots/tool/)

## Traffic
- [GOV - Road Traffic Stats](https://roadtraffic.dft.gov.uk/#14/51.4569/-0.0177/basemap-countpoints)
- [TomTom Traffic API](https://developer.tomtom.com/traffic-api/documentation/product-information/introduction)
- [Bing Traffic API](https://docs.microsoft.com/en-us/bingmaps/rest-services/traffic/?redirectedfrom=MSDN)
- [MapBox Traffic API](https://docs.mapbox.com/api/navigation/directions/)

## Getting closest station
-  [Forum Post](https://techforum.tfl.gov.uk/t/api-for-getting-the-nearest-train-stations/1671)
-  [TFL API endpoint](https://api-portal.tfl.gov.uk/api-details#api=StopPoint&operation=StopPoint_GetByGeoPointByQueryLatQueryLonQueryStopTypesQueryRadiusQueryUseSt)

## APIs
- [Ordinance Survey API](https://api.os.uk/)





# Data Already Used.

## Schools
- [London Schools Atlas](https://data.london.gov.uk/dataset/london-schools-atlas)
- [GOV School data](https://www.get-information-schools.service.gov.uk/Downloads)
- [Schools Map](https://apps.london.gov.uk/schools/)

## Universities
- [UCAS Map](https://www.ucas.com/explore/unis?studyYear=current&map=true)

## Police Crime API
- [Police API](https://data.police.uk/docs/)
- [Crime Stats](https://data.london.gov.uk/strategic-crime-analysis/)
- [Crime Maps](https://open-innovations.org/blog/2018-09-26-crime-maps)

## Bus stations / routes
- [Transport for London Unified API](https://api.tfl.gov.uk/)
- [TfL Bus Stop Locations and Routes](https://data.london.gov.uk/dataset/tfl-bus-stop-locations-and-routes)
- [OpenStreetMap Playground](http://overpass-turbo.eu/)
- [List of bus routes](http://londonbusroutes.net/routes.htm)
- [LIVE London bus map](http://traintimes.org.uk/map/london-buses/#1)

## Tube

- [TFL API](https://api.tfl.gov.uk/)
- [Tube Map](http://www.tflmap.com/)
- [Access to Jobs commuting](https://www.trustforlondon.org.uk/data/access-to-work-in-london-by-public-and-personal-transport/)
- [Tube map ZONES](https://github.com/oobrien/vis/blob/master/tube/data/zones1to6.json)
- [Tube Map JSON Data](https://github.com/oobrien/vis/tree/master/tube/data)
- [Live Tube Map](http://traintimes.org.uk/map/tube/)
- [TFL API Example requests](https://content.tfl.gov.uk/example-api-requests.pdf)

## Trains / Rail Maps
- [London Train Stations](https://www.doogal.co.uk/london_stations)
- [Rail Lines](https://maps.walkingclub.org.uk/rail/rail_lines_google_map.shtml)
- [GOV Transport Access / Nodes](https://www.gov.uk/government/publications/national-public-transport-access-node-schema)
- [GOV NaPTAN Data](https://data.3dhub.org.uk/dataset/national-public-transport-access-nodes-naptan-bus-rail-and-tram-stops)
- [LIVE Train Times](http://traintimes.org.uk/map/#lbg)

## City of London MapsServers
- [ArcGIS REST Service](https://www.mapping.cityoflondon.gov.uk/arcgis/rest/services)

## Zoopla / Rightmove Direct APIs & Scraping

- [Python Wrapper for Zoopla](https://anthonybloomer.github.io/zoopla/)
- [PHP Rightmove Property Feed](https://github.com/frozensheep/rightmoveADF)
- [Python Tutorial to scrape Rightmove](https://low-brandon96.medium.com/scraping-property-listings-from-rightmove-bd3cfb36516a)






# Other Links
- [Batch Geocoding](https://www.doogal.co.uk/BatchGeocoding)