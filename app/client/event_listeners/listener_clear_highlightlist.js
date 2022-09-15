// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘

export function listener_clear_highlightlist()
{

    const clearHighlistList = document.getElementById('clear-highlightlist');
    clearHighlistList.addEventListener('click', async function(event) {
        window.localStorage.removeItem('highlightList');    
    });

}