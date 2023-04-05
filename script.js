let activeTopnavButton;
let activeSidenavButton;

// script.js
function changeColor(button, isSideNav) {
    const contentId = button.id.split('-')[1];
    updateButtonColors(isSideNav ? '.navbarExplorerContainer li' : '.navbar button', contentId, isSideNav);
    updateButtonColors(isSideNav ? '.navbar button' : '.navbarExplorerContainer li', contentId, !isSideNav);

    // Show the associated div for the clicked button
    showContent(contentId + '-content');
}

function updateButtonColors(selector, contentId, isSideNav) {
    const allButtons = document.querySelectorAll(selector);

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.backgroundColor = '';
        allButtons[i].style.color = '';
    }

    const activeButtonId = (isSideNav ? 'sidenav' : 'topnav') + '-' + contentId;
    const activeButton = document.getElementById(activeButtonId);
    const clickMeArrow = document.getElementById('clickMe')

    if (activeButton) {
        activeButton.style.backgroundColor = isSideNav ? '#37373D' : '#1E1E1E';
        activeButton.style.color = 'white';
        clickMeArrow.classList.add('hideArrow')
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



function showContent(contentId) {
    const contentSections = document.querySelectorAll('.content-section');

    for (let i = 0; i < contentSections.length; i++) {
        if (contentSections[i].id === contentId) {
            contentSections[i].style.display = 'block';
        } else {
            contentSections[i].style.display = 'none';
        }
    }
}

const contentSections = document.querySelectorAll('.content-section');
for (let i = 0; i < contentSections.length; i++) {
    contentSections[i].style.display = 'none';
}



