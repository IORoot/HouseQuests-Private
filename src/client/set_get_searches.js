function set_searches(search, source)
{

    if (!search){ return }
    if (!source){ return }

    const storageKey = source + 'Search';

    const searchArray = {
        'search': search,
        'source': source,
    }

    window.localStorage.setItem(storageKey, JSON.stringify(searchArray));
}




function get_searches(source)
{

    if (!source){ return }

    const storageKey = source + 'Search';

    let searchArray = JSON.parse(window.localStorage.getItem(storageKey));

    if (!searchArray) { return }

    return searchArray.search
}



function onload_searches()
{
    let sources = [
        'zoopla',
        'rightmove',
        'onthemarket'
    ]

    sources.forEach(function(source){

        let storageKey = source + 'Search';

        let searchArray = JSON.parse(window.localStorage.getItem(storageKey));

        let currentSearch = searchArray.search

        let inputTextBox = document.getElementById(source+'Input');

        inputTextBox.value = currentSearch

        request_markers(currentSearch, source)
    })

}
onload_searches()
