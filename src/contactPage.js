import googleMap from './Assets/google maps.png'


function generateContact() {
    const content = document.getElementById('content');

    const addressPhone = document.createElement('div');
    addressPhone.id = 'addressPhone';
    addressPhone.innerHTML = `
    
    <h2>ADDRESS</h2>
    <br>
    123 Fake Street
    Suite 01
    Sometown, Somewhere, 12345
    <br>
    <h2>PHONE</h2>
    <br>
    555-555-5555
    `

    const googleMaps = new Image();
    googleMaps.src = googleMap;
    googleMaps.id = 'contactMap'

    content.appendChild(googleMaps);
    content.appendChild(addressPhone);

}

export default generateContact;