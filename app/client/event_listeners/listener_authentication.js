// ┌─────────────────────────────────────┐
// │                                     │
// │    Authentication code submit       │
// │                                     │
// └─────────────────────────────────────┘

import { request_authentication } from '../requests/request_authentication.js'

export function listener_authentication(){

    const submitButton = document.getElementById('authentication-code-submit');

    submitButton.addEventListener('click', async function(event) { 

        const authenticationCode = document.getElementById('authentication-code').value;

        if (!authenticationCode)
        {
            return
        }

        // Save code to localStorage
        window.localStorage.setItem('authenticationCode', authenticationCode)
        
        // Get authentication status
        let authenticationStatus = await request_authentication(authenticationCode)

        // Authenticated! 
        if (authenticationStatus){
            window.localStorage.setItem('authenticationCode', authenticationCode)
            authenticated = authenticationStatus
        }

        location.reload();

    });

}