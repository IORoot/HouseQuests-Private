
// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

export async function request_property_council_tax()
{

    let attribute   = currentProperty.details.councilTaxBand
    let icon        = '<svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"/></svg>'
    let target      = document.getElementById('details-property-council-tax');
    let title       = 'Council Tax'
    let sourceURL   = currentProperty.link
    let serviceURL  = 'https://www.tax.service.gov.uk/check-council-tax-band/search'

    // return if already set
    if (target.dataset.loaded == currentProperty.link){
        return
    }

    let message = '';

    message += '<div class="text-lg mb-2">'+title+'</div>'

    // NOT Found / Null value
    if (!attribute){
        message += '<div class="bg-yellow-500 text-white fill-white rounded-lg p-4 flex flex-col gap-2">'
            message += '<div class="flex flex-row gap-2">'
                message += icon
                message += title+' search for this property returnd no results.'
                message += '<a class="ml-auto text-xs hover:underline" href="'+sourceURL+'" target="_blank">source</a>'
            message += '</div>'
            message += '<div class="text-gray-800 p-1 rounded">'
                message += '<a class="ml-auto text-xs text-center hover:underline" href="'+serviceURL+'" target="_blank">Search the '+title+' service.</a>'
            message += '</div>'
        message += '</div>'
    }

    // Values found
    if (attribute){
        message += '<div class="bg-emerald-500 text-white fill-white rounded-lg p-4 flex flex-col gap-1">'

            message += '<div class="flex flex-row gap-2 mb-2">'
                message += icon
                message += title+' found for this property'
                message += '<a class="ml-auto text-xs hover:underline" href="'+sourceURL+'" target="_blank">source</a>'
            message += '</div>'

                message += '<div class="overflow-x-auto relative shadow-md sm:rounded-lg">'
                message += '<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">'
                    message += '<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">'
                        message += '<tr>'
                            message += '<th scope="col" class="py-3 px-6">Metric</th>'
                            message += '<th scope="col" class="py-3 px-6">Value</th>'
                        message += ' </tr>'
                    message += '</thead>'
                message += '<tbody>'

                    message += '<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">'
                        message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Council Tax Band</th>'
                        message += '<td class="py-4 px-6">' + attribute +'</td>'
                    message += '</tr>'

                message += '</tbody>'
                message += '</table>'
                message += ' </div>'

            message += '<div class="text-gray-800 p-1 rounded">'
                message += '<a class="ml-auto text-xs text-center hover:underline" href="'+serviceURL+'" target="_blank">Search the '+title+' service.</a>'
            message += '</div>'

        message += '</div>'
    }

    // set data-loaded attribute
    target.dataset.loaded = currentProperty.link

    // set HTML
    target.innerHTML = message;

}
