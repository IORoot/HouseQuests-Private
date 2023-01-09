const os = require('node:os');

export async function check_mac() {

    mac = os.networkInterfaces().en0[0].mac

    return
}