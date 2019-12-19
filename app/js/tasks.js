"use strict";

let taskArr;
let activitiesArr;
let ideasArr;
const btnAdd = document.querySelector("[data-btnAdd=add]");
const modalText = document.querySelector(".modal-info p");

window.addEventListener("DOMContentLoaded", init);

// function start when document loads
function init() {
  document
    .querySelector("[data-btn=tasks]")
    .addEventListener("click", getTasks);

  document
    .querySelector("[data-btn=activities]")
    .addEventListener("click", getActiv);

  document
    .querySelector("[data-btn=ideas]")
    .addEventListener("click", getIdeas);
  get();
}

//function to fetch content
function get() {
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
      //   console.log(taskArr);
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
      //   console.log(activitiesArr);
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
      //   console.log(ideasArr);
      ideasArr.forEach(displayIdeas);
    });
}

//function to filter tasks list when click on button
function getTasks() {
  btnAdd.style.display = "none";
  const btnList = document.querySelectorAll("[data-btn]");
  btnList.forEach(btn => {
    if (btn.dataset.btn === "tasks") {
      btn.style.backgroundColor = "#f4a100";
      btn.style.borderColor = "#f4a100";
    } else {
      btn.style.backgroundColor = "#1c7b5b";
      btn.style.borderColor = "#1c7b5b";
    }
  });

  const ulList = document.querySelectorAll("[data-list]");
  ulList.forEach(ul => {
    if (ul.dataset.list === "tasks") {
      ul.style.display = "grid";
    } else {
      ul.style.display = "none";
    }
  });

  modalText.textContent =
    "Here you can apply to a task given by Noah members. After that, you will receive an email with more details of the work. By clicking in the heart you can save in favorites";
}

//function to filter activities list when click on button
function getActiv() {
  btnAdd.style.display = "none";
  const btnList = document.querySelectorAll("[data-btn]");
  btnList.forEach(btn => {
    if (btn.dataset.btn === "activities") {
      btn.style.backgroundColor = "#f4a100";
      btn.style.borderColor = "#f4a100";
    } else {
      btn.style.backgroundColor = "#1c7b5b";
      btn.style.borderColor = "#1c7b5b";
    }
  });

  const ulList = document.querySelectorAll("[data-list]");
  ulList.forEach(ul => {
    if (ul.dataset.list === "activities") {
      ul.style.display = "grid";
    } else {
      ul.style.display = "none";
    }
  });

  modalText.textContent =
    "Here you can see and join NOAH activities during the whole year. If you are in doubt, click just on the heart icon and save on your favourites list.";
}

//function to filter ideas list when click on button
function getIdeas() {
  btnAdd.style.display = "flex";
  const btnList = document.querySelectorAll("[data-btn]");
  btnList.forEach(btn => {
    if (btn.dataset.btn === "ideas") {
      btn.style.backgroundColor = "#f4a100";
      btn.style.borderColor = "#f4a100";
    } else {
      btn.style.backgroundColor = "#1c7b5b";
      btn.style.borderColor = "#1c7b5b";
    }
  });

  const ulList = document.querySelectorAll("[data-list]");
  ulList.forEach(ul => {
    if (ul.dataset.list === "ideas") {
      ul.style.display = "grid";
    } else {
      ul.style.display = "none";
    }
  });

  modalText.textContent =
    "Here you have ideas from volunteers that you can vote for future activities or tasks. You can also save on favorites with the heart icon and add your own idea by clicking in the plus button.";
}

//function to display ideas content
function displayIdeas(idea) {
  //   console.log(idea);
  //   ideasArr = [];
  const clone = document
    .querySelector("[data-template=ideas]")
    .content.cloneNode(true);

  const dataFields = clone.querySelectorAll("[data-idea]");

  dataFields.forEach(element => {
    const property = element.dataset.idea;

    element.textContent = idea[property];
  });
  document.querySelector("[data-list=ideas]").appendChild(clone);
  favoriteClick();
  //   console.log(ideasArr);
}

//function to display tasks content
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
  favoriteClick();
  //   console.log(taskArr);
}

//function to display activities content
function displayActivities(activ) {
  //   activitiesArr = [];
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
  favoriteClick();
  //   console.log(activitiesArr);
}
