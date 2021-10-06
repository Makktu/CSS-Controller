"use strict";

function animateArrow(e, direction) {
    console.log(this);
    e.target.classList.add("arrow-clicked");
    setTimeout(function () {
        e.target.classList.remove("arrow-clicked");
    }, 1100);

    if (direction === 2) {
        width += 50;
        redSquare.style.cssText = `width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 4) {
        width -= 50;
        redSquare.style.cssText = `width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 4) {
        width -= 50;
        redSquare.style.cssText = `height: 100px; width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 3) {
        height += 50;
        redSquare.style.cssText = `height: ${height}px; transition:.3s ease;`;
    }
}

const leftArrow = document.querySelector(".fa-arrow-left");

const rightArrow = document.querySelector(".fa-arrow-right");
const upArrow = document.querySelector(".fa-arrow-up");
const downArrow = document.querySelector(".fa-arrow-down");

upArrow.addEventListener("click", (e) => {
    animateArrow(e, 1);
});
downArrow.addEventListener("click", (e) => {
    animateArrow(e, 3);
});
leftArrow.addEventListener("click", (e) => {
    animateArrow(e, 4);
});

rightArrow.addEventListener("click", (e) => {
    animateArrow(e, 2);
});

// * THE SQUARES

const redSquare = document.querySelector(".red");

let currentSquare = "redSquare";

let width = 100;
let height = 100;
