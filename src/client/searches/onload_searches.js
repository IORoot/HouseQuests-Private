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
