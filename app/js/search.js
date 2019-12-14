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
  console.log(volunteer);

  dataFields.forEach(element => {
    const property = element.dataset.field;
    if (element.dataset.field === "User Image") {
      element.src =
        "url(https://anime-8835.restdb.io/media/" +
        volunteer[property] +
        "?key=5c7ef096cac6621685acbbb6)";
    } else {
      element.textContent = volunteer[property];
    }
  });
  document.querySelector("[data-list=volunteers]").appendChild(clone);
}
