import './style.css'
import generateHome from './homePage'
import generateMenu from './menuPage'
import generateContact from './contactPage'


function generateHeader() {
    const homeNav = document.createElement('div');
    homeNav.innerHTML = 'Home'
    homeNav.id = 'homeNav'

    const menuNav = document.createElement('div');
    menuNav.innerHTML = 'Menu'
    menuNav.id = 'menuNav'

    const contactNav = document.createElement('div');
    contactNav.innerHTML = 'Contact'
    contactNav.id = 'contactNav'

    const topBanner = document.createElement('nav');
    topBanner.classList.add('banner');
    topBanner.appendChild(homeNav);
    topBanner.appendChild(menuNav);
    topBanner.appendChild(contactNav);

    homeNav.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(generateHeader());
        generateHome();
        
    })

    menuNav.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(generateHeader()) ;
        generateMenu();
    })

    contactNav.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = ''
        content.appendChild(generateHeader());
        generateContact();

    })

    return topBanner;
}

function initializePage() {
    const content = document.getElementById('content');
    content.appendChild(generateHeader());
}

initializePage();