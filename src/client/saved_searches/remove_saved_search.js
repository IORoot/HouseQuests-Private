// ┌─────────────────────────────────────┐
// │                                     │
// │       Load Saved Search entry       │
// │                                     │
// └─────────────────────────────────────┘

import { list_saved_searches } from './list_saved_searches.js'
import { listener_searches_load } from '../event_listeners/listener_searches_load.js'

export function remove_saved_search(searchTitle){

    console.log(searchTitle)

    let savedSearches = JSON.parse(window.localStorage.getItem('savedSearches'))

    if (!savedSearches){ return }

    delete savedSearches[searchTitle]

    window.localStorage.setItem('savedSearches', JSON.stringify(savedSearches))

    list_saved_searches()
    listener_searches_load()
    
}