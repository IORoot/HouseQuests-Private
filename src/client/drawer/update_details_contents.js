// ┌─────────────────────────────────────┐
// │                                     │
// │     Update the Details Contents     │
// │                                     │
// └─────────────────────────────────────┘
import { request_property_crimes } from '../requests/request_property_crimes.js'
import { request_property_broadband } from '../requests/request_property_broadband.js'
import { request_property_council_tax } from '../requests/request_property_council_tax.js'

/**
 * 
 * @param {object} propertyDetails 
 * @param {string} source 
 */
export function update_details_contents()
{
    // currentProperty is a global object
    console.log(currentProperty)

    const longitude = currentProperty.longitude;
    const latitude = currentProperty.latitude;

    // Crimes at property
    request_property_crimes(longitude, latitude)

    // Broadband Services
    request_property_broadband(longitude, latitude)

    // Council Tax
    request_property_council_tax()
    
}