// ┌─────────────────────────────────────┐
// │                                     │
// │    Authentication code submit       │
// │                                     │
// └─────────────────────────────────────┘

import { request_authentication } from '../requests/request_authentication.js'
import { validate_authentication } from '../authentication/validate_authentication.js' 

export function listener_authentication_intro(){

    const submitButton = document.getElementById('intro-authentication-code-submit');

    submitButton.addEventListener('click', async function(event) { 

        const authenticationCode = document.getElementById('intro-authentication-code').value;

        if (!authenticationCode)
        {
            return
        }

        // Save code to localStorage
        window.localStorage.setItem('authenticationCode', authenticationCode)
        
        // Get authentication status
        let authenticationData = await request_authentication(authenticationCode)

        // Authenticated! 
        if (!authenticationData){
            return
        }

        window.localStorage.setItem('authenticationCode', authenticationCode)

        authenticated = validate_authentication(authenticationData)
        
        location.reload();

    });

}