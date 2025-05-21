const navBtn = document.getElementById('mobileMenuBtn');
const navUl = document.getElementById('mainMenu');
navBtn.addEventListener("click", e => {
    if (navUl.style.height == "" || navUl.style.height == "0rem") {
        navUl.style.height = "14rem";
    } else {
        navUl.style.height = "0rem";
    }
})
navUl.addEventListener("click", e => {
    navUl.style.height = "0rem";
})

// document.querySelector("body").addEventListener("click", () => {
//     if (navUl.style.height == "12.5rem") {
//         navUl.style.height = "0rem";
//     }
// })