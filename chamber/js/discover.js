import { discoverPlaces } from "../data/discover.mjs";


const container = document.querySelector("#discover-grid");


discoverPlaces.forEach(place => {


    let card = document.createElement("article");


    card.innerHTML = `

<h2>${place.name}</h2>

<figure>
<img src="${place.image}" 
alt="${place.name}"
loading="lazy">
</figure>


<address>
${place.address}
</address>


<p>
${place.description}
</p>


<button>
Learn More
</button>


`;


    container.appendChild(card);


});



// Local Storage

const message = document.querySelector("#visit-message");


const today = Date.now();


const lastVisit = localStorage.getItem("lastVisit");


if (!lastVisit) {

    message.textContent =
        "Welcome! Let us know if you have any questions.";

}

else {


    const difference = today - Number(lastVisit);


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    if (days < 1) {

        message.textContent =
            "Back so soon! Awesome!";

    }

    else {

        message.textContent =
            `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;

    }


}



localStorage.setItem(
    "lastVisit",
    today
);