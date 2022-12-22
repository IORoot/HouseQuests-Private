// ┌─────────────────────────────────────┐
// │                                     │
// │        Import all settings          │
// │                                     │
// └─────────────────────────────────────┘

export async function listener_import()
{

    const importFileInput = document.getElementById('import_file_input');

    const importButton = document.getElementById('settingsImport');

    importFileInput.addEventListener('change', (event) => {
        const fileList = event.target.files;

        // alternative way to load file
        // var importedJSON = new Blob(fileList).text().then(JSON.parse)

        new Response(fileList[0]).json().then(importedJSON => {
            update_localStorage('zooplaSearch', importedJSON.zooplaSearch);
            update_localStorage('zooplaAllSearch', importedJSON.zooplaAllSearch);
            update_localStorage('onthemarketSearch', importedJSON.onthemarketSearch);
            update_localStorage('rightmoveSearch', importedJSON.rightmoveSearch);
            update_localStorage('blacklistedIDs', importedJSON.blacklistedIDs);
            update_localStorage('inspector_negative', importedJSON.inspector_negative);
            update_localStorage('inspector_positive', importedJSON.inspector_positive);
            update_localStorage('highlightList', importedJSON.highlightList);
            update_localStorage('savedSearches', importedJSON.savedSearches);
            update_localStorage('custom_palette', importedJSON.custom_palette);
            update_localStorage('introTutorialToggle', importedJSON.custom_palette);
            update_localStorage('introModalToggle', importedJSON.custom_palette);

            location.reload();

        }, err => {
            console.log('not correct JSON file')
        })

    });
    
}

function update_localStorage(itemID, jsonData)
{
    window.localStorage.setItem(itemID, jsonData);
}