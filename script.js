"use strict";

function animateArrow(e, direction) {
    console.log(this);
    e.target.classList.add("arrow-clicked");
    setTimeout(function () {
        e.target.classList.remove("arrow-clicked");
    }, 1100);

    if (direction === 1 && height === transAmt) return;
    if (direction === 4 && width === transAmt) return;
    if (direction === 2 && width === 350) return;
    if (direction === 3 && height === 350) return;

    if (direction === 2) {
        width += transAmt;
        redSquare.style.cssText = `height: ${height}px; width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 4) {
        width -= transAmt;
        redSquare.style.cssText = `height: ${height}px; width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 1) {
        height -= transAmt;
        redSquare.style.cssText = `height: ${height}px; width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 3) {
        height += transAmt;
        redSquare.style.cssText = `height: ${height}px; width: ${width}px; transition:.3s ease;`;
    }
    console.log(height, width);
}

const leftArrow = document.querySelector(".fa-arrow-left");

const rightArrow = document.querySelector(".fa-arrow-right");
const upArrow = document.querySelector(".fa-arrow-up");
const downArrow = document.querySelector(".fa-arrow-down");

const btnClick = new Audio("");

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

let width = 50;
let height = 50;
let transAmt = 25;
