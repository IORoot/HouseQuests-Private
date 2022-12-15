// ┌─────────────────────────────────────┐
// │                                     │
// │     Update the Details Contents     │
// │                                     │
// └─────────────────────────────────────┘
import { request_property_crimes } from '../requests/request_property_crimes.js'
import { request_property_broadband } from '../requests/request_property_broadband.js'
import { request_property_address } from '../requests/request_property_address.js'
import { output_detail_string } from './output_detail_string.js'
import { output_detail_trains } from './output_detail_trains.js'
import { output_detail_schools } from './output_detail_schools.js'
import { listener_external_links } from '../event_listeners/listener_external_links.js'

/**
 * 
 * @param {object} propertyDetails 
 * @param {string} source 
 */
export function update_details_contents()
{
    // currentProperty is a global object
    // console.log(currentProperty)

    const longitude = currentProperty.longitude;
    const latitude = currentProperty.latitude;

    // Crimes at property
    request_property_crimes(longitude, latitude)

    // Broadband Services
    request_property_broadband(longitude, latitude)

    // Calulated Address : add to currentProperty
    currentProperty.address = request_property_address(longitude, latitude)

    // EPC Image
    if (currentProperty.details.hasOwnProperty('epcImage')){
        output_detail_string({
            'attribute':    currentProperty.details.epcImage,
            'type':         'image',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2A2 2 0 0 0 2 4V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V4A2 2 0 0 0 20 2H4M4 4H20V20H4V4M11 7V11H13V7H11M6 14.75V17H9.5V14.75H6M14.5 14.75V17H18V14.75H14.5Z"/></svg>',
            'target':       'details-property-epc',
            'title':        'EPC Rating',
            'sourceURL':    currentProperty.link,
            'serviceURL':   'https://find-energy-certificate.service.gov.uk/find-a-certificate/search-by-postcode?postcode='+currentProperty.postcode,
            'serviceTitle': 'Gov.uk',
        })
    }

    // EPC Rating
    if (currentProperty.details.hasOwnProperty('epcRating')){
        output_detail_string({
            'attribute':    currentProperty.details.epcRating,
            'type':         'string',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2A2 2 0 0 0 2 4V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V4A2 2 0 0 0 20 2H4M4 4H20V20H4V4M11 7V11H13V7H11M6 14.75V17H9.5V14.75H6M14.5 14.75V17H18V14.75H14.5Z"/></svg>',
            'target':       'details-property-epc',
            'title':        'EPC Rating',
            'sourceURL':    currentProperty.link,
            'serviceURL':   'https://find-energy-certificate.service.gov.uk/find-a-certificate/search-by-postcode?postcode='+currentProperty.postcode,
            'serviceTitle': 'Gov.uk',
        })
    }

    // Postcode
    output_detail_string({
        'attribute':    currentProperty.postcode,
        'type':         'string',
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"/></svg>',
        'target':       'details-property-postcode',
        'title':        'Postcode <div class="text-gray-400 text-xs">(from property site)</div>',
        'sourceURL':    currentProperty.link,
        'serviceURL':   'https://findthatpostcode.uk/points/'+currentProperty.latitude+'%2C'+currentProperty.longitude+'.html',
        'serviceTitle': 'findthatpostcode.uk',
    })


    // Council Tax
    output_detail_string({
        'attribute':    currentProperty.details.councilTaxBand,
        'type':         'string',
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,15H17V13H19M19,19H17V17H19M13,7H11V5H13M13,11H11V9H13M13,15H11V13H13M13,19H11V17H13M7,11H5V9H7M7,15H5V13H7M7,19H5V17H7M15,11V5L12,2L9,5V7H3V21H21V11H15Z"/></svg>',
        'target':       'details-property-council-tax',
        'title':        'Council Tax',
        'sourceURL':    currentProperty.link,
        'serviceURL':   'https://www.tax.service.gov.uk/check-council-tax-band/search',
        'serviceTitle': 'Gov.uk',
    })


    // Tenure
    output_detail_string({
        'attribute':    currentProperty.tenure,
        'type':         'string',
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 19.88V22L18.2 20.83L13.41 11.83A4.94 4.94 0 0 0 15.19 10.83M15 7A3 3 0 0 1 12 10A3.27 3.27 0 0 1 11.56 10L5.8 20.83L4 22V19.88L9.79 9A3 3 0 0 1 12 4V2A1 1 0 0 1 13 3V4.18A3 3 0 0 1 15 7M13 7A1 1 0 1 0 12 8A1 1 0 0 0 13 7M4.22 10L6 11.8L4.56 14.56L2.1 12.1M12 17.76L10.5 16.25L9 19L12 22L15 19L13.53 16.23M19.78 10L18 11.8L19.5 14.56L21.9 12.1Z"/></svg>',
        'target':       'details-property-tenure',
        'title':        'Tenure',
        'sourceURL':    currentProperty.link,
        'serviceURL':   'https://search-property-information.service.gov.uk',
        'serviceTitle': 'Gov.uk',
    })


    // Area
    output_detail_string({
        'attribute':    currentProperty.details.area,
        'type':         'string',
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z"/></svg>',
        'target':       'details-property-area',
        'title':        'Area',
        'sourceURL':    currentProperty.link,
        'serviceURL':   null,
        'serviceTitle': null,
    })


    // Broadband
    output_detail_string({
        'attribute':    currentProperty.details.broadband,
        'type':         'string',
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z"/></svg>',
        'target':       'details-property-broadband2',
        'title':        'Broadband',
        'sourceURL':    currentProperty.link,
        'serviceURL':   'https://propertychecker.co.uk/broadband/property-details/?postcode='+currentProperty.postcode,
        'serviceTitle': 'Propertychecker.co.uk',
    })

    // Train Stations
    output_detail_trains({
        'attribute':    currentProperty.details.trainStations,
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C8,2 4,2.5 4,6V15.5A3.5,3.5 0 0,0 7.5,19L6,20.5V21H8.23L10.23,19H14L16,21H18V20.5L16.5,19A3.5,3.5 0 0,0 20,15.5V6C20,2.5 16.42,2 12,2M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M11,10H6V6H11V10M13,10V6H18V10H13M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17Z"/></svg>',
        'target':       'details-property-trains',
        'title':        'Train Stations',
        'sourceURL':    currentProperty.link,
        'serviceURL':   'https://tfl.gov.uk/travel-information/stations-stops-and-piers/',
        'serviceTitle': 'tfl.gov.uk',
    })

    // Schools
    output_detail_schools({
        'attribute':    currentProperty.details.schools,
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/></svg>',
        'target':       'details-property-schools',
        'title':        'Schools',
        'sourceURL':    currentProperty.link,
        'serviceURL':   'https://reports.ofsted.gov.uk/search?q=&lat='+currentProperty.latitude+'&lon='+currentProperty.longitude+'',
        'serviceTitle': 'ofsted.gov.uk',
    })

    // Longitude
    output_detail_string({
        'attribute':    longitude,
        'type':         'string',
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2A10 10 0 1 0 22 12A10.03 10.03 0 0 0 12 2M9.4 19.6A8.05 8.05 0 0 1 9.4 4.4A16.45 16.45 0 0 0 7.5 12A16.45 16.45 0 0 0 9.4 19.6M12 20A13.81 13.81 0 0 1 9.5 12A13.81 13.81 0 0 1 12 4A13.81 13.81 0 0 1 14.5 12A13.81 13.81 0 0 1 12 20M14.6 19.6A16.15 16.15 0 0 0 14.6 4.4A8.03 8.03 0 0 1 20 12A7.9 7.9 0 0 1 14.6 19.6Z"/></svg>',
        'target':       'details-property-longitude',
        'title':        'Longitude',
        'sourceURL':    currentProperty.link,
        'serviceURL':   currentProperty.link,
        'serviceTitle': currentProperty.source
    })

    // Latitude
    output_detail_string({
        'attribute':    latitude,
        'type':         'string',
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 4C15 4 17.5 5.6 18.9 8H5.1C6.5 5.6 9 4 12 4M12 20C9 20 6.5 18.4 5.1 16H18.9C17.5 18.4 15 20 12 20M4.3 14C4.1 13.4 4 12.7 4 12S4.1 10.6 4.3 10H19.8C20 10.6 20.1 11.3 20.1 12S20 13.4 19.8 14H4.3Z"/></svg>',
        'target':       'details-property-latitude',
        'title':        'Latitude',
        'sourceURL':    currentProperty.link,
        'serviceURL':   currentProperty.link,
        'serviceTitle': currentProperty.source
    })

    // Attach listeners
    listener_external_links()
}