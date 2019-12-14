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

function displayVolunteers(volunteer) {}
