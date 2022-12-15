// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘
import { listener_external_links } from "../event_listeners/listener_external_links.js";

export async function request_property_crimes(longitude, latitude)
{
    let target = document.getElementById('details-property-crimes');

    var longitudeLatitudeLoaded = longitude + ',' + latitude;

    if (target.dataset.loaded == longitudeLatitudeLoaded){
        return
    }

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

    let message = '';

    message += '<div class="text-lg mb-2">Crimes</div>'

    // NO CRIMES
    if (!crimeAtLocation.length){
        message += '<div class="bg-emerald-500 text-white fill-white rounded-lg p-4 flex flex-row gap-2">'
            message += '<svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.7 12.5C10.7 12.8 9.4 13.2 8.4 13.2S6.3 12.5 6.3 12.3C6.3 12 7 11.1 8.6 11C9.5 10.9 10.5 11.5 10.7 12.5M15.4 11C14.4 10.9 13.5 11.5 13.3 12.5C13.3 12.8 14.5 13.2 15.6 13.2C16.7 13.2 17.7 12.5 17.7 12.3S17 11.1 15.4 11M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12 6.5 2 12 2 22 6.5 22 12M20 11.2C20 9.2 19.3 8.5 16.7 8.5C14.1 8.5 13.3 9.6 12 9.6S10 8.5 7.3 8.5 4 9.1 4 11.2C4 14.6 5.5 16.5 7.6 16.5C9.2 16.5 10.4 14.5 12 14.5S14.7 16.5 16.4 16.5C18.5 16.5 20 14.6 20 11.2Z"/></svg>'
            message += 'No crimes registered at this property. (Last updated: '+lastUpdatedDate+')'
            message += '<a class="external-link ml-auto text-xs hover:underline" href="https://data.police.uk/docs/method/crimes-at-location/" target="_blank">source</a>'
        message += '</div>'
    }

    // CRIMES
    if (crimeAtLocation.length){
        message += '<div class="bg-red-500 text-white fill-white rounded-lg p-4 flex flex-col gap-1">'


            message += '<div class="flex flex-row gap-2 mb-2">'
                message += '<svg class="w-6 h-6 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.7 12.5C10.7 12.8 9.4 13.2 8.4 13.2S6.3 12.5 6.3 12.3C6.3 12 7 11.1 8.6 11C9.5 10.9 10.5 11.5 10.7 12.5M15.4 11C14.4 10.9 13.5 11.5 13.3 12.5C13.3 12.8 14.5 13.2 15.6 13.2C16.7 13.2 17.7 12.5 17.7 12.3S17 11.1 15.4 11M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12 6.5 2 12 2 22 6.5 22 12M20 11.2C20 9.2 19.3 8.5 16.7 8.5C14.1 8.5 13.3 9.6 12 9.6S10 8.5 7.3 8.5 4 9.1 4 11.2C4 14.6 5.5 16.5 7.6 16.5C9.2 16.5 10.4 14.5 12 14.5S14.7 16.5 16.4 16.5C18.5 16.5 20 14.6 20 11.2Z"/></svg>'
                message += 'Crimes at property'
                message += '<a class="external-link ml-auto text-xs hover:underline" href="https://data.police.uk/docs/method/crimes-at-location/" target="_blank">source</a>'
            message += '</div>'

                message += '<div class="overflow-x-auto relative shadow-md sm:rounded-lg">'
                message += '<table class="w-full text-sm text-left text-gray-500 ">'
                message += '<thead class="text-xs text-gray-700 uppercase bg-gray-50  ">'
                message += '<tr>'
                message += '<th scope="col" class="py-3 px-6">Crime</th>'
                message += '<th scope="col" class="py-3 px-6">Location</th>'
                message += '<th scope="col" class="py-3 px-6">Date</th>'
                message += ' </tr>'
                message += '</thead>'
                message += '<tbody>'

                crimeAtLocation.forEach(function(crime){
                    message += '<tr class="bg-white border-b ">'
                    message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">' + crime.category + '</th>'
                    message += '<td class="py-4 px-6">' + crime.location.street.name +'</td>'
                    message += '<td class="py-4 px-6">' + crime.month +'</td>'
                    message += '</tr>'
                });

                message += '</tbody>'
                message += '</table>'
                message += ' </div>'

        message += '</div>'
    }

    // set data-loaded attribute
    target.dataset.loaded = longitudeLatitudeLoaded

    // set HTML
    target.innerHTML = message;

    listener_external_links()

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