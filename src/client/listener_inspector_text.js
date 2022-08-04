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


// Load settings from localstorage when page is loaded.
function loadInspector(positiveNegative)
{
    const inspector = document.getElementById('inspector-'+positiveNegative);

    const inspectorData = window.localStorage.getItem('inspector_'+positiveNegative);

    if (inspectorData)
    {
        inspector.innerHTML = inspectorData.replaceAll('"', '')
    }

}
loadInspector('positive')
loadInspector('negative')
