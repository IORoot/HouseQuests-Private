// ┌─────────────────────────────────────┐
// │                                     │
// │        Import all settings          │
// │                                     │
// └─────────────────────────────────────┘

export async function listener_import_colour_palette()
{

    const importFileInput = document.getElementById('import_colour_palette');

    importFileInput.addEventListener('change', (event) => {

        const fileList = event.target.files;

        new Response(fileList[0]).json().then(importedJSON => {

            window.localStorage.setItem('custom_palette', JSON.stringify(importedJSON));

            location.reload();

        }, err => {
            console.log('not correct JSON file')
        })

    });
    
}
