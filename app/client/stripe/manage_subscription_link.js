export function stripe_manage_subscription_link() {

    let subscription_link = document.getElementById('stripe-manage-subscription');

    subscription_link.addEventListener('click', async function(event) { 

        event.preventDefault();
        
        // Open in chrome.
        require("electron").shell.openExternal(stripe_subscription_link);

    });


    subscription_link = document.getElementById('link-panel-stripe-portal');

    subscription_link.addEventListener('click', async function(event) { 

        event.preventDefault();
        
        // Open in chrome.
        require("electron").shell.openExternal(stripe_subscription_link);

    });

}