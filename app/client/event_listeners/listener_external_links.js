// ╭──────────────────────────────────────────────────────────────────────────────╮
// │                                                                              │
// │                        ANY CLASSES WITH external-link                        │
// │                                                                              │
// ╰──────────────────────────────────────────────────────────────────────────────╯

export function listener_external_links(){

    let allElements = document.getElementsByClassName("external-link")

    for (let element of allElements) {

        element.addEventListener('click', async function(event) { 

            console.log(element)

            event.preventDefault();
            require("electron").shell.openExternal(element.href);
    
        });
    }

}