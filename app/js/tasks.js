"use strict";

let taskArr;
let activitiesArr;
let ideasArr;

window.addEventListener("DOMContentLoaded", init);

function init() {
  get();
}

function get() {
  // console.log(baseLink + "noah-volunteers");
  fetch(baseLink + "noah-tasks", {
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
      taskArr = e;
      console.log(taskArr);
      taskArr.forEach(displayTasks);
    });

  fetch(baseLink + "noah-activities", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7ef096cac6621685acbbb6",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(e => {
      activitiesArr = e;
      console.log(activitiesArr);
      activitiesArr.forEach(displayActivities);
    });

  fetch(baseLink + "noah-ideas", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7ef096cac6621685acbbb6",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(e => {
      ideasArr = e;
      console.log(ideasArr);
      ideasArr.forEach(displayIdeas);
    });
}

function displayTasks(task) {
  const clone = document
    .querySelector("[data-template=tasks]")
    .content.cloneNode(true);

  const dataFields = clone.querySelectorAll("[data-task]");

  dataFields.forEach(element => {
    const property = element.dataset.task;

    element.textContent = task[property];
  });
  document.querySelector("[data-list=tasks]").appendChild(clone);
}

function displayActivities(activ) {
  //   console.log(activ);
  const clone = document
    .querySelector("[data-template=activities]")
    .content.cloneNode(true);

  const dataFields = clone.querySelectorAll("[data-activ]");

  dataFields.forEach(element => {
    const property = element.dataset.activ;

    if (element.dataset.activ === "Place") {
      element.href = activ[property];
    } else {
      element.textContent = activ[property];
    }
  });
  document.querySelector("[data-list=activities]").appendChild(clone);
}
