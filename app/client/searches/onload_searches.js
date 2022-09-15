import { request_markers } from '../requests/request_markers.js'

export function onload_searches()
{
    let sources = [
        'zoopla',
        'rightmove',
        'onthemarket'
    ]

    sources.forEach(function(source){

        let storageKey = source + 'Search';

        let searchArray = JSON.parse(window.localStorage.getItem(storageKey));

        if (!searchArray){ return }
        
        let currentSearch = searchArray.search

        let inputTextBox = document.getElementById(source+'Input');

        inputTextBox.value = currentSearch

        request_markers(currentSearch, source)
    })

}