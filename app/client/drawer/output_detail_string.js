
// ┌─────────────────────────────────────┐
// │                                     │
// │  List a string in the output table  │
// │                                     │
// └─────────────────────────────────────┘
//
export async function output_detail_string(config)
{

    let attribute       = config.attribute
    let type            = config.type
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
        attribute = "Not specified."
        type = "string"
    }

    message += '<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap flex flex-row gap-1"><div class="h-5 w-5 fill-black">' + icon + '</div>' + title +'</th>'

    if (type === "image"){
        if (attribute.endsWith('pdf')){
            message += '<td class="py-4 px-6"><a class="underline external-link" href="' + attribute +'" target="_blank">PDF</a></td>'
        } else {
            message += '<td class="py-4 px-6"><a class="external-link" href="' + attribute +'" target="_blank"><img class="w-20 h-20"src="' + attribute +'"></a></td>'
        }
    }

    if (type === "string"){
        message += '<td class="py-4 px-6" data-'+config.target+'="'+attribute+'"><a class="external-link hover:underline hover:text-blue-500" href="'+sourceURL+'" target="_blank">' + attribute +'</a></td>'
    }
    
    if (serviceURL){
        message += '<td class="py-4 px-6"><a class="external-link underline hover:text-blue-500" href="' + serviceURL +'" target="_blank">'+serviceTitle+'</a></td>'
    } else {
        message += '<td></td>'
    }
    


    

    // set data-loaded attribute
    target.dataset.loaded = sourceURL

    // set HTML
    target.innerHTML = message;

}
