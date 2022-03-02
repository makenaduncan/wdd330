window.alert('Hello');

window.confirm('Do you wish to continue?');

window.prompt('Please enter your name: ');

window.open('https://sitepoint.com','SitePoint','width=100,height="100,resizable=yes');

document.write('This message was written using document.write().')

window.setTimeout( () => alert("Time's Up!"), 5000);




// Square for animations activity
// const squareElement = document.getElementById('square');
// let angle = 0;

// setInterval( () => {
//     angle = (angle + 2) % 360;
//     squareElement.style.transform = `rotate(${angle}deg)`
// }, 1000/60);

const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);