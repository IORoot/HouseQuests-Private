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

    // ┌─────────────────────────────────────┐
    // │            Average Price            │
    // │          of postcode area           │
    // └─────────────────────────────────────┘
    if (propertyStatistics.mortgageWidgetModel.currentAverage){

        var currentAverage = priceToInt(propertyStatistics.mortgageWidgetModel.currentAverage)
        output_neighbourhood_row({
            'attribute':    propertyStatistics.mortgageWidgetModel.currentAverage,
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17,16H15V22H12V17H8V22H5V16H3L10,10L17,16M6,2L10,6H9V9H7V6H5V9H3V6H2L6,2M18,3L23,8H22V12H19V9H17V12H15.34L14,10.87V8H13L18,3Z"/></svg>',
            'target':       'neighbourhood-results-table',
            'title':        'Overall average property price (of all types) in ' + postcode +' for the last 12 months.',
            'guide':        '',
        })

    }

    // ┌─────────────────────────────────────┐
    // │      Percent change in prices       │
    // └─────────────────────────────────────┘
    if (propertyStatistics.mortgageWidgetModel.percentageChange){

        var currentValue = priceToInt(propertyStatistics.mortgageWidgetModel.percentageChange.replace('%',''))
        var pricechange = (currentAverage * ( currentValue / 100 ))
        output_neighbourhood_row({
            'attribute':    propertyStatistics.mortgageWidgetModel.percentageChange + ' (£'+pricechange.toFixed(0) + ')',
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z"/></svg>',
            'target':       'neighbourhood-results-table',
            'title':        'Average property price change (of all types) for ' + postcode +' in the last 12 months.',
            'guide':        '(Lower is better)',
        })

    }

    // ┌─────────────────────────────────────┐
    // │      Number of properties with      │
    // │            sale history             │
    // └─────────────────────────────────────┘
    if (propertyStatistics.results.resultCount){

        let resultCount_removedComma = propertyStatistics.results.resultCount.replace(',','')
        let resultCount = Number(resultCount_removedComma)
        output_neighbourhood_row({
            'attribute':    resultCount,
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.65,2.85L19.26,6.71L22.77,8.5L21,12L22.78,15.5L19.24,17.29L18.63,21.15L14.74,20.54L11.97,23.3L9.19,20.5L5.33,21.14L4.71,17.25L1.22,15.47L3,11.97L1.23,8.5L4.74,6.69L5.35,2.86L9.22,3.5L12,0.69L14.77,3.46L18.65,2.85M9.5,7A1.5,1.5 0 0,0 8,8.5A1.5,1.5 0 0,0 9.5,10A1.5,1.5 0 0,0 11,8.5A1.5,1.5 0 0,0 9.5,7M14.5,14A1.5,1.5 0 0,0 13,15.5A1.5,1.5 0 0,0 14.5,17A1.5,1.5 0 0,0 16,15.5A1.5,1.5 0 0,0 14.5,14M8.41,17L17,8.41L15.59,7L7,15.59L8.41,17Z"/></svg>',
            'target':       'neighbourhood-results-table',
            'title':        'Number of properties (within 400m) with sale history in ' + postcode + '.',
            'guide':        '(Lower is better)',
        })
    }

}



function priceToInt(price)
{
    // console.log(price)
    if (!price){ return null }
    return Number(price.replace(/[^0-9.-]+/g,""));
}