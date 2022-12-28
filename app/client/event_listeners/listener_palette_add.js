// ╭──────────────────────────────────────────────────────────╮
// │                                                          │
// │          Add a new colour to the custom palette          │
// │                                                          │
// ╰──────────────────────────────────────────────────────────╯
import { list_palette } from '../palette/list_palette.js'
import { listener_change_property_colour } from './listener_change_property_colour.js'

export function listener_palette_add()
{
    // ╭──────────────────────────────────────────────────────────╮
    // │                                                          │
    // │       Add the hexcode to the users custom palette        │
    // │                                                          │
    // ╰──────────────────────────────────────────────────────────╯
    function addHexcodeToPalette()
    {

        let hexcode = modal_colour_hexcode.value
        let palette

        if (!isHexColor(hexcode)){ return }

        // get existing palette
        let custom_palette = window.localStorage.getItem('custom_palette')

        if (custom_palette === null){
            palette = []
        }else {
            palette = JSON.parse(custom_palette)
        }
        
        // if there isn't a palette, create one.
        if (!palette){ palette = [] }
        
        // Check if hexcode already in array.
        if (palette.includes(hexcode)){ 
            console.log('hexcode already in array.')
            return; 
        }

        // Add new colour to palette
        palette.push(hexcode)

        // stringify array
        let paletteString = JSON.stringify(palette)

        // Push new palette to local storage
        window.localStorage.setItem('custom_palette',paletteString)

        // Update the colour list
        list_palette()
        // update the eventListeners to include custom colour chip buttons
        listener_change_property_colour()
    }

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                             TEST IF REAL HEXCODE                             │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    function isHexColor (hex) {
        return typeof hex === 'string'
            && hex.length === 6
            && !isNaN(Number('0x' + hex))
    }


    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                             ADD EVENT LISTENERS                              │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯

    // Put eventListener onto the HEXCODE Set button.
    var modal_colour_hexcode = document.getElementById("modal-icon-colour-hexcode");
    var modal_colour_add_button = document.getElementById("modal-icon-colour-add");
    modal_colour_add_button.addEventListener('click', addHexcodeToPalette, false);
    
    // List the palette
    list_palette()
    // update the eventListeners to include custom colour chip buttons
    listener_change_property_colour()
}