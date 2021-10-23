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

        clickedArrow = e.target.classList[2].split("-").pop();

        btnClick.play();

        if (currentSquare == 0) redSquare.changeSize(clickedArrow);

        if (currentSquare === 1) blueSquare.changeSize(clickedArrow);

        if (currentSquare === 2) yellowSquare.changeSize(clickedArrow);

        if (currentSquare === 3) greenSquare.changeSize(clickedArrow);
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

    changeSize(clickedArrow) {
        if (clickedArrow === "up") {
            this.height += 25;
        }
        if (clickedArrow === "down") {
            this.height -= 25;
        }
        if (clickedArrow === "right") {
            this.width += 25;
        }
        if (clickedArrow === "left") {
            this.height -= 25;
        }

        this.visiSquare.style.cssText = `height: ${this.height}px; width: ${this.width}px;transition:.3s ease;`;

        // console.log(
        //     `${this.color}, ${this.height}, ${this.width
        // );

        currentSquare++;
        if (currentSquare === 4) currentSquare = 0;
    }
}

const redSquare = new Square(50, 50, "red");
const blueSquare = new Square(50, 50, "blue");
const yellowSquare = new Square(50, 50, "yellow");
const greenSquare = new Square(50, 50, "green");

let currentSquare = 0;
const theSquares = ["red", "blue", "yellow", "green"];

let pointing, clickedArrow;
const upArrow = new Controls("up");
const downArrow = new Controls("down");
const rightArrow = new Controls("right");
const leftArrow = new Controls("left");

const btnClick = new Audio("sound/btn-click.flac");
