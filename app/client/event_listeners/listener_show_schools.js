// ┌─────────────────────────────────────┐
// │                                     │
// │ Show Schools button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

// Import all functions
import * as geo from '../../lib/geolocation-utils/geo.js'

import { request_overpass_api } from '../requests/request_overpass_api.js'
import { load_openpass_results } from '../map_layers/load_openpass_results.js'

export function listener_show_schools()
{

    const propertyButton = document.getElementById('load-local-schools');

    propertyButton.addEventListener('click', async function(event) {
        
        // Get current ID.
        const propertyLongitude = parseFloat(document.getElementById('drawer-longitude').dataset.longitude);
        const propertyLatitude = parseFloat(document.getElementById('drawer-latitude').dataset.latitude);

        // Find bounding box corrdinates.
        const locations = [
            {lat: propertyLatitude, lon: propertyLongitude}
        ]

        const margin = 1000 // meters
        const boundingBox = geo.getBoundingBox(locations, margin)
        const south = boundingBox.bottomLeft.lat
        const west  = boundingBox.bottomLeft.lon
        const north = boundingBox.topRight.lat
        const east  = boundingBox.topRight.lon

        const openpassBoundingBox = {
            'south': south,
            'west': west,
            'north': north,
            'east': east,
        };

        let query = '';
        query += '('
            query += 'node["amenity"="school"]('+south+','+west+','+north+','+east+');'
            query += 'way["amenity"="school"]('+south+','+west+','+north+','+east+');'
            query += 'relation["amenity"="school"]('+south+','+west+','+north+','+east+');'
        query += ');'
        query += 'out;>;out skel qt;'

        const openpassResults = await request_overpass_api(openpassBoundingBox, query)

        load_openpass_results('local-school', openpassResults, "rgba(252, 211, 77, 1.0)", "rgba(245, 245, 245, 1.0)")

    });

}