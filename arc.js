// console.log(navigator.userAgent);
// console.log(navigator.vendor);
// console.log(navigator.platform);

// function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     var altitude = position.coords.altitude;
//     var speed = position.coords.speed;
//     console.log(latitude, longitude);
// }

// navigator.geolocation.getCurrentPosition(success)

// function geoError(errorObj) {
//     alert("Uh oh, something went wrong");

// }
// navigator.geolocation.getCurrentPosition(success, geoError);

// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.colorDepth);
// console.log(screen.orientation);

document.bgColor = "skyblue";

// console.log(document.body);

// function success(position) {

// }
// function error(errorObj) {

// }
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, error);
// }
// else {
//     alert("Sorry, geolocation isn't available in this browser.")


// }

// var header = document.getElementById('header');
// console.log(header);

// var listItems = document.getElementsByClassName('list');

// listItems = document.querySelectorAll('.list');


// listItem = document.querySelector('.list');
// console.log(listItems);

// console.log(document.getElementsByTagName('p')[1]);


// var head = document.getElementsById('main')
// head.style.backgroundColor = 'red';
// head.style.paddingLeft = '20px';

var pageBody = document.getElementsByTagName('body')[0];

var newImg = document.createElement('img');
newImg.src = 'http://placekitten.com/g/500/200';
newImg.style.border = '1px solid black';

pageBody.appendChild(newImg);

var newTag = document.getElementById('header')

var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('good doggo');


newParagraph.appendChild(paragraphText)
newTag.appendChild(newParagraph)
