
export async function request_authentication(authenticationCode) {

    let path = auth_server+'/authenticate'

    const serverResponse = await fetch(path, {method: 'POST', body: authenticationCode})
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    authenticated = await serverResponse.json()

    return authenticated

}