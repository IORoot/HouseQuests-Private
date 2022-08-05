
async function request_markers(currentURL, source) {

    let path = hostname+'/'+source+'Map'
    let icon = window['icon_'+source]

    const currentMarkers = await fetch(path, {method: 'POST', body: currentURL})
        .then(response => response.text())
        .catch(function(error) {
            console.log("ERROR:"+error);
        });
    
    update_OL_markers(JSON.parse(currentMarkers), icon, source);

    set_searches(currentURL, source)
}