// ┌─────────────────────────────────────┐
// │                                     │
// │         Clear All Markers           │
// │                                     │
// └─────────────────────────────────────┘

import { remove_vector_layers } from '../map/remove_vector_layers.js'
import { clear_search_boxes } from '../drawer/clear_search_boxes.js'

export function listener_clear_all_markers()
{
    const clearAllMarkers = document.getElementById('clear-all-markers');

    clearAllMarkers.addEventListener('click', function(event) {
        remove_vector_layers('zoopla')
        remove_vector_layers('rightmove')
        remove_vector_layers('onthemarket')
        clear_search_boxes();
    });
}