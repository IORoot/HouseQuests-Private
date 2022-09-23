# Demo Code

```
ccc8f4e8fb7e8c9d5b52673faca84322cfed8e5b76b4634d978edf06f8e13332
```

# Advanced Property Search Project.

* 1. [Keys](#Keys)
* 2. [Things I want to do first](#ThingsIwanttodofirst)
* 3. [Overpass Turbo](#OverpassTurbo)
* 4. [Features](#Features)
* 5. [Layers to add](#Layerstoadd)
* 6. [Other APIs / Links](#OtherAPIsLinks)



##  2. <a name='ThingsIwanttodofirst'></a>Things I want to do first
- [x] User Accounts - free / unlimited
- [x] Free account - only 200 exclusions
- [ ] Loading icon - subtle - in corner?
- [ ] Website and Distribution
- [ ] Updates and Changelog
- [ ] refresh button
- [x] Electron App / Deployment
  - [x] Move requests to client-side
  - [ ] Build to
    - [x] Mac ARM
    - [x] Max x86
    - [ ] Windows
    - [ ] Linux
- [x] Setup simple authentication code system
- [x] Move property details to right drawer and tabs.
- [x] Basic Neighbourhood Rating
- [x] Intro Modal for AUTH Code
- [x] Better URL handling for pasting inputs ( listings page rather than map page)
- [x] Responsive Layout
- [x] Zoopla All not getting the right results?
- [ ] Reset Center of Map
- [ ] National train map
- [ ] Toggle Favourites on / off (different colours)
- [ ] Custom Notes
- [ ] Advanced location filtering. 
    - AND / OR / NOT / XOR close to features
- [ ] Changing highlightList colour multiple times keeps adding entries to localStorage array. Just replace current one, don't keep adding.
- [ ] Tests!
- [ ] Errors. Missing properties like: [https://www.rightmove.co.uk/properties/86419927#/?channel=RES_BUY](https://www.rightmove.co.uk/properties/86419927#/?channel=RES_BUY)
- [ ] Refactor
- [ ] Debugging / Logging / API Trigger alerts
- [ ] Kill-switch to stop everyone with particular version to force update.
- [ ] closest tube/train station
- [ ] Tailwind library not CDN
- [x] Count of exclusions
- [ ] Clear all exclusions






##  3. <a name='OverpassTurbo'></a>Overpass Turbo

[http://overpass-turbo.eu/](http://overpass-turbo.eu/)
This is a very useful API for getting results and exporting as JSON. 
It uses the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) to get it's data.

For example:
[Cafes](http://overpass-turbo.eu/?q=LyoKVGhpcyBoYcSGYmVlbiBnxI1lcmF0ZWQgYnkgdGhlIG92xJJwxIlzLXR1cmJvIHdpemFyZC7EgsSdxJ9yaWdpbmFsIHNlxLBjaMSsxIk6CsOiwoDCnGNhZmXFiMKdCiovCltvdXQ6anNvbl1bdGltZcWWxZgyNV07Ci8vxI_ElMSdciByZXN1bHRzCigKICDFqyBxdcSSxJrEo3J0IGZvcjogxYjFisWMxY7CgMWQxbxub2RlWyJhxaJuaXR5Ij0ixYvFjSJdKHt7YsSqeH19KcWpxbx3YXnGmMaaxI3GncafxqHGo2XGpcanxqnGq8atxq_Fu8WxZWzElGnFnMa1xpvGuMagxqLGj8a9xqjGqm_GrMauxanHgsW-cMS3bsaGxbLFtMW2xbjFpMSYxpV5xak-xanHoXNrx4XFv3Q7&c=BJqcgTuV6O&R)
[Supermarkets or Convenience Stores](http://overpass-turbo.eu/?q=LyoKVGhpcyBoYcSGYmVlbiBnxI1lcmF0ZWQgYnkgdGhlIG92xJJwxIlzLXR1cmJvIHdpemFyZC7EgsSdxJ9yaWdpbmFsIHNlxLBjaMSsxIk6CsOiwoDCnHNob3AgPcS-dXDEkm3EsGtldMS2xL7FjMWOxZBjb27EoW5pxI1jZcWIwp0KKi8KW291dDpqc8WgXVt0aW1lxa_FsTI1XTsKLy_Ej8SUxJ1yIHJlc3VsdHMKKAogIMaDIHF1xJLEmsSjcsWZZm9yOiDFiMWKxZw9xozFk3LFlXLFl3TFqMaTIG5vZGVbIsWLxY0iPca3xZLFlMWWxZgiXSh7e2LEqnh9fSnGgcaUd2F5xrbGuHDGusa8xqnGq8atx4HHg8eFx4fHiceLxrDGimzElGnFoMeRxZzHlMaoxr7GrMeAx4LHhMeGb8eIx4rHjMaVxoTGmMaaIMacxp7GoMaixqTHkj3Fn8WhxI3FpG7FpsavxpTGssa0x6XGuca7x7_FosiCxabHmcetx5zHscawx47HkMa3x6bIi8WgyI3FpWXIkMebx6_Hnceyx6DHosekyJfIiiLIjMiByJzInseux7DHnseexpZwxLduxZnGisaMxo7GkMW8xJjGs3nGgT7Ggci6c8WXxL1xdDs&c=BJqn3uSs8O&R)
[Shops in Long/Lat square](http://overpass-turbo.eu/?q=W291dDpqc29uXVt0aW1lxIHEgzE1xIliYm94OiA1MS4zNjY5NCwgLTAuMTAzM8SixJouNDg4NDU1xKLEpTE0NzQzMl07Ci8vIGdhdGhlciByZXN1bHRzCigKICDEvyBxdcWGeSBwYXJ0IGZvcsSYw6LCgMKcc2hvcD3Fi3DFhm3FnWtldMWlwp3FkiBub2RlWyLFqMWqIj3FvnXFrnLFsHLFsnQiXSh7e8SUxJZ9fSnEvcWTd2F5xb3Fv3DGgcaDxoXGh8aJxovGjcaPxJV4xpLGlMW3xYlsxYNpxIfGmsWpxpzGgsWtxa_FscWzxqLGjsaQxqbGk8aVIMW3xZXFl8WZxZvFncWfxaHFoyDFpcWnxrA9Y8SHdmVuacePY2XFtcW3xbnFu8avxoDGgseMbseOx5DHkmXGt8akxpHGu8W3xpfGmcW-xrDGncecx57HkW7Hk8eixrnGp8a8xqrGrMaux6nHmiLHrMePx67HsMaMxrjGpcezCsaoxZVwcmluxZ_FicWLxY3Fj8SPIMSVZHnEvT7EvciPc8WybMWWdDs&c=BJqd_y3sbQ)

Different Tag types:
[https://wiki.openstreetmap.org/wiki/Map_features](https://wiki.openstreetmap.org/wiki/Map_features)

Different Shop Types:
[https://wiki.openstreetmap.org/wiki/Key:shop#Food,_beverages](https://wiki.openstreetmap.org/wiki/Key:shop#Food,_beverages)








## Neighbourhood Rating

  ### 100m radius
  - [x] Price compared to ALL average of all other properties for sale in area.
  - [x] Number of properties with sale history in postcode
  - [ ] Price compared to any other houses up for sale in area.
  - [ ] Ofsted rating of closest school
  - [x] Crime ratings (in each category) compared to national averages / highest
  - [ ] Closest supermarkets and level of supermarket (high / med / low )
  - [ ] Number of places to rent vs places to own in area
  - [ ] Prices of surrounding properties that have same number of bedrooms.
  
  ### City Average
  - [ ] House Price vs Avg City Price of property with same number of bedrooms.

  ### National Average
  - [ ] Price vs National Avg



  ### Notes

    - Neighbourhood Rating
      - [x] Ofsted rating of closest school
      - [x] Crime ratings
          - Number against national average.
          - Type of crime
      - [ ] Number of renters in area vs owners
      - [x] [Zoopla Lookup](https://www.zoopla.co.uk/house-prices/se13-7aa/?q=SE137AA&search_source=house-prices)
      - [ ] [nethouseprices Lookup](https://nethouseprices.com/house-prices/se13%207aa)
      - [ ] [Postcode-level historical prices paid for local houses](https://landregistry.data.gov.uk/app/qonsole#)
      - [ ] [Standard property price reports ](https://www.gov.uk/guidance/price-paid-data-standard-reports)
      - [ ] [Report Tool - generate CSV showing volume of sales in area in price band](https://landregistry.data.gov.uk/app/standard-reports)
      - [ ] [Violent Crime Hotspots PDF](http://web.archive.org/web/20151207064128/http://lesscrime.info/london_violence.pdf)
      - [ ] [Local Authority Statistics - population / quals / jobs / etc... ](https://www.nomisweb.co.uk/reports/lmp/la/1946157254/report.aspx#tabempunemp)
      - [ ] [ONS (Office National Statistics) Census API details](https://digitalblog.ons.gov.uk/category/api/)
      - [ ] Where people have live that have a seecond address outside london! [https://datashine.org.uk/#table=QS106EW&col=QS106EW0004&ramp=YlOrRd&layers=BTTT&zoom=12&lon=-0.0997&lat=51.5008](https://datashine.org.uk/#table=QS106EW&col=QS106EW0004&ramp=YlOrRd&layers=BTTT&zoom=12&lon=-0.0997&lat=51.5008)
      - [ ] Where people of cool professions live [https://datashine.org.uk/#table=QS606EW&col=QS606EW0048&ramp=PuRd&layers=BTTT&zoom=12&lon=-0.1449&lat=51.5323](https://datashine.org.uk/#table=QS606EW&col=QS606EW0048&ramp=PuRd&layers=BTTT&zoom=12&lon=-0.1449&lat=51.5323)
      - [ ] [Crime Stats](https://data.london.gov.uk/strategic-crime-analysis/)
      - [ ] [Transport for London Unified API](https://api.tfl.gov.uk/)
      - [ ] [TfL Bus Stop Locations and Routes](https://data.london.gov.uk/dataset/tfl-bus-stop-locations-and-routes)
      - [ ] [List of bus routes](http://londonbusroutes.net/routes.htm)
      - [ ] [LIVE London bus map](http://traintimes.org.uk/map/london-buses/#1)
      - [ ] [https://www.adt.co.uk/crime-in-my-area](https://www.adt.co.uk/crime-in-my-area)
      - [ ] No betting shops
      - [ ] No pound-land type shops
      - [ ] Independent shops
      - [ ] Small businesses - companies house
      - [ ] Google Maps £££ indicator for shops
      - [ ] Average price of a one-bed or a four-bed, etc...
      - [ ] [https://www.london.gov.uk/what-we-do/housing-and-land/improving-private-rented-sector/london-rents-map#acc-i-48689](https://www.london.gov.uk/what-we-do/housing-and-land/improving-private-rented-sector/london-rents-map#acc-i-48689)










##  4. <a name='Features'></a>Features

- [ ] House Report

    - Property
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
      - [ ] Price Change History 
      -  [Closest station Forum Post](https://techforum.tfl.gov.uk/t/api-for-getting-the-nearest-train-stations/1671)
      -  [Closest Station TFL API endpoint](https://api-portal.tfl.gov.uk/api-details#api=StopPoint&operation=StopPoint_GetByGeoPointByQueryLatQueryLonQueryStopTypesQueryRadiusQueryUseSt)

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
      - [ ] Is it currently Leasehold or Freehold? Answer: [https://search-property-information.service.gov.uk/search/](https://search-property-information.service.gov.uk/search/)
      - [ ] Show extent and position of registered freehold properties in England and Wales? Answer: [https://use-land-property-data.service.gov.uk/datasets/inspire/download#local-authorities-for-L](https://use-land-property-data.service.gov.uk/datasets/inspire/download#local-authorities-for-L)
      - [ ] Show borders of freehold / leaseholds and title to houses: [https://www.gov.uk/guidance/apply-for-hm-land-registry-business-e-services](https://www.gov.uk/guidance/apply-for-hm-land-registry-business-e-services)
      - [ ] determine what an owner can, or cannot do, with their land or property (restrictive covenants - Inclusion in the dataset confirms that a restrictive covenant is recorded against that land or property): [https://use-land-property-data.service.gov.uk/datasets/res_cov](https://use-land-property-data.service.gov.uk/datasets/res_cov)
      - [ ] Tfl Speed limit map (PDF) [https://content.tfl.gov.uk/london-digital-speed-limit-map.pdf](https://content.tfl.gov.uk/london-digital-speed-limit-map.pdf)
      - [ ] Borough house pricing [https://mappinglondon.co.uk/2015/house-prices-a-borough-cartogram/](https://mappinglondon.co.uk/2015/house-prices-a-borough-cartogram/)
      - [ ] Smelly? [http://goodcitylife.org/smellymaps/index.php](http://goodcitylife.org/smellymaps/index.php)
      - [ ] Age of building in local area [https://mapmaker.cdrc.ac.uk/#/dwelling-age?lon=-0.0191&lat=51.4635&zoom=13.79](https://mapmaker.cdrc.ac.uk/#/dwelling-age?lon=-0.0191&lat=51.4635&zoom=13.79)
      - [x] [London Schools Atlas](https://data.london.gov.uk/dataset/london-schools-atlas)
      - [x] [GOV School data](https://www.get-information-schools.service.gov.uk/Downloads)
      - [x] [Schools Map](https://apps.london.gov.uk/schools/)
      - [ ] [School catchment and info](https://www.schoolguide.co.uk/school-guide-api)
      - [ ] [Ofsted Reports for schools](https://www.compare-school-performance.service.gov.uk/schools-by-type?step=default&table=schools&region=all-england&for=ofsted)
      - [ ] [Ofsted Reports for postcode](https://www.compare-school-performance.service.gov.uk/?searchtype=search-by-location&LocationCoordinates=51.45952%2C-0.01718&keywords=Marsala+Road%2C+Lewisham%2C+London%2C+SE13%2C+London&radius=3)
      - [ ] [Ofsted ratings for postcode](https://reports.ofsted.gov.uk/search?q=&location=Marsala+Road%2C+London+SE13+7AA%2C+UK&lat=51.46056799999999&lon=-0.0168842&radius=0&level_1_types=0)
      - [ ] [Ofsted data view searcher](https://public.tableau.com/app/profile/ofsted/viz/Dataview/DataViewsurvey)
      - [x] [Police API](https://data.police.uk/docs/)
      - [ ] [Coffee](http://overpass-turbo.eu/)

      - [ ] [Access to Jobs commuting](https://www.trustforlondon.org.uk/data/access-to-work-in-london-by-public-and-personal-transport/)




      - [x] [LIVE Train Times](http://traintimes.org.uk/map/#lbg)
      - [ ] [City of London Mapservers ArcGIS REST Service](https://www.mapping.cityoflondon.gov.uk/arcgis/rest/services))

    - National
      - [ ] [House price statistics](https://landregistry.data.gov.uk/app/ukhpi/browse?from=2021-06-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Flondon&to=2022-06-01&lang=en)
      - [ ] [National Statistics / graphs of monthly House price index](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/housepriceindex/may2022)
      - [ ] [Commuter Hotspot Map](https://www.totallymoney.com/commuter-hotspots/tool/)
      - [x] [UCAS Map](https://www.ucas.com/explore/unis?studyYear=current&map=true)
      - [ ] [Crime Maps](https://open-innovations.org/blog/2018-09-26-crime-maps)


    - Agent
      - [ ] Estate Agent Link


    - Tube Map
      - [x] [TFL API](https://api.tfl.gov.uk/)
      - [x] [Tube Map](http://www.tflmap.com/)
      - [ ] [Tube map ZONES](https://github.com/oobrien/vis/blob/master/tube/data/zones1to6.json)
      - [x] [Tube Map JSON Data](https://github.com/oobrien/vis/)
      - [x] [Live Tube Map](http://traintimes.org.uk/map/tube/)
      - [x] [TFL API Example requests](https://content.tfl.gov.uk/example-api-requests.pdf)

    - National Rail
      - [x] [London Train Stations](https://www.doogal.co.uk/london_stations)
      - [x] [Rail Lines](https://maps.walkingclub.org.uk/rail/rail_lines_google_map.shtml)  
      - [x] [GOV Transport Access / Nodes](https://www.gov.uk/government/publications/national-public-transport-access-node-schema)
      - [x] [GOV NaPTAN Data](https://data.3dhub.org.uk/dataset/national-public-transport-access-nodes-naptan-bus-rail-and-tram-stops)
      - [ ] [https://www.openrailwaymap.org/](https://www.openrailwaymap.org/)
      - [ ] [https://nominatim.openstreetmap.org/ui/search.html](https://nominatim.openstreetmap.org/ui/search.html) (used to find locations on overpass turbo)



##  5. <a name='Layerstoadd'></a>Layers to add

- [x] small supermarkets.
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







##  6. <a name='OtherAPIsLinks'></a>Other APIs / Links
- [ ] [GOV APIs](https://www.api.gov.uk/#uk-public-sector-apis)
- [ ] [GOV APIs](https://www.api.gov.uk/index/#index)
- [ ] [Census 2021](https://www.ons.gov.uk/census/censustransformationprogramme/census2021outputs/2021dataproducts)
- [ ] [https://builtplace.com/](https://builtplace.com/)
- [ ] [Various London Maps](https://mappinglondon.co.uk/category/data/)
- [ ] [London Datastore](https://data.london.gov.uk/)
- [ ] [PropertyChecker PAID](https://propertychecker.co.uk/property-details/?postcode=SE13%207AA&paon=11)
- [ ] [Postcode API](https://postcodes.io/docs) - contains more than postcodes.
- [ ] [OpenStreetMap Map Features](https://wiki.openstreetmap.org/wiki/Map_features)
- [ ] [OpenStreetMap Tester](]http://overpass-turbo.eu/)
- [ ] [Batch Geocoding postcodes to long/lats](https://www.doogal.co.uk/BatchGeocoding)
- [ ] [Reverse Geolocation lng/lat to address](https://nominatim.openstreetmap.org/ui/search.html)
- [ ] [Reverse Geolocation lng/lat to address API](https://nominatim.openstreetmap.org/reverse?format=json&lat=54.9824031826&lon=9.2833114795&zoom=18&addressdetails=1)
- [ ] [Openlayers extras](https://viglino.github.io/ol-ext/)