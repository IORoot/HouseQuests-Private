
// Load settings from localstorage when page is loaded.
export function load_inspector(positiveNegative)
{
    const inspector = document.getElementById('inspector-'+positiveNegative);

    const inspectorData = window.localStorage.getItem('inspector_'+positiveNegative);

    if (inspectorData)
    {
        inspector.innerHTML = inspectorData.replaceAll('"', '')
    }

}