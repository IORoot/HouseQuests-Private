// ┌─────────────────────────────────────┐
// │                                     │
// │  Text in Inspector Event Listeners  │
// │                                     │
// └─────────────────────────────────────┘


// Save settings to localstorage when user focuses-out of the textarea.
function listenerInspector(positiveNegative){
    const inspector = document.getElementById('inspector-'+positiveNegative);

    inspector.addEventListener('focusout', function(event) {
        window.localStorage.setItem('inspector_'+positiveNegative, JSON.stringify(this.value));
    });
}
listenerInspector('positive')
listenerInspector('negative')