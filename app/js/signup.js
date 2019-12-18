"use strict";

const form = document.querySelector("form");

//function window event listener when load page function init
window.addEventListener("DOMContentLoaded", init);

function init() {
  const signupArrow = document.querySelector("[data-btn=arrow]");
  signupArrow.addEventListener("click", changeToProfile);
}

function changeToProfile(event) {
  event.preventDefault();
  const title = document.querySelector("[data-title=signUp]");
  title.textContent = "Profile";
  const signUp = document.querySelector("[data-form=signUp]");
  signUp.classList.add("moveSingUp");
  const profile = document.querySelector("[data-form=profile]");
  profile.classList.add("moveProfile");
}


form.addEventListener("submit", e => {
  form.elements.submit.disabled = true; //don't let the user click second time

  e.preventDefault(); //dot let the event reload page
  const obj = {
    UserName: form.elements.firstName.value,
    UserEmail: form.elements.email.value,
    UserProfessionArea: form.elements.profession.value
  };
  // console.log(obj);
  post(obj);
});

const formList = document.querySelectorAll("input");
formList.forEach(element => {
  // console.log(element);
  element.addEventListener("blur", e => {
    if (element.checkValidity()) {
      element.style.boxShadow = "0px 0px 0px 0px transparent";
    } else {
      element.style.boxShadow = "4px 4px 0px 4px rgba(244,161,0,1)";
    }
  });
});

function post(obj) {
  fetch("https://anime-8835.restdb.io/rest/noah-volunteers", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7ef096cac6621685acbbb6",
      "cache-control": "no-cache"
    },
    body: JSON.stringify(obj)
  })
    .then(res => res.json())
    .then(data => {
      const signUpModal = document.querySelector(".modal-info");
      signUpModal.style.visibility = "visible";
    });
}
