
export async function request_authentication(authenticationCode, authenticationEmail) {

    let path = auth_server+'/authenticate'

    let authenticationRequest = JSON.stringify({
        code: authenticationCode,
        email: authenticationEmail,
    })

    const serverResponse = await fetch(path, {method: 'POST', body: authenticationRequest})
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    authenticated = await serverResponse.json()

    return authenticated

}