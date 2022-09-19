
export function intro_modal()
{

    // set the modal menu element
    const targetEl = document.getElementById('popup-modal-intro');
    

    // options with default values
    const options = {
        placement: 'center',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        onHide: () => {
            console.log('modal is hidden');
        },
        onShow: () => {
            console.log('modal is shown');
        },
        onToggle: () => {
            console.log('modal has been toggled');
        }
    };

    var introModal = new Modal(targetEl, options);

    // show the modal
    introModal.show();



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