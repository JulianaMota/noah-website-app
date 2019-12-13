"use strict";

const groupModal = document.querySelector(".group-modal");

//function window event listener when load page function init
window.addEventListener("DOMContentLoaded", init);

function init() {
  document
    .querySelector(".group-modal")
    .addEventListener("click", closeGroupModal);
  const btnList = document.querySelectorAll("[data-btn]");
  //   console.log(btnList);
  btnList.forEach(btn => {
    btn.addEventListener("click", openModal);
  });
}

const swiper = new Swiper(".swiper-container", {
  spaceBetween: 27,
  slidesPerView: 1.3
});

function closeGroupModal() {
  groupModal.style.display = "none";
}

function openModal() {
  groupModal.style.display = "block";
}
