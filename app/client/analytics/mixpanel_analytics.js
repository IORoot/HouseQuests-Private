import mixpanel from 'mixpanel-browser';

export function mixpanel_analytics()
{

    const authenticationEmail = window.localStorage.getItem('authenticationEmail')

    // Enabling the debug mode flag is useful during implementation,
    // but it's recommended you remove it for production
    mixpanel.init(mixpanel_token, {debug: false}); 
    mixpanel.track('Electron Load',  {
        email: authenticationEmail,
        authenticated: authenticated
    });


}