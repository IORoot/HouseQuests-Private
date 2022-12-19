
export function intro_tutorial()
{
    // Get current state of toggle from localstorage
    let introTutorialToggleState = window.localStorage.getItem('introTutorialToggle');

    // Set the toggle html 'checked' to be the same as the value in localstorage
    if (introTutorialToggleState == 'true')
    {
        document.getElementById('introTutorialModalToggle').checked = true;
    }
    
    // set the modal menu element
    const targetEl = document.getElementById('popup-modal-tutorial');
    
    // options with default values
    const options = {
        placement: 'center',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    // Create the modal
    var introTutorial = new Modal(targetEl, options);

    // Show the modal as long as it hasn't been disabled.
    if (introTutorialToggleState == 'false' || introTutorialToggleState == null)
    {
        // show the modal
        introTutorial.show();
    }

    // Close the Modal button
    const popupModalTutorialClose = document.getElementById('popup-modal-tutorial-close');
    popupModalTutorialClose.addEventListener('click', async function(event) {
        window.localStorage.setItem('introTutorialToggle', 'true')
        introTutorial.hide();
    });

    const popupModalTutorialX = document.getElementById('popup-modal-tutorial-x');
    popupModalTutorialX.addEventListener('click', async function(event) {
        window.localStorage.setItem('introTutorialToggle', 'true')
        introTutorial.hide();
    });

}
