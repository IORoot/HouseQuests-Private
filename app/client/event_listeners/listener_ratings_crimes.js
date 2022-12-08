// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import { output_neighbourhood_row } from '../drawer/output_neighbourhood_row.js'

export function listener_ratings_crimes()
{

    const propertyNeighbourhoodCrimesButton = document.getElementById('load-neighbourhood-crimes');

    propertyNeighbourhoodCrimesButton.addEventListener('click', async function(event) {

        show_spinner()

        // Get current ID.
        const propertyLongitude = document.getElementById('drawer-longitude').dataset.longitude;
        const propertyLatitude = document.getElementById('drawer-latitude').dataset.latitude;

        let policeURL = 'https://data.police.uk/api/crimes-street/all-crime'
        policeURL += '?'
        policeURL += 'lat='+propertyLatitude
        policeURL += '&'
        policeURL += 'lng='+propertyLongitude

        const crimeMarkers = await fetch(policeURL, {method: 'GET'})
            .then(response => response.json())
            .catch(function(error) {
                console.log("ERROR:"+error);
            });

        // ┌─────────────────────────────────────┐
        // │     Update Neighbourhood Rating     │
        // └─────────────────────────────────────┘
        var rating = 'N/A'
        var currentValue = crimeMarkers.length
        switch (true) {
            case (currentValue < 500):
                rating = '<span class="text-emerald-400">Great</span>';
                break;
            case (currentValue < 750):
                rating = '<span class="text-yellow-400">Good</span>';
                break;
            case (currentValue < 1000):
                rating = '<span class="text-orange-400">OK</span>';
                break;
            case (currentValue < 1500):
                rating = '<span class="text-red-400">High</span>';
                break;
            case (currentValue > 1500):
                    rating = '<span class="text-red-700">Extreme</span>';
                    break;
            default:
                rating = "N/A";
                break;
        }
        output_neighbourhood_row({
            'attribute':    crimeMarkers.length,
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4L20 2C18.85 2.64 17.4 3 16 3C14.6 3 13.14 2.63 12 2C10.86 2.63 9.4 3 8 3C6.6 3 5.15 2.64 4 2L2 4C2 4 4 6 4 8S2 14 2 16C2 20 12 22 12 22S22 20 22 16C22 14 20 10 20 8S22 4 22 4M15.05 16.45L11.97 14.59L8.9 16.45L9.72 12.95L7 10.61L10.58 10.3L11.97 7L13.37 10.29L16.95 10.6L14.23 12.94L15.05 16.45Z"/></svg>',
            'target':       'neighbourhood-results-table',
            'title':        'Number of current crimes in 1-mile radius for ' + currentProperty.postcode +'.',
            'guide':        '(Lower is better)',
            'rating':       rating
        })


        // ┌─────────────────────────────────────┐
        // │     Update Neighbourhood Crimes     │
        // └─────────────────────────────────────┘
        crime_groupings(crimeMarkers)

        hide_spinner()
    });

}


function crime_groupings(crimeMarkers)
{
    // Data from  https://crimerate.co.uk/london/westminster-vs-bradford-x-west-yorkshire
    // Crime MAX for CITIES (Westminster vs bradford (worst in UK))
    // { 'category': 'anti-social-behaviour', 'max': 15776 },
    // { 'category': 'bicycle-theft', 'max': 1376 },
    // { 'category': 'burglary', 'max': 2237 },
    // { 'category': 'criminal-damage-arson', 'max': 5407 },
    // { 'category': 'drugs', 'max': 2758 },
    // { 'category': 'other-theft', 'max': 9929 },
    // { 'category': 'possession-of-weapons', 'max': 458 },
    // { 'category': 'public-order', 'max': 7158 },
    // { 'category': 'robbery', 'max': 2133 },
    // { 'category': 'shoplifting', 'max': 2505 },
    // { 'category': 'theft-from-the-person', 'max': 7816 },
    // { 'category': 'vehicle-crime', 'max': 3347 },
    // { 'category': 'violent-crime', 'max': 25193 },
    // { 'category': 'other-crime', 'max': 1344 }


    var crimeCategories = [
        { 'category': 'anti-social-behaviour', 'max': 450 },
        { 'category': 'bicycle-theft', 'max': 100 },
        { 'category': 'burglary', 'max': 120 },
        { 'category': 'criminal-damage-arson', 'max': 100 },
        { 'category': 'drugs', 'max': 100 },
        { 'category': 'other-theft', 'max': 1000 },
        { 'category': 'possession-of-weapons', 'max': 10 },
        { 'category': 'public-order', 'max': 150 },
        { 'category': 'robbery', 'max': 176 },
        { 'category': 'shoplifting', 'max': 180 },
        { 'category': 'theft-from-the-person', 'max': 1022 },
        { 'category': 'vehicle-crime', 'max': 172 },
        { 'category': 'violent-crime', 'max': 450 },
        { 'category': 'other-crime', 'max': 22 }
    ]

    crimeCategories.forEach( function(crimeCategory){

        let numberOfCrimes = crimeMarkers.filter(function(elements) { return elements.category == crimeCategory.category }).length
        let rating = 'N/A'

        switch (true) {
            case (numberOfCrimes < (crimeCategory.max * 0.1)):
                rating = '<span class="text-emerald-400">Great</span>';
                break;
            case (numberOfCrimes < (crimeCategory.max * 0.2)):
                rating = '<span class="text-yellow-400">Good</span>';
                break;
            case (numberOfCrimes < (crimeCategory.max * 0.4)):
                rating = '<span class="text-orange-400">OK</span>';
                break;
            case (numberOfCrimes < (crimeCategory.max * 0.6)):
                rating = '<span class="text-red-400">High</span>';
                break;
            case (numberOfCrimes > (crimeCategory.max * 0.6)):
                    rating = '<span class="text-red-700">Extreme</span>';
                    break;
            default:
                rating = "N/A";
                break;
        }
        
        output_neighbourhood_row({
            'attribute':    numberOfCrimes,
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4L20 2C18.85 2.64 17.4 3 16 3C14.6 3 13.14 2.63 12 2C10.86 2.63 9.4 3 8 3C6.6 3 5.15 2.64 4 2L2 4C2 4 4 6 4 8S2 14 2 16C2 20 12 22 12 22S22 20 22 16C22 14 20 10 20 8S22 4 22 4M15.05 16.45L11.97 14.59L8.9 16.45L9.72 12.95L7 10.61L10.58 10.3L11.97 7L13.37 10.29L16.95 10.6L14.23 12.94L15.05 16.45Z"/></svg>',
            'target':       'neighbourhood-results-table',
            'title':        'Number of '+ crimeCategory.category +' crimes in 1-mile radius for ' + currentProperty.postcode +'.',
            'guide':        '(Lower is better)',
            'rating':       rating
        })
    })



}