
export function intro_modal()
{
    // Get current state of toggle
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
        onHide: () => {
        },
        onShow: () => {
        },
        onToggle: () => {
        }
    };

    var introModal = new Modal(targetEl, options);

    console.log('introModalToggleState: ' + introModalToggleState)

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
}