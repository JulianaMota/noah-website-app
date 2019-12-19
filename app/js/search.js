"use strict";

let volunteerArr;

window.addEventListener("DOMContentLoaded", init);

// function start when document loads
function init() {
  get();
}

//function to fetch content
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
      // console.log(volunteerArr);
      volunteerArr.forEach(displayVolunteers);
    });
}

//display all volunteers
function displayVolunteers(volunteer) {
  const clone = document.querySelector("template").content.cloneNode(true);
  // console.log(clone);

  const dataFields = clone.querySelectorAll("[data-field]");
  // console.log(volunteer);

  dataFields.forEach(element => {
    const property = element.dataset.field;
    if (volunteer[property] === undefined) {
      // console.log(element);
      element.style.display = "none";
    }

    if (element.dataset.field === "UserImage") {
      // console.log(volunteer[property] === undefined);
      if (volunteer[property] === undefined) {
        element.style.display = "block";
      } else {
        element.src =
          "https://anime-8835.restdb.io/media/" +
          volunteer[property] +
          "?key=5c7ef096cac6621685acbbb6";
      }
    } else if (
      element.dataset.field === "UserSkills" ||
      element.dataset.field === "UserGroup"
    ) {
      if (volunteer[property] === undefined) {
        element.textContent = "none";
      } else {
        volunteer[property].forEach((name, i) => {
          element.children[i].textContent = name;
        });
      }
    } else {
      element.textContent = volunteer[property];
    }
  });
  document.querySelector("[data-list=volunteers]").appendChild(clone);
}
