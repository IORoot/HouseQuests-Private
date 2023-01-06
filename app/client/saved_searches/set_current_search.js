// ┌─────────────────────────────────────┐
// │                                     │
// │    Set the current saved search     │
// │                                     │
// └─────────────────────────────────────┘

export function set_current_search(searchTitle){

    window.localStorage.setItem('currentSavedSearch', searchTitle)

}