// ┌─────────────────────────────────────┐
// │                                     │
// │      List blacklisted entries       │
// │                                     │
// └─────────────────────────────────────┘

function list_blacklist(){

    // get blacklist array
    var blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));

    var blacklistItems = '';
    
    if (blacklist){

        // Loop through markers, checking if any in blacklist.
        blacklist.forEach(function(marker, index) {

            markerID = marker[0];
            markerSource = marker[1];

            var colour = 'slate-200'
            if (markerSource == 'rightmove'){
                colour = 'cyan-500'
            }
        
            if (markerSource == 'zoopla'){
                colour = 'purple-500'
            }

            blacklistItems += '<div class="p-1 bg-'+colour+' text-white rounded-lg text-xs shadow flex flex-row gap-1 h-6 px-1">'

                blacklistItems +=  '<a href="#" data-blacklist-source="'+markerSource+'" data-blacklist-id="'+markerID+'" class="blacklistid-link hover:underline" >'
                    blacklistItems +=  markerID
                blacklistItems +=  '</a>'
                
                blacklistItems +=  '<a href="#" data-blacklist-source="'+markerSource+'" data-blacklist-id="'+markerID+'" class="blacklistid-remove">'
                    blacklistItems +=  '<svg class="w-4 h-4 fill-gray-100 hover:fill-red-900 file:my-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
                        blacklistItems +=  '<path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"/>'
                    blacklistItems +=  '</svg>'
                blacklistItems +=  '</a>'

            blacklistItems += '</div>'
        });
    }

    document.getElementById("blacklist").innerHTML = blacklistItems;
}
list_blacklist();