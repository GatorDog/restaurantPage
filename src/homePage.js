import Sushi1 from './Assets/sushi1.png'
import Sushi2 from './Assets/sushi2.png'
import googleMap from './Assets/google maps.png'







function generateHome() {

    const homeSummary = document.createElement('div');
    homeSummary.id = ('homeSummary');
    

    const homeParagraph = document.createElement('p')
    homeParagraph.innerHTML = ('Welcome! <br> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lacus massa. Maecenas vitae finibus mauris. Sed purus elit, pellentesque quis pulvinar ut, cursus vitae nisi. Suspendisse mauris augue, aliquet eget augue ac, accumsan hendrerit massa. Integer eget ex venenatis, mattis ligula ac, ornare sapien ');
    homeParagraph.classList.add('paragraphText');

    const map = new Image();
    map.src = googleMap;
    map.id = 'map';

    const foodImages = document.createElement('div');
    foodImages.id = ('foodImages');
    const sushi1 = new Image();
    const sushi2 = new Image();

    sushi1.src = Sushi1;
    sushi2.src = Sushi2;

    sushi1.classList.add('foodImage');
    sushi2.classList.add('foodImage');
    foodImages.appendChild(sushi1);
    foodImages.appendChild(sushi2);
    
    const content = document.getElementById('content');
    homeSummary.appendChild(homeParagraph);
    homeSummary.appendChild(map);
    content.appendChild(homeSummary);
    content.appendChild(foodImages);

}

export default generateHome;