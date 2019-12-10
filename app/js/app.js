"use strict";

//function window event listener when load page function init
window.addEventListener("DOMContentLoaded", init);

function init() {
  const signupArrow = document.querySelector("[data-btn=arrow]");
  signupArrow.addEventListener("click", changeToProfile);
}

function changeToProfile(event) {
  console.log("work");
  event.preventDefault();
  const title = document.querySelector("[data-title=signUp]");
  title.textContent = "Profile";
  const signUp = document.querySelector("[data-form=signUp]");
  signUp.classList.add("moveSingUp");
  const profile = document.querySelector("[data-form=profile]");
  profile.classList.add("moveProfile");
  //   profile.style.display = "grid";
}
