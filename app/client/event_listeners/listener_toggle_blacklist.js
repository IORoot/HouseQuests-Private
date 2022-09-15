// ┌─────────────────────────────────────┐
// │                                     │
// │            Toggle Blacklist         │
// │                                     │
// └─────────────────────────────────────┘
import { onload_searches } from '../searches/onload_searches.js'
import { remove_vector_layers } from '../map/remove_vector_layers.js'

export function listener_toggle_blacklist(){

    const toggleBlacklistSwitch = document.getElementById('blacklisttoggle');
    toggleBlacklistSwitch.addEventListener('click', async function(event) {

        // Remove all existing layers
        remove_vector_layers('zoopla')
        remove_vector_layers('rightmove')
        remove_vector_layers('onthemarket')

        // toggle the blacklist search
        blacklistEnabled = !blacklistEnabled

        // search again.
        onload_searches()
    });

}