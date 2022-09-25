// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘

import { remove_all_filters } from '../colour_filters/remove_all_filters.js'

export function filter_dark(){

    const toggleFilterDark = document.getElementById('filter-dark-toggle');

    toggleFilterDark.addEventListener('click', async function(event) { 

        if (! this.dataset.toggle)
        {
            remove_all_filters()
            let colourizeOne = new ol.filter.Colorize()
            let colourizeTwo = new ol.filter.Colorize()
            openStreetMap.addFilter(colourizeOne);
            openStreetMap.addFilter(colourizeTwo);
            colourizeOne.setFilter('greyscale')
            colourizeTwo.setFilter('invert')
            this.dataset.toggle = "on"
        } else {
            remove_all_filters()
            this.dataset.toggle = ""
        }

    });

}