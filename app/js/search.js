"use strict";

let volunteerArr;

window.addEventListener("DOMContentLoaded", init);

function init() {
  get();
}

function get() {
  // console.log(baseLink + "noah-volunteers");
  fetch(baseLink + "noah-volunteers", {
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
      volunteerArr = e;
      console.log(volunteerArr);
      volunteerArr.forEach(displayVolunteers);
    });
}

function displayVolunteers(volunteer) {
  const clone = document.querySelector("template").content.cloneNode(true);
  // console.log(clone);

  const dataFields = clone.querySelectorAll("[data-field]");
  // console.log(volunteer);

  dataFields.forEach(element => {
    const property = element.dataset.field;
    // console.log(element.dataset.field === "User skills");

    if (element.dataset.field === "User-image") {
      element.src =
        "https://anime-8835.restdb.io/media/" +
        volunteer[property] +
        "?key=5c7ef096cac6621685acbbb6";
    } else if (
      element.dataset.field === "UserSkills" ||
      element.dataset.field === "UserGroup"
    ) {
      element.children[0].textContent = volunteer[property][0];
      element.children[1].textContent = volunteer[property][1];
      console.log(element.children);
    } else {
      element.textContent = volunteer[property];
    }
  });
  document.querySelector("[data-list=volunteers]").appendChild(clone);
}
