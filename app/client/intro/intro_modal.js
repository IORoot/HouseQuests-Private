import {request_notifications} from '../requests/request_notifications.js'

export function intro_modal()
{
    // Get current state of toggle from localstorage
    let introModalToggleState = window.localStorage.getItem('introModalToggle');

    // Set the toggle html 'checked' to be the same as the value in localstorage
    if (introModalToggleState == 'true')
    {
        document.getElementById('introModalToggle').checked = true;
    }
    
    // set the modal menu element
    const targetEl = document.getElementById('popup-modal-intro');
    
    // options with default values
    const options = {
        placement: 'center',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    // Create the modal
    var introModal = new Modal(targetEl, options);

    // Show the modal as long as it hasn't been disabled.
    if (introModalToggleState == 'false' || introModalToggleState == null)
    {
        // show the modal
        introModal.show();
    }

    // Close the Modal button
    const popupModalIntroClose = document.getElementById('popup-modal-intro-close');
    popupModalIntroClose.addEventListener('click', async function(event) {
        introModal.hide();
    });

    const popupModalIntroX = document.getElementById('popup-modal-intro-x');
    popupModalIntroX.addEventListener('click', async function(event) {
        introModal.hide();
    });

    // Authentication message
    if ( authenticated ){
        document.getElementById('authentication-status').innerHTML = '<span class="text-emerald-500">Authenticated</span>';
    }

    if ( ! authenticated ){
        document.getElementById('authentication-status').innerHTML = '<span class="text-red-500">Not Authenticated</span>';
    }

    // Link Listeners
    open_link_in_chrome('link-panel-quick-start-video')
    open_link_in_chrome('link-panel-pricing')
    open_link_in_chrome('link-panel-documentation')
    open_link_in_chrome('link-panel-tutorials')
    open_link_in_chrome('link-panel-downloads')

    // Load the notifications
    request_notifications()
}



function open_link_in_chrome(link_id)
{
    let link = document.getElementById(link_id);

    link.addEventListener('click', async function(event) { 

        event.preventDefault();
        require("electron").shell.openExternal(link.href);

    });
}