"use strict";

const baseLink = "https://anime-8835.restdb.io/rest/";
const infoBtn = document.querySelector("[data-question]");
// console.log(infoBtn);

window.addEventListener("DOMContentLoaded", start);

function start() {
  infoBtn.addEventListener("click", openInfoModal);
  document
    .querySelector("[data-modal=x]")
    .addEventListener("click", closeInfoModal);
  document
    .querySelector(".modal-info")
    .addEventListener("click", closeInfoModal);
}

function openInfoModal() {
  console.log(infoBtn.children);
  infoBtn.children[0].style.fill = "#f4a100";
  document.querySelector(".modal-info").style.visibility = "visible";
}

function closeInfoModal() {
  infoBtn.children[0].style.fill = "#1c7b5b";
  document.querySelector(".modal-info").style.visibility = "hidden";
}

function favoriteClick() {
  const favoritesBtn = document.querySelectorAll(".favorites-button");
  //   console.log(favoritesBtn);
  favoritesBtn.forEach(btn => {
    // console.log(btn);
    btn.addEventListener("click", heartClicked);
  });
}

function heartClicked(event) {
  //   console.log(event.target.children[0].children[0]);
  event.target.children[0].children[0].classList.add("fill-color");
}
