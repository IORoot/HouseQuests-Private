// ┌─────────────────────────────────────┐
// │                                     │
// │     Update the Details Contents     │
// │                                     │
// └─────────────────────────────────────┘
import { request_property_crimes } from '../requests/request_property_crimes.js'
import { request_property_broadband } from '../requests/request_property_broadband.js'
import { request_property_address } from '../requests/request_property_address.js'
import { output_detail_string } from './output_detail_string.js'

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
        })
    }

    // Postcode
    output_detail_string({
        'attribute':    currentProperty.postcode,
        'type':         'string',
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"/></svg>',
        'target':       'details-property-postcode',
        'title':        'Postcode (from property site)',
        'sourceURL':    currentProperty.link,
        'serviceURL':   'https://findthatpostcode.uk/points/'+currentProperty.latitude+'%2C'+currentProperty.longitude+'.html',
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
    })



// archived:           boolean ( property removed ),
// auction:            boolen
// broadband:          string "Ultra-fast 1000Mbps *",
// broadbandUrl:       string "https://partnerships-broadband.comparethemarket.com/v1/broadband/rightmove/SE29NP?apikey=0f6b7446ccfeee0154e9a89c9fa64f7fe8921b133264c4feb246d3e5aaf49bf0"
// category:           string "residential"
// chain:              bool (ChainFree or not),
// deposit:            string "",
// featuresArray:      array of strings,
// floorArea:          string,
// furnishedState:     string,
// groundRent:         "",
// leaseExpiry:        "",
// listingCondition:   "",
// listingHistory:     "",
// mobileReception:    "",
// newHome:            "",
// numberBaths:        "",
// numberBeds:         "",
// pointsOfInterest:   "",
// pricePerSqFt:       "",
// propertyType:       "",
// published:          "",
// retirementHome:     "",
// roomsArray:         "",
// schools:            "",
// section:            "",
// serviceCharge:      "",
// sharedOwnership:    "",
// size:               "",
// sizings:            "",
// statisticsArray:    "",
// status:             "",


// branch:             string,
// branchID:           int,
// branchLogo:         string,
// branchURL:          string,
}