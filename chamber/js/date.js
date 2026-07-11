// Display current year
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// Display last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;