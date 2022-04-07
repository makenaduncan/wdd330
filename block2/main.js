// Global Variables
const cards = document.querySelector(".activity-cards")
const apiURL = "http://www.boredapi.com/api/activity";

const button1 = document.querySelector("#get-activity") 
const button2 = document.querySelector("#recreational") 
const button3 = document.querySelector("#educational") 
const button4 = document.querySelector("#social") 
const button5 = document.querySelector("#diy") 
const button6 = document.querySelector("#charity") 
const button7 = document.querySelector("#cooking") 
const button8 = document.querySelector("#relaxation") 
const button9 = document.querySelector("#music") 


// Toggle Menu Code
function toggleMenu() {
    var hamburger = document.querySelector("#main-navigation");
    if (hamburger.className === "main-nav") {
        hamburger.className += " responsive";
    } 
    else {
        hamburger.className = "main-nav";
    }
}



// Fetching API
const activityURL = apiURL + "/";
let activities = [];

const getActivity = (amount) => {
    cards.innerHTML = "";
    for(let i = 0; i < amount; i++){
        fetch(activityURL)
            .then((response) => response.json())
            .then((data) => {
                
                //  console.log('API loaded successfully');
                 const card = document.createElement("div");
                 card.innerHTML = data.activity
                //  card.innerHTML = "";
                 cards.appendChild(card);
            });

    }
}

const activityURL2 = apiURL + "?type=recreational";

const getRecActivity = (amount) => {
    cards.innerHTML = "";
    for(let i = 0; i < amount; i++){
        fetch(activityURL2)
            .then((response) => response.json())
            .then((data) => {
                
                //  console.log('API loaded successfully');
                 const card = document.createElement("div");
                 card.innerHTML = data.activity
                //  card.innerHTML = "";
                 cards.appendChild(card);
            });

    }
}

const activityURL3 = apiURL + "?type=education";

const getEdActivity = (amount) => {
    cards.innerHTML = "";
    for(let i = 0; i < amount; i++){
        fetch(activityURL3)
            .then((response) => response.json())
            .then((data) => {
                
                //  console.log('API loaded successfully');
                 const card = document.createElement("div");
                 card.innerHTML = data.activity
                //  card.innerHTML = "";
                 cards.appendChild(card);
            });

    }
}

const activityURL4 = apiURL + "?type=social";

const getSocActivity = (amount) => {
    cards.innerHTML = "";
    for(let i = 0; i < amount; i++){
        fetch(activityURL4)
            .then((response) => response.json())
            .then((data) => {
                
                //  console.log('API loaded successfully');
                 const card = document.createElement("div");
                 card.innerHTML = data.activity
                //  card.innerHTML = "";
                 cards.appendChild(card);
            });

    }
}

const activityURL5 = apiURL + "?type=diy";

const getDiyActivity = (amount) => {
    cards.innerHTML = "";
    for(let i = 0; i < amount; i++){
        fetch(activityURL5)
            .then((response) => response.json())
            .then((data) => {
                
                //  console.log('API loaded successfully');
                 const card = document.createElement("div");
                 card.innerHTML = data.activity
                //  card.innerHTML = "";
                 cards.appendChild(card);
            });

    }
}

const activityURL6 = apiURL + "?type=charity";

const getCharActivity = (amount) => {
    cards.innerHTML = "";
    for(let i = 0; i < amount; i++){
        fetch(activityURL6)
            .then((response) => response.json())
            .then((data) => {
                
                //  console.log('API loaded successfully');
                 const card = document.createElement("div");
                 card.innerHTML = data.activity
                //  card.innerHTML = "";
                 cards.appendChild(card);
            });

    }
}

const activityURL7 = apiURL + "?type=cooking";

const getCookActivity = (amount) => {
    cards.innerHTML = "";
    for(let i = 0; i < amount; i++){
        fetch(activityURL7)
            .then((response) => response.json())
            .then((data) => {
                
                //  console.log('API loaded successfully');
                 const card = document.createElement("div");
                 card.innerHTML = data.activity
                //  card.innerHTML = "";
                 cards.appendChild(card);
            });

    }
}

const activityURL8 = apiURL + "?type=relaxation";

const getRelaxActivity = (amount) => {
    cards.innerHTML = "";
    for(let i = 0; i < amount; i++){
        fetch(activityURL8)
            .then((response) => response.json())
            .then((data) => {
                
                //  console.log('API loaded successfully');
                 const card = document.createElement("div");
                 card.innerHTML = data.activity
                //  card.innerHTML = "";
                 cards.appendChild(card);
            });

    }
}

// const activityURL9 = apiURL + "?type=music";

// const getMusicActivity = (amount) => {
//     cards.innerHTML = "";
//     for(let i = 0; i < amount; i++){
//         fetch(activityURL9)
//             .then((response) => response.json())
//             .then((data) => {
                
//                 //  console.log('API loaded successfully');
//                  const card = document.createElement("div");
//                  card.innerHTML = data.activity
//                 //  card.innerHTML = "";
//                  cards.appendChild(card);
//             });

//     }
// }


button1.addEventListener("click", () => { 
    getActivity(6);
})

button2.addEventListener("click", () => { 
    getRecActivity(6);
})
button3.addEventListener("click", () => { 
    getEdActivity(6);
})
button4.addEventListener("click", () => { 
    getSocActivity(6);
})
button5.addEventListener("click", () => { 
    getDiyActivity(6);
})
button6.addEventListener("click", () => { 
    getCharActivity(6);
})
button7.addEventListener("click", () => { 
    getCookActivity(6);
})
button8.addEventListener("click", () => { 
    getRelaxActivity(6);
})
// button9.addEventListener("click", () => { 
//     getMusicActivity(6);
// })




