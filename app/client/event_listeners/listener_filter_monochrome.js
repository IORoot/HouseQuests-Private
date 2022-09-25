// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘

import { remove_all_filters } from '../colour_filters/remove_all_filters.js'

export function filter_monochrome(){

    const toggleFilterMonochrome = document.getElementById('filter-monochrome-toggle');

    toggleFilterMonochrome.addEventListener('click', async function(event) { 

        if (! this.dataset.toggle)
        {
            remove_all_filters()
            let colourize = new ol.filter.Colorize()
            openStreetMap.addFilter(colourize);
            colourize.setFilter('greyscale')
            this.dataset.toggle = "on"
        } else {
            remove_all_filters()
            this.dataset.toggle = ""
        }

    });

}