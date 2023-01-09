
export async function request_authentication(authenticationCode, authenticationEmail) {

    let path = auth_server+'/authenticate'

    let authenticationRequest = JSON.stringify({
        code: authenticationCode,
        email: authenticationEmail,
        uuid: uuid,
        mac: mac,
        version: packageJson.version,
        hostname: machine_hostname
    })

    const serverResponse = await fetch(path, {method: 'POST', body: authenticationRequest})
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    authenticated = await serverResponse.json()

    return authenticated

}