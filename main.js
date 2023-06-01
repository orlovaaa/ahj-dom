/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/Goblin.js
class Goblin {
  constructor() {
    this.size = 16;
    this.lastGoblin = 0;
  }
  createHtml() {
    const goblin = document.getElementById("goblin");
    const card = document.createElement("div");
    card.classList.add("card");
    goblin.appendChild(card);
    const holeGame = document.createElement("div");
    holeGame.classList.add("hole-game");
    card.appendChild(holeGame);
    for (let i = 0; i < this.size; i++) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      hole.id = `hole${i}`;
      holeGame.appendChild(hole);
    }
  }
  goblinRandom() {
    const random = () => {
      const rand = Math.floor(Math.random() * this.size);
      if (rand === this.lastGoblin) return random();
      this.lastGoblin = rand;
      return rand;
    };
    setInterval(() => {
      this.hole[this.lastGoblin].classList.remove("hole_has-goblin");
      const index = random();
      this.hole[index].classList.add("hole_has-goblin");
    }, 800);
    this.hole = Array.from(document.querySelectorAll(".hole"));
  }
  getHoleIndex(index) {
    let holeClick = document.getElementById(`hole${index}`);
    return holeClick;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const board = new Goblin();
board.createHtml();
board.goblinRandom();
board.goblinClick();
board.onclickButtonClearStat();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map