
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
    let target          = config.target
    let rating          = config.rating

    target = document.getElementById(target)


    let message = '';

    // NOT Found / Null value
    if (!attribute){
        attribute = "Not specified."
    }

    message += '<tr class="bg-white border-b"></tr>'

        message += '<th scope="row" class="py-4 px-6 font-light text-white whitespace-nowrap flex flex-row gap-1"><div class="h-5 w-5 fill-white">' + icon + '</div>' + title + '</th>'

        message += '<td class="py-4 px-6 text-yellow-300">' + attribute +'</td>'

        message += '<td class="py-4 px-6">' + rating +'</td>'
    
    message += '</tr>'

    // set HTML
    target.innerHTML = message;

}