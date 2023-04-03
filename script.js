let activeTopnavButton;
let activeSidenavButton;

function changeColor(button) {
    const navType = button.tagName === 'BUTTON' ? 'topnav' : 'sidenav';

    if (navType === 'topnav') {
        if (activeTopnavButton) {
            activeTopnavButton.classList.remove('active-topnav');
        }

        button.classList.add('active-topnav');
        activeTopnavButton = button;

        changeColor(document.getElementById(`sidenav-${button.id.split('-')[1]}`));
    } else if (navType === 'sidenav') {
        if (activeSidenavButton) {
            activeSidenavButton.classList.remove('active-sidenav');
        }

        button.classList.add('active-sidenav');
        activeSidenavButton = button;

        changeColor(document.getElementById(`topnav-${button.id.split('-')[1]}`));
    }
}


function toggleSidenav() {
    const sidenavButtons = document.querySelector('.sidenav-buttons');
    const toggleButton = document.getElementById('toggleNavArrow');


    if (sidenavButtons.style.maxHeight === '0px') {
        sidenavButtons.style.maxHeight = '1000px';
        toggleButton.innerHTML = 'expand_more';
    } else {
        sidenavButtons.style.maxHeight = '0px';
        toggleButton.innerHTML = 'chevron_right';
    }
}


