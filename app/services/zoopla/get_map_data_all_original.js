module.exports = function (application) {

    var totalCount;
    var totalResults = [];

    const https = require('https');
    const axios = require('axios').default;
    var url = require('url');

    application.post('/zooplaAllMap', async function (req, res) {

        var target = req.body;

        // At instance level ignore SSL cert issues.
        const agent = new https.Agent({
            rejectUnauthorized: false
        });

        // ┌─────────────────────────────────────┐
        // │              FIRST 103              │
        // └─────────────────────────────────────┘
        let firstRoundResults = await axios({
            withCredentials: true,
            baseURL: 'https://www.zoopla.co.uk',
            method: 'get',
            url: target,
            httpsAgent: agent,
        })
            .then(function (response) {
                console.log('response')
                console.log(response)
                return parse_results(response)
            })
            .catch(function (error) {
                console.log('error')
                console.log(error);
                return;
            })

        totalCount = firstRoundResults.totalCount
        totalResults = firstRoundResults.markers

        // Get url parts
        const addressParts = url.parse(target, true);


        // ┌─────────────────────────────────────┐
        // │          REST OF THE RESULTS        │
        // └─────────────────────────────────────┘

        let pagination = Math.ceil(totalCount / 100)

        for (let inteval = 2; inteval <= pagination; inteval++) {

            let graphqlURL = 'https://api-graphql-lambda.prod.zoopla.co.uk/graphql'

            let paginatedResults = await axios({
                method: 'post',
                url: graphqlURL,
                headers: {
                    // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36',
                    'x-api-key': '3Vzj2wUfaP3euLsV4NV9h3UAVUR3BoWd5clv9Dvu',
                    'Content-Type': 'application/json'
                },
                httpsAgent: agent,
                data: {
                    "operationName": "getListingMapView",
                    "variables":
                    {
                        "path": addressParts.path + "&pn=" + inteval
                    },
                    "query": "fragment listingFragment on Listing {\n  numberOfVideos\n  numberOfImages\n  numberOfFloorPlans\n  numberOfViews\n  listingId\n  title\n  publishedOnLabel\n  publishedOn\n  availableFrom\n  priceDrop {\n    lastPriceChangeDate\n    percentageChangeLabel\n    __typename\n  }\n  isPremium\n  highlights {\n    description\n    label\n    url\n    __typename\n  }\n  otherPropertyImages {\n    small\n    large\n    caption\n    __typename\n  }\n  branch {\n    name\n    branchDetailsUri\n    phone\n    logoUrl\n    __typename\n  }\n  features {\n    content\n    iconId\n    __typename\n  }\n  image {\n    src\n    caption\n    responsiveImgList {\n      width\n      src\n      __typename\n    }\n    __typename\n  }\n  transports {\n    title\n    poiType\n    distanceInMiles\n    features {\n      zone\n      tubeLines\n      __typename\n    }\n    __typename\n  }\n  flag\n  listingId\n  priceTitle\n  shortPriceTitle\n  price\n  address\n  tags {\n    content\n    __typename\n  }\n  listingUris {\n    contact\n    detail\n    __typename\n  }\n  location {\n    coordinates {\n      latitude\n      longitude\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nquery getListingMapView($path: String!) {\n  searchResults(path: $path) {\n    analyticsTaxonomy {\n      activity\n      areaName\n      bedsMax\n      bedsMin\n      brand\n      countryCode\n      countyAreaName\n      currencyCode\n      emailAllFormShown\n      emailAllTotalAgents\n      expandedResultsCount\n      listingsCategory\n      location\n      outcode\n      outcodes\n      page\n      postalArea\n      priceMax\n      priceMin\n      propertyType\n      radius\n      radiusAutoexpansion\n      regionName\n      resultsSort\n      searchGuid\n      searchIdentifier\n      searchLocation\n      searchResultsCount\n      section\n      totalResults\n      url\n      viewType\n      __typename\n    }\n    analyticsEcommerce {\n      currencyCode\n      impressions {\n        id\n        list\n        position\n        variant\n        __typename\n      }\n      __typename\n    }\n    metaInfo {\n      title\n      description\n      canonicalUri\n      __typename\n    }\n    pagination {\n      pageNumber\n      totalResults\n      totalResultsWasLimited\n      __typename\n    }\n    listings {\n      regular {\n        ...listingFragment\n        __typename\n      }\n      featured {\n        ...listingFragment\n        __typename\n      }\n      extended {\n        ...listingFragment\n        __typename\n      }\n      __typename\n    }\n    filters {\n      fields {\n        group\n        fieldName\n        label\n        isRequired\n        inputType\n        placeholder\n        allowMultiple\n        options\n        value\n        __typename\n      }\n      __typename\n    }\n    sortOrder {\n      currentSortOrder\n      options {\n        i18NLabelKey\n        value\n        __typename\n      }\n      __typename\n    }\n    seoBlurb {\n      category\n      transactionType\n      __typename\n    }\n    links {\n      saveSearch\n      createAlert\n      __typename\n    }\n    polygonV2(path: $path) {\n      polygons\n      radius\n      geoData {\n        coordinates\n        __typename\n      }\n      geoType\n      __typename\n    }\n    polyenc\n    __typename\n  }\n}\n"
                },
            })
                .then(function (response) {

                    return parse_graphql_results(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                    return;
                })

            totalResults = totalResults.concat(paginatedResults)
        }

        res.send(totalResults)
    });
}







function parse_results(response) {
    const cheerio = require('cheerio');
    var { transform } = require("node-json-transform");

    var $ = cheerio.load(response.data);

    var data = JSON.parse($('#__NEXT_DATA__').text());

    var properties = data.props.pageProps.listings;

    var totalCount = properties.length;

    var map = {
        item: {
            id: "listingId",
            longitude: "pos.lng",
            latitude: "pos.lat",
        },
        each: function (item) {
            item.source = "zoopla";
            item.url = "https://zoopla.co.uk/for-sale/details/" + item.id
            item.id = parseInt(item.id)
            return item;
        }
    }

    var result = transform(properties, map);

    return {
        'markers': result,
        'totalCount': totalCount
    }
}



function parse_graphql_results(jsonData) {
    var { transform } = require("node-json-transform");

    var properties = jsonData.data.searchResults.listings.regular;
    properties = properties.concat(jsonData.data.searchResults.listings.featured)
    properties = properties.concat(jsonData.data.searchResults.listings.extended)

    var map = {
        item: {
            id: "listingId",
            longitude: "location.coordinates.longitude",
            latitude: "location.coordinates.latitude",
        },
        each: function (item) {
            item.source = "zoopla";
            item.url = "https://zoopla.co.uk/for-sale/details/" + item.id
            item.id = parseInt(item.id)
            return item;
        }
    }

    var result = transform(properties, map);

    return result
}