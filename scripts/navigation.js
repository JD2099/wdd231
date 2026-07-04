const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menu.textContent = "☰";

menu.addEventListener("click", () => {

    navigation.classList.toggle("open");

    menu.textContent =
        navigation.classList.contains("open") ? "✖" : "☰";

});