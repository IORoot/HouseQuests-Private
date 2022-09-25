// ┌─────────────────────────────────────┐
// │                                     │
// │      Goto the search page URL       │
// │                                     │
// └─────────────────────────────────────┘

export function listener_goto_search_url()
{

    const zooplaInput = document.getElementById('zooplaInput');
    const zooplaButton = document.getElementById('zoopla-goto-search');
    zooplaButton.addEventListener('click', async function(event) { 
        require("electron").shell.openExternal(zooplaInput.value);
    });

    const rightmoveInput = document.getElementById('rightmoveInput');
    const rightmoveButton = document.getElementById('rightmove-goto-search');
    rightmoveButton.addEventListener('click', async function(event) { 
        require("electron").shell.openExternal(rightmoveInput.value);
    });

    const onthemarketInput = document.getElementById('onthemarketInput');
    const onthemarketButton = document.getElementById('onthemarket-goto-search');
    onthemarketButton.addEventListener('click', async function(event) { 
        require("electron").shell.openExternal(onthemarketInput.value);
    });

}