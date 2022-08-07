
// ┌─────────────────────────────────────┐
// │                                     │
// │       Initialise the Drawer         │
// │                                     │
// └─────────────────────────────────────┘


    const options = {
        placement: 'right',
        backdrop: false,
        bodyScrolling: false,
        edge: false,
        edgeOffset: '',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };

    const targetEl = document.getElementById('drawer');

    const drawer = new Drawer(targetEl, options);
