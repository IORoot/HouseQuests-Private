
// ┌─────────────────────────────────────┐
// │                                     │
// │  List a string in the output table  │
// │                                     │
// └─────────────────────────────────────┘
//
export async function output_detail_trains(config)
{

    let attribute       = config.attribute
    let icon            = config.icon
    let target          = document.getElementById(config.target);
    let title           = config.title
    let sourceURL       = config.sourceURL
    let serviceURL      = config.serviceURL
    let serviceTitle    = config.serviceTitle

    // return if already set
    if (target.dataset.loaded == sourceURL){ return }

    let message = '';

    // NOT Found / Null value
    if (!attribute){
        attribute = [{ name: "None Supplied. Use manual search.", type: 'N/A', distance: "N/A", }]
    }

    message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  flex flex-row gap-1"><div class="h-5 w-5 fill-black">' + icon + '</div>' + title +'</th>'

    message += '<td class="py-4 px-6">';
        message += '<table class="w-full text-xs text-left text-gray-500 dark:text-gray-400">'
                message += '<thead class="text-xs text-gray-700 uppercase bg-yellow-200">'
                    message += '<tr>'
                        message += ' <th scope="col" class="py-2 px-3">'
                            message += 'Station'
                        message += '</th>'
                        message += '<th scope="col" class="py-2 px-3">'
                            message += 'Type'
                        message += '</th>'
                        message += '<th scope="col" class="py-2 px-3">'
                            message += 'Distance'
                        message += '</th>'
                    message += '</tr>'
                message += '</thead>'
                message += '<tbody>'

                attribute.forEach(function(station){
                    message += '<tr class="bg-white border-b  id="details-property-address-house-number">'

                    message += '<td class="py-2 px-3">'+station.name+'</td>'
                    message += '<td class="py-2 px-3">'+station.type+'</td>'
                    message += '<td class="py-2 px-3">'+station.distance+'</td>'

                    message += '</tr>'
                })

                message += '</tbody>'
            message += '</table>'
        message += '</div>'

    message += '</td>'
    if (serviceURL){
        message += '<td class="py-4 px-6"><a class="underline hover:text-blue-500" href="' + serviceURL +'" target="_blank">'+serviceTitle+'</a></td>'
    } else {
        message += '<td></td>'
    }
    

    // set data-loaded attribute
    target.dataset.loaded = sourceURL

    // set HTML
    target.innerHTML = message;

}
