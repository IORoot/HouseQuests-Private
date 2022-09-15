

export function clear_search_boxes()
{
    let sources = [
        'zoopla',
        'rightmove',
        'onthemarket'
    ]

    sources.forEach(function(source){
        let inputTextBox = document.getElementById(source+'Input');
        inputTextBox.value = ''
    })
}