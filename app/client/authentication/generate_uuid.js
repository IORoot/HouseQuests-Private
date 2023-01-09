
export async function generate_uuid() {

    uuid = window.localStorage.getItem('uuid')

    if (uuid === null) {
        uuid = new_uuid()
        window.localStorage.setItem('uuid', uuid)
    }

    return
}

// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function new_uuid(){
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}