// ┌─────────────────────────────────────┐
// │                                     │
// │     Update the Details Contents     │
// │                                     │
// └─────────────────────────────────────┘
import { request_property_crimes } from '../requests/request_property_crimes.js'

/**
 * 
 * @param {object} propertyDetails 
 * @param {string} source 
 */
export function update_details_contents()
{
    const longitude = currentProperty.longitude;
    const latitude = currentProperty.latitude;

    // Crimes at property
    request_property_crimes(longitude, latitude)
    
}


/**
 * Append content to a tab:
 * property, neighbourhood, rating, agent
 * 
 * @param {string} tabname 
 * @param {string} content 
 */
export function append_details_to_tab(tabname,content)
{
    var tab = tabname + 'TabContent';
    var currentHTML = document.getElementById(tab).innerHTML;
    document.getElementById(tab).innerHTML = currentHTML + content;
}