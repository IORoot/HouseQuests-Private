// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import { request_postcode } from './request_postcode.js'
import { listener_external_links } from "../event_listeners/listener_external_links.js";

export async function request_property_broadband(longitude, latitude)
{

    let apikey = 'AIzaSyCkd3MCYWcXWrnnbALscPUU1bd5zAbvjgI'

    let postcode = await request_postcode(longitude, latitude)

    let target = document.getElementById('details-property-broadband');

    var postcodeLoaded = postcode;

    if (target.dataset.loaded == postcodeLoaded){
        return
    }


    // Get broadband address numbers first.
    let listBroadbandURL = 'https://api.property.tools/propertytools.api.v1.Public/ListBroadbandProperties'
    let bodyList = '{"postcode":"'+postcode+'"}'

    const broadbandAddressesResult = await fetch(listBroadbandURL, {
        method: 'POST',
        headers: {
            'x-api-key': apikey
        },
        body: bodyList
    })
        .then(function(response){
            return response.json()
        })
        .catch(function(error) {
            console.log("ERROR:"+error);
        });



    let paon = broadbandAddressesResult.property[0].paon

    let getBroadbandURL = 'https://api.property.tools/propertytools.api.v1.Public/GetBroadbandSpeed'
    let bodyGet = '{"postcode":"'+postcode+'","paon":"'+paon+'","saon":""}'

    const broadbandResult = await fetch(getBroadbandURL, {
        method: 'POST',
        headers: {
            'x-api-key': apikey
        },
        body: bodyGet
    })
        .then(function(response){
            return response.json()
        })
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    let message = '';

    message += '<div class="text-lg mb-2">Broadband</div>'

    // NO CRIMES
    if (!broadbandResult){
        message += '<div class="bg-yellow-500 text-white fill-white rounded-lg p-4 flex flex-row gap-2">'
            message += '<svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,6C8.6,6 5.5,7.1 3,9L1.2,6.6C4.2,4.3 8,3 12,3C16,3 19.8,4.3 22.8,6.6L21,9C18.5,7.1 15.4,6 12,6M13,19C13,17.7 13.4,16.4 14.2,15.4C13.5,15.2 12.8,15 12,15C10.7,15 9.4,15.5 8.4,16.2L12,21L13,19.6C13,19.4 13,19.2 13,19M16.8,13.4C17.1,13.3 17.5,13.2 17.9,13.1L19.2,11.4C17.2,9.9 14.7,9 12,9C9.3,9 6.8,9.9 4.8,11.4L6.6,13.8C8.1,12.7 10,12 12,12C13.8,12 15.4,12.5 16.8,13.4M16.5,22.6L17.2,19.8L15,17.9L17.9,17.7L19,15L20.1,17.6L23,17.8L20.8,19.7L21.5,22.5L19,21.1L16.5,22.6Z"/></svg>'
            message += 'Broadband search for this property returnd no results.'
            message += '<a class="external-link ml-auto text-xs hover:underline" href="https://propertychecker.co.uk/" target="_blank">source</a>'
        message += '</div>'
    }

    // CRIMES
    if (broadbandResult){
        message += '<div class="bg-emerald-500 text-white fill-white rounded-lg p-4 flex flex-col gap-1">'

            message += '<div class="flex flex-row gap-2 mb-2">'
                message += '<svg class="w-6 h-6 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,6C8.6,6 5.5,7.1 3,9L1.2,6.6C4.2,4.3 8,3 12,3C16,3 19.8,4.3 22.8,6.6L21,9C18.5,7.1 15.4,6 12,6M13,19C13,17.7 13.4,16.4 14.2,15.4C13.5,15.2 12.8,15 12,15C10.7,15 9.4,15.5 8.4,16.2L12,21L13,19.6C13,19.4 13,19.2 13,19M16.8,13.4C17.1,13.3 17.5,13.2 17.9,13.1L19.2,11.4C17.2,9.9 14.7,9 12,9C9.3,9 6.8,9.9 4.8,11.4L6.6,13.8C8.1,12.7 10,12 12,12C13.8,12 15.4,12.5 16.8,13.4M16.5,22.6L17.2,19.8L15,17.9L17.9,17.7L19,15L20.1,17.6L23,17.8L20.8,19.7L21.5,22.5L19,21.1L16.5,22.6Z"/></svg>'
                message += 'Broadband available around this property'
                message += '<a class="external-link ml-auto text-xs hover:underline" href="https://propertychecker.co.uk/" target="_blank">source</a>'
            message += '</div>'

                message += '<div class="overflow-x-auto relative shadow-md sm:rounded-lg">'
                message += '<table class="w-full text-sm text-left text-gray-500 ">'
                message += '<thead class="text-xs text-gray-700 uppercase bg-gray-50 ">'
                message += '<tr>'
                message += '<th scope="col" class="py-3 px-6">Metric</th>'
                message += '<th scope="col" class="py-3 px-6">Value</th>'
                message += ' </tr>'
                message += '</thead>'
                message += '<tbody>'

                    message += '<tr class="bg-white border-b ">'
                    message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">Max Download Speed</th>'
                    message += '<td class="py-4 px-6">' + broadbandResult.broadbandSpeed.maxDownloadSpeed +'</td>'
                    message += '</tr>'
                    message += '<tr class="bg-white border-b ">'
                    message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">Max Upload Speed</th>'
                    message += '<td class="py-4 px-6">' + broadbandResult.broadbandSpeed.maxUploadSpeed +'</td>'
                    message += '</tr>'
                    message += '<tr class="bg-white border-b ">'
                    message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">Superfast Available</th>'
                    message += '<td class="py-4 px-6">' + (broadbandResult.broadbandSpeed.superfastAvailable  ? 'Yes' : 'No') +'</td>'
                    message += '</tr>'
                    message += '<tr class="bg-white border-b ">'
                    message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">Ultrafast Available</th>'
                    message += '<td class="py-4 px-6">' + (broadbandResult.broadbandSpeed.ultrafastAvailable ? 'Yes' : 'No') +'</td>'
                    message += '</tr>'

                message += '</tbody>'
                message += '</table>'
                message += ' </div>'

        message += '</div>'
    }

    // set data-loaded attribute
    target.dataset.loaded = postcodeLoaded

    // set HTML
    target.innerHTML = message;

    listener_external_links()

}
