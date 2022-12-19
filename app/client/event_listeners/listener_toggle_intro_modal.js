// ┌─────────────────────────────────────┐
// │                                     │
// │          Toggle Intro Modal         │
// │                                     │
// └─────────────────────────────────────┘

export function listener_toggle_intro_modal(){

    const toggleIntroModalSwitch = document.getElementById('introModalToggle');

    toggleIntroModalSwitch.addEventListener('click', async function(event) {

        if ( this.checked ){
            window.localStorage.setItem('introModalToggle', 'true');
        } else {
            window.localStorage.setItem('introModalToggle', 'false');
        }

    });

}