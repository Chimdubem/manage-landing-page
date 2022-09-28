"use strict";

const sliderComponents = [...document.querySelectorAll(".slider-component")];
console.log(sliderComponents);
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

sliderComponents.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  console.log(containerDimensions);

  let containerWidth = `${containerDimensions.width / 3}`;
  console.log(containerWidth);

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

/////////////////////////////////////////////////////////////////////////////////////
// Mobile Navigation

const mobilenavOpen = document.querySelector(".btn-mobile-nav");
const tabnavClose = document.querySelector(".sslinks-close");
const displaymobileNav = document.querySelector(".sslinks");

mobilenavOpen.addEventListener("click", function () {
  displaymobileNav.style.display = "flex";
  mobilenavOpen.style.display = "none";
});

tabnavClose.addEventListener("click", function () {
  displaymobileNav.style.display = "none";
  mobilenavOpen.style.display = "block";
});

const hero = document.querySelector(".section-hero");
const features = document.querySelector(".section-features");
const slide = document.querySelector(".section-slider");
const simplify = document.querySelector(".section-simplify");
const footer = document.querySelector(".section-footer");

const clickOut = function () {
  if (
    displaymobileNav.style.display === "flex" &&
    mobilenavOpen.style.display === "none"
  ) {
    console.log("FREE TO PROCEED");
    displaymobileNav.style.display = "none";
    mobilenavOpen.style.display = "block";
  }
};

hero.addEventListener("click", clickOut);

features.addEventListener("click", clickOut);
slide.addEventListener("click", clickOut);
simplify.addEventListener("click", clickOut);
footer.addEventListener("click", clickOut);

/////////////////////////////////////////////////////////////////////////////////////
// Email Validation

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs

  const emailValue = email.value.trim();

  if (emailValue === "") {
    // show error
    //add error class
    setErrorFor(email, "Please set a valid email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please set a valid email");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // form-control
  const small = formControl.querySelector("small");

  // add message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
