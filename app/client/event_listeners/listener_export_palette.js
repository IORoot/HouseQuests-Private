// ┌─────────────────────────────────────┐
// │                                     │
// │        Export all settings          │
// │                                     │
// └─────────────────────────────────────┘

export function listener_export_palette()
{

    const exportButton = document.getElementById('export-colour-palette');

    let file = {}

    exportButton.addEventListener('click', function(event) {
        
        let storageData = JSON.parse(window.localStorage.getItem('custom_palette'));
        file = JSON.stringify(storageData);
        
        // let dataStr = storageData;
        let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(file);

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let exportFileDefaultName = 'Palette_export_' + yyyy + '-' + mm + '-' + dd +'.json';
        
        this.setAttribute('href', dataUri);
        this.setAttribute('download', exportFileDefaultName);

    })
    
}