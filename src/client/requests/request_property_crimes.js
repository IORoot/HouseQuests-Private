// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import { append_details_to_tab } from '../drawer/update_details_contents.js'

export async function request_property_crimes(longitude, latitude)
{
    const lastUpdatedDate = await get_last_updated_date();
    
    // longitude = '-0.051182'
    // latitude = '51.482285'

    let policeURL = 'https://data.police.uk/api/crimes-at-location'
    policeURL += '?'
    policeURL += 'lat='+latitude
    policeURL += '&'
    policeURL += 'lng='+longitude

    const crimeAtLocation = await fetch(policeURL, {method: 'GET'})
        .then(function(response){
            return response.json()
        })
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    if (!crimeAtLocation.length){
        let message = '<div>No crimes registered at this property. (Last updated: '+lastUpdatedDate+')</div>'
        append_details_to_tab('property', message)
        return 
    }

}




async function get_last_updated_date(){

    let policeURL = 'https://data.police.uk/api/crime-last-updated'

    let lastUpdatedDate = await fetch(policeURL, {method: 'GET'})
        .then(response => response.json())
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    lastUpdatedDate = lastUpdatedDate.date;

    return lastUpdatedDate.slice(0, -3)
}