// ┌─────────────────────────────────────┐
// │                                     │
// │         Clear All Markers           │
// │                                     │
// └─────────────────────────────────────┘

import { remove_vector_layers } from '../map/remove_vector_layers.js'
import { clear_search_boxes } from '../drawer/clear_search_boxes.js'
import { clear_searches } from '../searches/clear_searches.js'
import { update_search_counts } from '../searches/update_search_counts.js'
import { reset_total_search_count } from '../searches/reset_total_search_count.js'

export function listener_clear_all_markers()
{
    const clearAllMarkers = document.getElementById('clear-all-markers');

    clearAllMarkers.addEventListener('click', function(event) {
        remove_vector_layers('zoopla')
        remove_vector_layers('rightmove')
        remove_vector_layers('onthemarket')
        clear_search_boxes();
        clear_searches();
        update_search_counts('zoopla', 0)
        update_search_counts('rightmove', 0)
        update_search_counts('onthemarket', 0)
        reset_total_search_count()
    });
}