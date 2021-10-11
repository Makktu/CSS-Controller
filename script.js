"use strict";

class Controls {
    constructor(pointing) {
        this.pointing = document
            .querySelector(`.fa-arrow-${pointing}`)
            .addEventListener("click", (e) => {
                this.arrowClicked(e);
            });
    }

    arrowClicked(e) {
        e.target.classList.add("arrow-clicked");
        setTimeout(function () {
            e.target.classList.remove("arrow-clicked");
        }, 1100);

        btnClick.play();

        if (currentSquare == "red") {
            currentSquare = "blue";
            redSquare.changeSize(pointing);
        } else if (currentSquare === "blue") {
            currentSquare = "yellow";
            blueSquare.changeSize(pointing);
        } else if (currentSquare === "yellow") {
            currentSquare = "green";
            yellowSquare.changeSize(pointing);
        } else {
            currentSquare = "red";
            greenSquare.changeSize(pointing);
        }
        // this.classList.remove("active-border");
        // thisOnePlease.classList.add("active-border");
    }
}

class Square {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.visiSquare = document.querySelector(`.${this.color}`);
    }

    notice() {
        console.log(`${this.color} square object created successfully.`);
    }

    changeSize() {
        // stuff
        console.log("Got here!", pointing);
        console.log(`${this.color}, ${this.height}, ${this.width}`);
    }
}

const redSquare = new Square(50, 50, "red");
const blueSquare = new Square(50, 50, "blue");
const yellowSquare = new Square(50, 50, "yellow");
const greenSquare = new Square(50, 50, "green");

let currentSquare = "red";
const theSquares = ["red", "blue", "yellow", "green"];

const upArrow = new Controls("up");
const downArrow = new Controls("down");
const rightArrow = new Controls("right");
const leftArrow = new Controls("left");

const btnClick = new Audio("sound/btn-click.flac");
