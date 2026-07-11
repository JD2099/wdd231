const url = "data/members.json";
const membersContainer = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load members data.");
        }

        const members = await response.json();
        displayMembers(members);

    } catch (error) {
        console.error("Error:", error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Address:</strong><br>${member.address}</p>

            <p><strong>Phone:</strong><br>${member.phone}</p>

            <p>
                <strong>Website:</strong><br>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>Membership Level:</strong> ${getMembership(member.membership)}</p>

            <p>${member.description}</p>
        `;

        membersContainer.appendChild(card);
    });
}

function getMembership(level) {

    switch (level) {
        case 1:
            return "Member";
        case 2:
            return "Silver";
        case 3:
            return "Gold";
        default:
            return "Unknown";
    }

}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

getMembers();