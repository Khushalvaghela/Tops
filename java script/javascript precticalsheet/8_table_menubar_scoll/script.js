// some inbuilt functions in js which is used to add or remove css.
// 1. add() => use to add value (class) on webpage.
// 2. remove() => use to remove value (class) from webpage.
// 3. toggle() => use to add or remove (class) from webpage.
// 4. contains() => check your value (class) exist or not.

// property
// 1. classList => property to use add or remove css class from webpage.

let toggle_btn = document.querySelector(".t_btn");
let nav_bar = document.querySelector(".nav");
let icon = document.querySelector(".fa-bars");
toggle_btn.addEventListener("click", function(){
    nav_bar.classList.toggle("nav_toggle");
    if(nav_bar.classList.contains("nav_toggle") == true){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-close");
    }else{
        icon.classList.remove("fa-close");
        icon.classList.add("fa-bars");
    }
})