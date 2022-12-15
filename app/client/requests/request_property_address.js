// ┌─────────────────────────────────────┐
// │                                     │
// │  Lookup closest Address to Long/Lat │
// │                                     │
// └─────────────────────────────────────┘

import { output_detail_string } from '../drawer/output_detail_string.js'
import { clear_detail_string } from '../drawer/clear_detail_string.js'
import { listener_external_links } from "../event_listeners/listener_external_links.js";

export async function request_property_address(longitude, latitude)
{

    let nominatimURL = 'https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&addressdetails=1'

    const addressDetails = await fetch(nominatimURL, {method: 'GET'})
        .then(function(response){
            return response.json()
        })
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    currentProperty.address = addressDetails.address

    // House Number
    if (addressDetails.address.hasOwnProperty('house_number')){
        output_detail_string({
            'attribute':    addressDetails.address.house_number,
            'type':         'string',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"/></svg>',
            'target':       'details-property-address-house-number',
            'title':        'Address House <div class="text-gray-400 text-xs">(calculated)</div>',
            'sourceURL':    'https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&addressdetails=1',
            'serviceURL':   'https://nominatim.openstreetmap.org/ui/reverse.html?lat='+latitude+'&lon='+longitude+'&zoom=18',
            'serviceTitle': 'Nominatim'
        })
    } else {
        clear_detail_string('details-property-address-house-number')
    }


    // Road
    if (addressDetails.address.hasOwnProperty('road')){
        output_detail_string({
            'attribute':    addressDetails.address.road,
            'type':         'string',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"/></svg>',
            'target':       'details-property-address-road',
            'title':        'Address Road <div class="text-gray-400 text-xs">(calculated)</div>',
            'sourceURL':    'https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&addressdetails=1',
            'serviceURL':   'https://nominatim.openstreetmap.org/ui/reverse.html?lat='+latitude+'&lon='+longitude+'&zoom=18',
            'serviceTitle': 'Nominatim'
        })
    } else {
        clear_detail_string('details-property-address-road')
    }


    // Subburb
    if (addressDetails.address.hasOwnProperty('subburb')){
        output_detail_string({
            'attribute':    addressDetails.address.subburb,
            'type':         'string',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"/></svg>',
            'target':       'details-property-address-neighbourhood',
            'title':        'Address Neighbourhood <div class="text-gray-400 text-xs">(calculated)</div>',
            'sourceURL':    'https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&addressdetails=1',
            'serviceURL':   'https://nominatim.openstreetmap.org/ui/reverse.html?lat='+latitude+'&lon='+longitude+'&zoom=18',
            'serviceTitle': 'Nominatim'
        })
    } else {
        clear_detail_string('details-property-address-neighbourhood')
    }


    // city_district
    if (addressDetails.address.hasOwnProperty('city_district')){
        output_detail_string({
            'attribute':    addressDetails.address.city_district,
            'type':         'string',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"/></svg>',
            'target':       'details-property-address-district',
            'title':        'Address District <div class="text-gray-400 text-xs">(calculated)</div>',
            'sourceURL':    'https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&addressdetails=1',
            'serviceURL':   'https://nominatim.openstreetmap.org/ui/reverse.html?lat='+latitude+'&lon='+longitude+'&zoom=18',
            'serviceTitle': 'Nominatim'
        })
    } else {
        clear_detail_string('details-property-address-district')
    }


    // city
    if (addressDetails.address.hasOwnProperty('city')){
        output_detail_string({
            'attribute':    addressDetails.address.city,
            'type':         'string',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"/></svg>',
            'target':       'details-property-address-city',
            'title':        'Address City <div class="text-gray-400 text-xs">(calculated)</div>',
            'sourceURL':    'https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&addressdetails=1',
            'serviceURL':   'https://nominatim.openstreetmap.org/ui/reverse.html?lat='+latitude+'&lon='+longitude+'&zoom=18',
            'serviceTitle': 'Nominatim'
        })
    } else {
        clear_detail_string('details-property-address-city')
    }


    // county
    if (addressDetails.address.hasOwnProperty('county')){
        output_detail_string({
            'attribute':    addressDetails.address.county,
            'type':         'string',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"/></svg>',
            'target':       'details-property-address-county',
            'title':        'Address County <div class="text-gray-400 text-xs">(calculated)</div>',
            'sourceURL':    'https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&addressdetails=1',
            'serviceURL':   'https://nominatim.openstreetmap.org/ui/reverse.html?lat='+latitude+'&lon='+longitude+'&zoom=18',
            'serviceTitle': 'Nominatim'
        })
    } else {
        clear_detail_string('details-property-address-county')
    }


    // postcode
    if (addressDetails.address.hasOwnProperty('postcode')){
        output_detail_string({
            'attribute':    addressDetails.address.postcode,
            'type':         'string',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"/></svg>',
            'target':       'details-property-address-postcode',
            'title':        'Address Postcode <div class="text-gray-400 text-xs">(calculated)</div>',
            'sourceURL':    'https://nominatim.openstreetmap.org/reverse?format=json&lat='+latitude+'&lon='+longitude+'&addressdetails=1',
            'serviceURL':   'https://nominatim.openstreetmap.org/ui/reverse.html?lat='+latitude+'&lon='+longitude+'&zoom=18',
            'serviceTitle': 'Nominatim'
        })
    } else {
        clear_detail_string('details-property-address-postcode')
    }


    listener_external_links()

    return addressDetails.address
}

