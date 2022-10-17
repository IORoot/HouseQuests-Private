
// ┌─────────────────────────────────────┐
// │                                     │
// │  List a string in the output table  │
// │                                     │
// └─────────────────────────────────────┘
//
export async function output_neighbourhood_row(config)
{

    let attribute       = config.attribute
    let icon            = config.icon
    let title           = config.title
    let guide           = config.guide
    let target          = config.target

    target = document.getElementById(target)


    let message = target.innerHTML;

    // NOT Found / Null value
    if (!attribute){
        attribute = "Not specified."
    }

    message += '<tr class="border-b border-orange-200">'

        message += '<td scope="row" class="py-4 px-6 font-light text-white">'

            message += '<div class="flex flex-row gap-2 text-emerald-900 fill-emerald-900">'
                message += '<div class="h-5 w-5">' + icon + '</div>'
                message += title
            message += '</div>'

        message += '</td>'

        message += '<td class="py-4 px-6 text-orange-700 flex flex-col gap-2">' 
        message += attribute
        message += '<div class="text-xs text-gray-400">' + guide + '</div>'
        message += '</td>'
    
    message += '</tr>'

    // set HTML
    target.innerHTML = message;

}
