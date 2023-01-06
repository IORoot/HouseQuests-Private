// ┌─────────────────────────────────────┐
// │                                     │
// │   Add listeners to load buttons     │
// │                                     │
// └─────────────────────────────────────┘

import { load_saved_search } from '../saved_searches/load_saved_search.js'
import { set_current_search } from '../saved_searches/set_current_search.js'
import { remove_saved_search } from '../saved_searches/remove_saved_search.js'

export function listener_searches_load()
{

    const saveSearchesButtons = document.getElementsByClassName('load-saved-search');

    // Loop through all buttons and give them an event listener.
    for (var searchButtons = 0; searchButtons < saveSearchesButtons.length; searchButtons++) {
        
        saveSearchesButtons[searchButtons].addEventListener('click', function(event) {

            if (event.target !== this) return;

            load_saved_search(this.dataset.savedSearchTitle)
            set_current_search(this.dataset.savedSearchTitle)

        });

    }



    // Remove button on each saved search entry 
    const saveSearchesRemoveButtons = document.getElementsByClassName('saved-search-remove');

    // Loop through all buttons and give them an event listener.
    for (var searchRemoveIndex = 0; searchRemoveIndex < saveSearchesRemoveButtons.length; searchRemoveIndex++) {
    
        saveSearchesRemoveButtons[searchRemoveIndex].addEventListener('click', function(event) {

            if (event.target !== this) return;
            remove_saved_search(this.dataset.savedSearchTitle)

        });

    }
    



    // Overwrite button on each saved search entry 
    const saveSearchesOverwriteButtons = document.getElementsByClassName('saved-search-overwrite');

    // Loop through all buttons and give them an event listener.
    for (var searchOverwriteIndex = 0; searchOverwriteIndex < saveSearchesOverwriteButtons.length; searchOverwriteIndex++) {
    
        saveSearchesOverwriteButtons[searchOverwriteIndex].addEventListener('click', function(event) {

            if (event.target !== this) return;

            const overwriteModel = document.getElementById('popup-modal-overwrite-message');

            overwriteModel.dataset.savedSearchTitle = this.dataset.savedSearchTitle
            overwriteModel.classList.remove('hidden');
            overwriteModel.classList.add('flex');

        });

    }


}