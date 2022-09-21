
// ┌─────────────────────────────────────┐
// │                                     │
// │        General Alert Modal          │
// │                                     │
// └─────────────────────────────────────┘
export function alert_modal(content){

    // set the modal menu element
    const targetEl = document.getElementById('popup-modal-alert');

    const targetBody = document.getElementById('popup-modal-alert-body');

    // options with default values
    const options = {
        placement: 'center',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    // Create the modal
    var alertModal = new Modal(targetEl, options);

    // set the content
    targetBody.innerHTML = content

    // show the modal
    alertModal.show();

    // Close the Modal button
    const popupModalAlertClose = document.getElementById('popup-modal-alert-close');
    popupModalAlertClose.addEventListener('click', async function(event) {
        targetBody.innerHTML = ''
        alertModal.hide();
    });

    const popupModalAlertX = document.getElementById('popup-modal-alert-x');
    popupModalAlertX.addEventListener('click', async function(event) {
        targetBody.innerHTML = ''
        alertModal.hide();
    });


}