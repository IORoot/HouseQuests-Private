import { set_searches } from '../searches/set_searches.js'
import { update_OL_markers } from '../map/update_OL_markers.js'
import { update_search_counts } from '../searches/update_search_counts.js'

export async function request_markers(currentURL, source) {

    let path = hostname+'/'+source+'Map'
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