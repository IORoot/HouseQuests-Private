// ┌─────────────────────────────────────┐
// │                                     │
// │     Update the Neighbourhood        │
// │                                     │
// └─────────────────────────────────────┘
import { output_neighbourhood_row } from './output_neighbourhood_row.js'

/**
 * 
 * @param {object} propertyDetails 
 * @param {string} source 
 */
export function update_neighbourhood(propertyStatistics)
{
    // currentProperty is a global object
    // console.log(currentProperty)

    const longitude = currentProperty.longitude;
    const latitude = currentProperty.latitude;
    const postcode = currentProperty.postcode
    let propertyPrice = priceToInt(currentProperty.price)

    const neighbourhoodTable = document.getElementById("neighbourhood-results-table")

    // Clear results for next property
    neighbourhoodTable.innerHTML=''

    console.log(propertyStatistics)

// ┌─────────────────────────────────────┐
// │            Average Price            │
// │          of postcode area           │
// └─────────────────────────────────────┘
    let currentAverage = priceToInt(propertyStatistics.mortgageWidgetModel.currentAverage)
    let percentage = 100 - ((100 / currentAverage) * propertyPrice)
    let rating = percentageToRating(percentage)
    output_neighbourhood_row({
        'attribute':    propertyStatistics.mortgageWidgetModel.currentAverage,
        'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17,16H15V22H12V17H8V22H5V16H3L10,10L17,16M6,2L10,6H9V9H7V6H5V9H3V6H2L6,2M18,3L23,8H22V12H19V9H17V12H15.34L14,10.87V8H13L18,3Z"/></svg>',
        'target':       'neighbourhood-results-table',
        'title':        'Overall average property price (of all types) in ' + postcode +' for the last year.',
        'rating':       rating
    })

    // ┌─────────────────────────────────────┐
    // │            Average Price            │
    // └─────────────────────────────────────┘
}



function priceToInt(price)
{
    console.log(price)
    if (!price){ return null }
    return Number(price.replace(/[^0-9.-]+/g,""));
}


function percentageToRating(percentage)
{
    if (!percentage){ return null }
    
    let prefix = '<span class="text-red-500">-'
    if (Math.sign(percentage) == 1)
    {
        prefix = '<span class="text-emerald-500">+'
    }

    return prefix + Math.round(percentage) + '%<span>'
}