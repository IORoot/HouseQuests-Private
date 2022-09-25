
import { request_authentication } from '../requests/request_authentication.js' 
import { validate_authentication } from './validate_authentication.js' 

export async function check_authentication(authenticationCode) {

    const savedAuthenticationCode = window.localStorage.getItem('authenticationCode')
    const authenticationField = document.getElementById('authentication-code');
    const authenticationIntroField = document.getElementById('intro-authentication-code');

    if (!savedAuthenticationCode){ return }

    authenticationField.value = savedAuthenticationCode
    authenticationIntroField.value = savedAuthenticationCode

    let authenticationData = await request_authentication(savedAuthenticationCode)
    
    // If there is no response or false
    if (!authenticationData){
        return
    }

    authenticated = validate_authentication(authenticationData)

}