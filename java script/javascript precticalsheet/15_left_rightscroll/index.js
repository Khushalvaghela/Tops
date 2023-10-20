let toggle_nav = document.querySelector(".t_btn");
let navb = document.querySelector(".nav");
toggle_nav.addEventListener("click", function(){
    navb.classList.add("nav_toggle");
})

let c_btn = document.querySelector(".c_btn");
c_btn.addEventListener("click", function(){
    navb.classList.remove("nav_toggle");
})