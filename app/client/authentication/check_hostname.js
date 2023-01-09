const os = require('node:os');

export async function check_hostname() {

    machine_hostname = os.hostname()
    
    return
}