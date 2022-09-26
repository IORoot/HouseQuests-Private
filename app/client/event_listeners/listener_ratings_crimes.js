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
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7,5H23V9H22V10H16A1,1 0 0,0 15,11V12A2,2 0 0,1 13,14H9.62C9.24,14 8.89,14.22 8.72,14.56L6.27,19.45C6.1,19.79 5.76,20 5.38,20H2C2,20 -1,20 3,14C3,14 6,10 2,10V5H3L3.5,4H6.5L7,5M14,12V11A1,1 0 0,0 13,10H12C12,10 11,11 12,12A2,2 0 0,1 10,10A1,1 0 0,0 9,11V12A1,1 0 0,0 10,13H13A1,1 0 0,0 14,12Z"/></svg>',
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
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7,5H23V9H22V10H16A1,1 0 0,0 15,11V12A2,2 0 0,1 13,14H9.62C9.24,14 8.89,14.22 8.72,14.56L6.27,19.45C6.1,19.79 5.76,20 5.38,20H2C2,20 -1,20 3,14C3,14 6,10 2,10V5H3L3.5,4H6.5L7,5M14,12V11A1,1 0 0,0 13,10H12C12,10 11,11 12,12A2,2 0 0,1 10,10A1,1 0 0,0 9,11V12A1,1 0 0,0 10,13H13A1,1 0 0,0 14,12Z"/></svg>',
            'target':       'neighbourhood-results-table',
            'title':        'Number of '+ crimeCategory.category +' crimes in 1-mile radius for ' + currentProperty.postcode +'.',
            'guide':        '(Lower is better)',
            'rating':       rating
        })
    })



}