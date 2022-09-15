// ┌─────────────────────────────────────┐
// │                                     │
// │      List Saved Search entries      │
// │                                     │
// └─────────────────────────────────────┘

export function list_saved_searches(){

    var savedSearches = JSON.parse(window.localStorage.getItem('savedSearches'));

    var savedItemsList = '';
    
    if (savedSearches){

        for (const key in savedSearches) {

            let saveTitle = key;

            savedItemsList += '<div class="flex flex-row gap-2 h-12">'

                savedItemsList += '<button data-saved-search-title="'+saveTitle+'" type="button" class="load-saved-search flex flex-row gap-2 w-full text-white  bg-gray-400 hover:bg-emerald-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" title="Load Saved Search">'
                    savedItemsList += '<svg class="pointer-events-none w-4 h-4 fill-white my-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 13L11 9V12H2V14H11V17M22 12H20V21H4V16H6V19H18V11L12 5L7 10H4L12 2L22 12Z"/></svg>'
                    savedItemsList += '<span class="pointer-events-none w-full my-auto text-left">'+saveTitle+'</span>'
                savedItemsList += '</button>'


                savedItemsList +=  '<button type="button" data-saved-search-title="'+saveTitle+'" class="saved-search-overwrite w-8 bg-amber-500 hover:bg-amber-900 mb-2 rounded-lg" title="Overwrite">';
                    savedItemsList +=  '<svg class="pointer-events-none -auto w-4 h-10 m-auto fill-gray-100 hover:fill-amber-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">';
                        savedItemsList +=  '<path d="M15,8V4H5V8H15M12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18M17,2L21,6V18A2,2 0 0,1 19,20H5C3.89,20 3,19.1 3,18V4A2,2 0 0,1 5,2H17M11,22H13V24H11V22M7,22H9V24H7V22M15,22H17V24H15V22Z"/>'
                    savedItemsList +=  '</svg>'
                savedItemsList +=  '</button>';
                
                
                savedItemsList +=  '<a href="#" data-saved-search-title="'+saveTitle+'" class="saved-search-remove w-8 bg-red-500 hover:bg-red-900 mb-2 rounded-lg" title="Remove Saved Search">'
                    savedItemsList +=  '<svg class="pointer-events-none -auto w-4 h-10 m-auto fill-gray-100 hover:fill-red-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
                        savedItemsList +=  '<path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"/>'
                    savedItemsList +=  '</svg>'
                savedItemsList +=  '</a>'

            savedItemsList += '</div>'
        }

    }

    document.getElementById("saved-searches-list").innerHTML = savedItemsList;
}