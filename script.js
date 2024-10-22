"use strict";
const score_0 = document.getElementById("score--0");
const score_1 = document.getElementById("score--1");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const btn_new = document.querySelector(".btn--new");
const current_0 = document.getElementById("current--0");
const current_1 = document.getElementById("current--1");
const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");
const dice = document.querySelector(".dice");
let currntscore, activeplayer, isgameplaying, scores;
function init() {
  currntscore = 0;
  activeplayer = 0;
  isgameplaying = true;
  scores = [0, 0];
  score_0.textContent = 0;
  score_1.textContent = 0;
  dice.classList.add("hidden");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.getElementById(`current--0`).textContent = currntscore;
  document.getElementById(`current--1`).textContent = currntscore;
}
init();
function swichplayer() {
  currntscore = 0;
  document.getElementById(`current--${activeplayer}`).textContent = currntscore;
  activeplayer = activeplayer == 0 ? 1 : 0;
  player_0.classList.toggle("player--active");
  player_1.classList.toggle("player--active");
}

btn_roll.addEventListener("click", function () {
  if (isgameplaying) {
    const dicerandomnumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${dicerandomnumber}.png`;
    dice.classList.remove("hidden");

    if (dicerandomnumber !== 1) {
      currntscore += dicerandomnumber;
      document.getElementById(`current--${activeplayer}`).textContent =
        currntscore;
    } else {
      //swich player
      swichplayer();
    }
  }
});
btn_hold.addEventListener("click", function () {
  if (isgameplaying) {
    scores[activeplayer] += currntscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 20) {
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
      isgameplaying = false;
    } else {
      swichplayer();
    }
  }
});
btn_new.addEventListener("click", init);
