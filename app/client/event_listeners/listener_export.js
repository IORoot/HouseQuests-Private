// ┌─────────────────────────────────────┐
// │                                     │
// │        Export all settings          │
// │                                     │
// └─────────────────────────────────────┘

export function listener_export()
{

    const exportButton = document.getElementById('admin-export');

    let file = {}

    exportButton.addEventListener('click', function(event) {
        
        let localStorageKeys = [
            'zooplaSearch',
            'onthemarketSearch',
            'rightmoveSearch',
            'zooplaAllSearch',
            'blacklistedIDs',   
            'inspector_negative',
            'inspector_positive',
            'highlightList',
            'savedSearches',
            'custom_palette',
            'introTutorialToggle',
            'introModalToggle',
        ];

        localStorageKeys.forEach(function(storageKey, index){
            let storageData = JSON.parse(window.localStorage.getItem(storageKey));
            file[storageKey] = JSON.stringify(storageData);
        })
        
        let dataStr = JSON.stringify(file);
        let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);


        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let exportFileDefaultName = 'HQ_export_' + yyyy + '-' + mm + '-' + dd +'.json';

        this.setAttribute('href', dataUri);
        this.setAttribute('download', exportFileDefaultName);

    })
    
}