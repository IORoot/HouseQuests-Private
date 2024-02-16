// ┌─────────────────────────────────────┐
// │                                     │
// │    List custom palette entries      │
// │                                     │
// └─────────────────────────────────────┘
import {listener_palette_item_remove} from '../event_listeners/listener_palette_item_remove.js'

export function list_palette(){

    let palette;

    let custom_palette = window.localStorage.getItem('custom_palette')

    if (custom_palette === null){
        palette = []
    }else {
        palette = JSON.parse(custom_palette)
    }

    let paletteItems = '';
    
    if (palette){

        // newest at top.
        let reversed = palette.reverse()

        // Loop through colours
        reversed.forEach(function(hexcode, index) {

            let textColour = pickTextColorBasedOnBgColorSimple(hexcode, 'text-white', 'text-black')

            paletteItems += '<div class="font-thin rounded-lg text-xs text-white flex flex-row flex-grow gap-1 h-6 px-2 py-1 text-center" style="background-color: #'+hexcode+'">'

                paletteItems +=  '<a href="#" data-marker-colour="'+hexcode+'" class="modal-icon-colour-button hover:underline w-full '+textColour+'" >'
                    paletteItems +=  hexcode
                paletteItems +=  '</a>'
                
                paletteItems +=  '<a href="#" data-hexcode="'+hexcode+'" class="palette-remove">'
                    paletteItems +=  '<svg class="w-4 h-4 fill-gray-100 hover:fill-red-900 file:my-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
                        paletteItems +=  '<path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"/>'
                    paletteItems +=  '</svg>'
                paletteItems +=  '</a>'

            paletteItems += '</div>'

            
        });
    }

    // update the palette items
    document.getElementById("custom-palette").innerHTML = paletteItems;

    // add all the remove-button event listeners
    listener_palette_item_remove()

}

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
    darkColor : lightColor;
}