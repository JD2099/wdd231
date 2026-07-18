async function loadSpotlights(){

const response =
await fetch("data/members.json");


const members =
await response.json();


const filtered =
members.filter(member =>
member.membership=="Gold" ||
member.membership=="Silver"
);



const selected =
filtered.sort(()=>0.5-Math.random()).slice(0,3);



let html="";


selected.forEach(member=>{

html += `

<div class="card">

<img src="${member.logo}">

<h3>${member.name}</h3>

<p>${member.phone}</p>

<p>${member.address}</p>

<a href="${member.website}">
Website
</a>

<p>
${member.membership}
</p>

</div>

`;

});


document.querySelector("#spotlight-container")
.innerHTML=html;


}


loadSpotlights();