"use strict";

const leftArrow = document.querySelector(".fa-arrow-left");

const rightArrow = document.querySelector(".fa-arrow-right");

leftArrow.addEventListener("click", () => {
    console.log("Left Arrow clicked");
});

rightArrow.addEventListener("click", () => {
    console.log("Right Arrow clicked");
    rightArrow.style = "color: red;";
    setTimeout();
    // stuff
});
