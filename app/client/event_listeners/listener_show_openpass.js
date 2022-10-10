// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Shops button Event Listener   │
// │                                     │
// └─────────────────────────────────────┘

// Import all functions
import * as geo from '../../lib/geolocation-utils/geo.js'

import { request_overpass_api } from '../requests/request_overpass_api.js'
import { load_openpass_results } from '../map_layers/load_openpass_results.js'

export function listener_show_openpass(openpassRequest)
{
    
    let layerID = openpassRequest.layerID
    let buttonID = openpassRequest.buttonID
    let openpassKey = openpassRequest.openpassKey
    let openpassValue = openpassRequest.openpassValue
    let iconStyle = openpassRequest.iconStyle

    const button = document.getElementById(buttonID);

    button.addEventListener('click', async function(event) {

        show_spinner()

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
        query += 'node["'+openpassKey+'"="'+openpassValue+'"]('+south+','+west+','+north+','+east+');'
        query += 'way["'+openpassKey+'"="'+openpassValue+'"]('+south+','+west+','+north+','+east+');'
        query += 'relation["'+openpassKey+'"="'+openpassValue+'"]('+south+','+west+','+north+','+east+');'
        query += ');'
        query += 'out;>;out skel qt;'

        const openpassResults = await request_overpass_api(openpassBoundingBox, query)

        load_openpass_results(layerID, openpassResults, iconStyle)
        
        hide_spinner()
    });

}