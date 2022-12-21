// ┌─────────────────────────────────────┐
// │                                     │
// │   Palette Remove Event Listener     │
// │                                     │
// └─────────────────────────────────────┘
import { list_palette } from '../palette/list_palette.js'
import { listener_change_property_colour } from './listener_change_property_colour.js'

export function listener_palette_item_remove()
{

    // Function to run when palette remove button is clicked.
    let removepaletteItem = function() {
        
        // get item hexcode
        let hexcode = this.dataset.hexcode

        // Get the local stoarge palette
        var palette = JSON.parse(window.localStorage.getItem('custom_palette'));
        
        // if empty, do nothing
        if (!palette){ return }

        // find the index of the hexcode to remove from palette
        let index = palette.indexOf(hexcode);

        // remove the item
        if (index > -1) { // only splice array when item is found
            palette.splice(index, 1); // 2nd parameter means remove one item only
        }

        // add back to localstorage
        window.localStorage.setItem('custom_palette', JSON.stringify(palette));

        // update list
        list_palette()

        // update the eventListeners to include custom colour chip buttons
        listener_change_property_colour()
    };

    // get all colour chips
    let all_colour_chips = document.getElementsByClassName("palette-remove");
    // Loop through all buttons and give them an event listener.
    for (var chipIndex = 0; chipIndex < all_colour_chips.length; chipIndex++) {
        all_colour_chips[chipIndex].addEventListener('click', removepaletteItem, false);
    }

}