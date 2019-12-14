"use strict";

const groupModal = document.querySelector(".group-modal");

let groupsArr;

const title = document.querySelector(".group-modal h2");

//function window event listener when load page function init
window.addEventListener("DOMContentLoaded", init);

function init() {
  document
    .querySelector(".group-modal")
    .addEventListener("click", closeGroupModal);
  const btnCph = document.querySelector("[data-btn=Copenhagen]");
  btnCph.addEventListener("click", openModalCph);
  const btnAlb = document.querySelector("[data-btn=Alborg]");
  btnAlb.addEventListener("click", openModalAlb);
  const btnOde = document.querySelector("[data-btn=Odense]");
  btnOde.addEventListener("click", openModalOde);
  const btnAah = document.querySelector("[data-btn=Aahrus]");
  btnAah.addEventListener("click", openModalAah);

  get();
}

function get() {
  console.log(baseLink + "noah-groups");
  fetch(baseLink + "noah-groups", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7ef096cac6621685acbbb6",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(e => {
      // console.log(e);
      groupsArr = e;
      // console.log(groupsArr);
      groupsArr.forEach(displayGroups);
    });
}

function displayGroups(group) {
  // console.log(group);

  const clone = document.querySelector("template").content.cloneNode(true);
  // console.log(clone);

  const dataFields = clone.querySelectorAll("[data-field]");
  console.log(group);

  clone.querySelector(".one-slide").dataset.city = group.City;

  dataFields.forEach(element => {
    const property = element.dataset.field;
    if (element.dataset.field === "Team") {
      element.innerHTML = group[property];
      const ul = element.children[0];
      ul.classList.add("group-team");
    } else if (element.dataset.field === "Image") {
      element.style.backgroundImage =
        "url(https://anime-8835.restdb.io/media/" +
        group[property] +
        "?key=5c7ef096cac6621685acbbb6)";
    } else {
      element.textContent = group[property];
    }
  });
  document.querySelector("[data-list=groups]").appendChild(clone);
}

// function hideSlides() {
//   const databtn = document.querySelectorAll("[data-btn]");
//   databtn.forEach(btn => {
//     console.log(dataset.city === "Copenhagen");
//     console.log(btn.dataset.btn);

//     // if(btn.dataset.btn === ")
//   });
// }

function closeGroupModal() {
  groupModal.style.display = "none";
}

function openModalCph() {
  groupModal.style.display = "block";

  title.textContent = "Copenhagen";

  const swiper = new Swiper(".swiper-container", {
    spaceBetween: 27,
    slidesPerView: 1.3
  });

  
}

function openModalAlb() {
  groupModal.style.display = "block";
  title.textContent = "Alborg";

  const swiper = new Swiper(".swiper-container", {
    spaceBetween: 27,
    slidesPerView: 1.3
  });
}

function openModalOde() {
  groupModal.style.display = "block";
  title.textContent = "Odense";

  const swiper = new Swiper(".swiper-container", {
    spaceBetween: 27,
    slidesPerView: 1.3
  });
}

function openModalAah() {
  groupModal.style.display = "block";
  title.textContent = "Aahrus";

  const swiper = new Swiper(".swiper-container", {
    spaceBetween: 27,
    slidesPerView: 1.3
  });
}
