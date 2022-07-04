// Моб меню
let btnHeaderList = document.getElementById("header_list");
let whiteDiv = document.getElementById("header_mibDiv");

btnHeaderList.addEventListener("click", function() {
    if (whiteDiv.classList.contains("header_toogle")) {
        whiteDiv.classList.remove("header_toogle");
    } else {
        whiteDiv.classList.add("header_toogle");
    }
})