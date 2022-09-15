// ┌─────────────────────────────────────┐
// │                                     │
// │        Export all settings          │
// │                                     │
// └─────────────────────────────────────┘

import { save_saved_search } from '../saved_searches/save_saved_search.js'

export function listener_searches_save()
{

    const saveSearchesName = document.getElementById('save-searches-name');
    const saveSearchesButton = document.getElementById('save-searches');

    saveSearchesButton.addEventListener('click', function(event) {

        save_saved_search(saveSearchesName.value)

    })
    
}