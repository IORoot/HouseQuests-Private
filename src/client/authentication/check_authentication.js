
import { request_authentication } from '../requests/request_authentication.js' 

export async function check_authentication(authenticationCode) {

    const savedAuthenticationCode = window.localStorage.getItem('authenticationCode')
    const authenticationField = document.getElementById('authentication-code');

    if (!savedAuthenticationCode){ return }

    authenticationField.value = savedAuthenticationCode

    let authenticationStatus = await request_authentication(savedAuthenticationCode)
    console.log('authenticationStatus: '+authenticationStatus)

    if (authenticationStatus){
        authenticated = authenticationStatus
    }

}