"use strict";

// restdb link to all content
const baseLink = "https://anime-8835.restdb.io/rest/";
const infoBtn = document.querySelector("[data-question]");
// console.log(infoBtn);

window.addEventListener("DOMContentLoaded", start);

// function start when document loads
function start() {
  infoBtn.addEventListener("click", openInfoModal);
  document
    .querySelector("[data-modal=x]")
    .addEventListener("click", closeInfoModal);
  document
    .querySelector(".modal-info")
    .addEventListener("click", closeInfoModal);
}

// function to open all models of the info question mark
function openInfoModal() {
  console.log(infoBtn.children);
  infoBtn.children[0].style.fill = "#f4a100";
  document.querySelector(".modal-info").style.visibility = "visible";
}

// function to close all models of the info question mark
function closeInfoModal() {
  infoBtn.children[0].style.fill = "#1c7b5b";
  document.querySelector(".modal-info").style.visibility = "hidden";
}

// function to add event listener to favorites icon heart
function favoriteClick() {
  const favoritesBtn = document.querySelectorAll(".favorites-button");
  //   console.log(favoritesBtn);
  favoritesBtn.forEach(btn => {
    // console.log(btn);
    btn.addEventListener("click", heartClicked);
  });
}

// function to change color of the heart
function heartClicked(event) {
  //   console.log(event.target.children[0].children[0]);
  event.target.children[0].children[0].classList.add("fill-color");
}
