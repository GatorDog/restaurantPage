import Sushi4 from './Assets/sushi4.png'

function generateMenu() {
    const content = document.getElementById('content');

    const sushi4 = new Image();
    sushi4.src = Sushi4;
    sushi4.id = 'sushi4';

    const menuText = document.createElement('div');
    menuText.id = 'menuText';
    menuText.innerHTML = `
    
    <h2>SUSHI</h2>
    <br>
    Salmon Roll .......................... 8.99
    <br>
    Philly Roll .......................... 9.99
    <br>
    Tuna Avocado Roll .................... 14.00
    <br>
    Eel Avocado Roll ..................... 14.00
    <br>
    Spicy Crunch Roll .................... 14.00
    <br>
    Chicken Tempura Roll ................. 12.00`;

    content.appendChild(sushi4);
    content.appendChild(menuText)
}

export default generateMenu;