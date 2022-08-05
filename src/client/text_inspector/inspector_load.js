
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