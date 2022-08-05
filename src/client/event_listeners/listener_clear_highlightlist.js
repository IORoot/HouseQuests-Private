// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘
const clearHighlistList = document.getElementById('clear-highlightlist');
clearHighlistList.addEventListener('click', async function(event) {
    window.localStorage.removeItem('highlightList');    
});
