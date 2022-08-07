// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import { update_crime_markers } from '../crimes/add_crime_layer.js'

export function listener_show_crimes()
{

    const propertyCrimesButton = document.getElementById('drawer-crimes');

    propertyCrimesButton.addEventListener('click', async function(event) {

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

        update_crime_markers(crimeMarkers);

    });

}