import { set_searches } from '../searches/set_searches.js'
import { update_OL_markers } from '../map/update_OL_markers.js'
import { update_search_counts } from '../searches/update_search_counts.js'

import { check_zoopla_input } from '../sanitiser/check_zoopla_input.js';
import { check_rightmove_input } from '../sanitiser/check_rightmove_input.js';
import { check_onthemarket_input } from '../sanitiser/check_onthemarket_input.js';

export async function request_markers(currentURL, source, endpoint) {


    // ╭──────────────────────────────────────────────────────────╮
    // │ Sanitize URLs and do some tests on them                  │
    // ╰──────────────────────────────────────────────────────────╯
    if (source == 'zoopla'){
        currentURL = check_zoopla_input(currentURL)
        if ( ! currentURL ){ return }
    }

    if (source == 'rightmove'){
        currentURL = check_rightmove_input(currentURL)
        if ( ! currentURL ){ return }
    }

    if (source == 'onthemarket'){
        currentURL = check_onthemarket_input(currentURL)
        if ( ! currentURL ){ return }
    }

    

    let path = hostname+'/'+source+'Map'
    if (endpoint){
        path = hostname+'/'+endpoint
    } 
    let icon = window['icon_'+source]

    const currentMarkers = await fetch(path, {method: 'POST', body: currentURL})
        .then(response => response.text())
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    let markers = JSON.parse(currentMarkers)

    update_OL_markers(markers, icon, source);

    set_searches(currentURL, source)

    update_search_counts(source, markers.length)
}