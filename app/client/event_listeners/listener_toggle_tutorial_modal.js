// ┌─────────────────────────────────────┐
// │                                     │
// │          Toggle Intro Modal         │
// │                                     │
// └─────────────────────────────────────┘

export function listener_toggle_tutorial_modal(){

    const toggleIntroTutorialModalSwitch = document.getElementById('introTutorialModalToggle');

    toggleIntroTutorialModalSwitch.addEventListener('click', async function(event) {

        console.log(this.checked)

        if ( this.checked ){
            window.localStorage.setItem('introTutorialToggle', 'true');
        } else {
            window.localStorage.setItem('introTutorialToggle', 'false');
        }

    });

}