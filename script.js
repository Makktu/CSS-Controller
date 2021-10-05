"use strict";

function animateArrow(e) {
    e.target.classList.add("arrow-clicked");
    setTimeout(function () {
        e.target.classList.remove("arrow-clicked");
    }, 1100);
}

const leftArrow = document.querySelector(".fa-arrow-left");

const rightArrow = document.querySelector(".fa-arrow-right");
const upArrow = document.querySelector(".fa-arrow-up");
const downArrow = document.querySelector(".fa-arrow-down");

upArrow.addEventListener("click", (e) => {
    animateArrow(e);
});
downArrow.addEventListener("click", (e) => {
    animateArrow(e);
});
leftArrow.addEventListener("click", (e) => {
    animateArrow(e);
});

rightArrow.addEventListener("click", (e) => {
    animateArrow(e);
});
