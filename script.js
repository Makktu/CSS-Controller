"use strict";

class Square {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;

        (function () {
            console.log("This could work");
        })();
    }
}

const redSquare = new Square(50, 50, "red");

// *******************************************
// ********** OLD CODE ***********************
// *******************************************

/* function getThisSquare(currentSquare) {
    if (currentSquare === 0) {
        thisOnePlease = redSquare;
    } else if (currentSquare === 1) {
        thisOnePlease = blueSquare;
    } else if (currentSquare === 2) {
        thisOnePlease = greenSquare;
    } else thisOnePlease = yellowSquare;

    return thisOnePlease;
}

function animateArrow(e, direction) {
    console.log(this);
    e.target.classList.add("arrow-clicked");
    setTimeout(function () {
        e.target.classList.remove("arrow-clicked");
    }, 1100);

    if (direction === 1 && height === transAmt) return;
    if (direction === 4 && width === transAmt) return;
    if (direction === 2 && width === 375) return;
    if (direction === 3 && height === 350) return;

    getThisSquare(currentSquare);

    if (direction === 2) {
        width += transAmt;
        thisOnePlease.style.cssText = `height: ${height}px; width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 4) {
        width -= transAmt;
        thisOnePlease.style.cssText = `height: ${height}px; width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 1) {
        height -= transAmt;
        thisOnePlease.style.cssText = `height: ${height}px; width: ${width}px;transition:.3s ease;`;
    }
    if (direction === 3) {
        height += transAmt;
        thisOnePlease.style.cssText = `height: ${height}px; width: ${width}px; transition:.3s ease;`;
    }

    btnClick.play();
    thisOnePlease.classList.remove("active-border");
    currentSquare++;
    if (currentSquare === 4) currentSquare = 0;
    getThisSquare(currentSquare);
    thisOnePlease.classList.add("active-border");

    console.log(height, width);
}

const leftArrow = document.querySelector(".fa-arrow-left");

const rightArrow = document.querySelector(".fa-arrow-right");
const upArrow = document.querySelector(".fa-arrow-up");
const downArrow = document.querySelector(".fa-arrow-down");

const btnClick = new Audio("sound/btn-click.flac");

const redSquare = document.querySelector(".red");
const blueSquare = document.querySelector(".blue");
const greenSquare = document.querySelector(".green");
const yellowSquare = document.querySelector(".yellow");

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

let thisOnePlease;

// * THE SQUARES

let width = 50;
let height = 50;
let transAmt = 25;

let squares = ["redSquare", "blueSquare", "greenSquare", "yellowSquare"];
let currentSquare = 0; */
