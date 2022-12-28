
import { request_authentication } from '../requests/request_authentication.js' 
import { validate_authentication } from './validate_authentication.js' 

export async function check_authentication(authenticationCode) {

    const savedAuthenticationCode = window.localStorage.getItem('authenticationCode')
    const authenticationCodeField = document.getElementById('authentication-code');

    const savedAuthenticationEmail = window.localStorage.getItem('authenticationEmail')
    const authenticationEmailField = document.getElementById('authentication-email');

    if (!savedAuthenticationEmail){ return }
    if (!savedAuthenticationCode){ return }

    authenticationCodeField.value = savedAuthenticationCode

    authenticationEmailField.value = savedAuthenticationEmail

    let authenticationData = await request_authentication(savedAuthenticationCode, savedAuthenticationEmail)

    // If there is no response or false
    if (!authenticationData){
        return
    }

    authenticated = validate_authentication(authenticationData)

}