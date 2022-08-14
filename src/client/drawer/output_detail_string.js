
// ┌─────────────────────────────────────┐
// │                                     │
// │  List a string in the output table  │
// │                                     │
// └─────────────────────────────────────┘
//
export async function output_detail_string(config)
{

    let attribute   = config.attribute
    let type        = config.type
    let icon        = config.icon
    let target      = document.getElementById(config.target);
    let title       = config.title
    let sourceURL   = config.sourceURL
    let serviceURL  = config.serviceURL

    // return if already set
    if (target.dataset.loaded == sourceURL){ return }

    let message = '';

    // NOT Found / Null value
    if (!attribute){
        attribute = "Not specified, try manual search."
        type = "string"
    }

    message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row gap-1"><div class="h-5 w-5 fill-black">' + icon + '</div>' + title +'</th>'

    if (type === "image"){
        if (attribute.endsWith('pdf')){
            message += '<td class="py-4 px-6"><a class="underline" href="' + attribute +'" target="_blank">PDF</a></td>'
        } else {
            message += '<td class="py-4 px-6"><a href="' + attribute +'" target="_blank"><img class="w-20 h-20"src="' + attribute +'"></a></td>'
        }
    }

    if (type === "string"){
        message += '<td class="py-4 px-6">' + attribute +'</td>'
    }
    
    message += '<td class="py-4 px-6"><a class="underline hover:text-blue-500" href="' + serviceURL +'" target="_blank">Manual Search</a></td>'


    

    // set data-loaded attribute
    target.dataset.loaded = sourceURL

    // set HTML
    target.innerHTML = message;

}
