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
console.log(form.elements);

form.addEventListener("submit", e => {
  form.elements.submit.disabled = true; //don't let the user click second time
  console.log(e);
  e.preventDefault(); //dot let the event reload page
  const obj = {
    UserName: form.elements.firstName.value,
    UserEmail: form.elements.email.value,
    UserProfessionArea: form.elements.profession.value
  };
  console.log(obj);
  post(obj);
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
      // const acountComplete = document.querySelector("#account-created");
      // acountComplete.classList.add("appearArticle");
      // const form = document.querySelector("#acount-form");
      // form.style.transform = "translate3d(0, 0, 0)";
      // form.classList.add("hideArticle");
    });
}
