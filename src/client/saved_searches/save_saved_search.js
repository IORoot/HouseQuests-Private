// ┌─────────────────────────────────────┐
// │                                     │
// │       Save Saved Search entry       │
// │                                     │
// └─────────────────────────────────────┘

import { list_saved_searches } from './list_saved_searches.js'
import { listener_searches_load } from '../event_listeners/listener_searches_load.js'

export function save_saved_search(searchTitle){

    let savedFields = {}
    var oldSavedSearches = {} 
    
    let currentSavedSearches = JSON.parse(window.localStorage.getItem('savedSearches'))

    if (currentSavedSearches){
        oldSavedSearches = currentSavedSearches
    }

    let localStorageKeys = [
        'zooplaSearch',
        'onthemarketSearch',
        'rightmoveSearch',
        'zooplaAllSearch',
        'blacklistedIDs',   
        'inspector_negative',
        'inspector_positive',
        'highlightList',
    ];

    localStorageKeys.forEach(function(storageKey, index){
        let storageData = JSON.parse(window.localStorage.getItem(storageKey));
        savedFields[storageKey] = storageData;
    })

    oldSavedSearches[searchTitle] = savedFields;

    window.localStorage.setItem('savedSearches', JSON.stringify(oldSavedSearches));

    list_saved_searches()
    listener_searches_load()

}