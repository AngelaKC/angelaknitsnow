"use strict";

document.addEventListener("DOMContentLoaded", function () {
    console.log("dom is loaded!");
    let headerNav = document.querySelector("header nav");
    headerNav.classList.add("collapsed");

    headerNav.addEventListener("click", function () {
        console.log("Nav was clicked!");
        headerNav.classList.toggle("collapsed");
    })

    /* 
        added functionality to close pancake nav 
        so when you have an open nav and go big and then small again, 
        the nav will show as closed instead of still open
    */
    window.addEventListener("resize", function () {
        if (window.innerWidth > 650){
            headerNav.classList.add("collapsed");
        }
    })
});