// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘

import { remove_all_filters } from '../colour_filters/remove_all_filters.js'

export function filter_invert(){
    const toggleFilterInvert = document.getElementById('filter-invert-toggle');

    toggleFilterInvert.addEventListener('click', async function(event) { 

        if (! this.dataset.toggle)
        {
            remove_all_filters()
            let colourize = new ol.filter.Colorize()
            openStreetMap.addFilter(colourize);
            colourize.setFilter('invert')
            this.dataset.toggle = "on"
        } else {
            remove_all_filters()
            this.dataset.toggle = ""
        }

    });
}
