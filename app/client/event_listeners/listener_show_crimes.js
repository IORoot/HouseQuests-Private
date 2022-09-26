// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import { load_crime_layer } from '../map_layers/load_crime_layer.js'

export function listener_show_crimes()
{

    const propertyCrimesButton = document.getElementById('load-local-crimes');

    propertyCrimesButton.addEventListener('click', async function(event) {

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


        load_crime_layer(crimeMarkers);

        hide_spinner()
    });


}