"use strict";

var swiper = new Swiper(".s1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/* var swiperTwo = new Swiper(".s2", {
  navigation: {
    pagination: {
      el: ".swiper-pagination"
    },
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); */

// Get the modal
let modal = document.getElementById("mapModalBackground");

// Get the img that opens the modal
const btn = document.querySelectorAll("#one, #five, #ten");
console.log(btn);

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.forEach(
  btn =>
    (btn.onclick = function() {
      modal.style.display = "block";

      var swiperTwo = new Swiper(".s2", {
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    })
);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* window.onscroll = function() {
  scrollFunction();
}; */

var swiperBox = new Swiper(".s3", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  /* loop: true,
  loopFillGroupWithBlank: true, */
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique"
  }
});
