// ┌─────────────────────────────────────┐
// │                                     │
// │       Load Saved Search entry       │
// │                                     │
// └─────────────────────────────────────┘

export function load_saved_search(searchTitle){

    let savedSearches = JSON.parse(window.localStorage.getItem('savedSearches'))

    if (!savedSearches){ return }

    let savedSearch = savedSearches[searchTitle]

    Object.keys(savedSearch).forEach(key => {
        window.localStorage.setItem(key, JSON.stringify(savedSearch[key]));
    });

    location.reload();

}