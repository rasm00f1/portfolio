"use strict";

import { moreInfoAnim, closeMoreInfoAnim, initialAnimations, infoBoxFadeIn } from "./indexanim.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  buttonListeners();
  initialAnimations();
  writeText();
}

function buttonListeners() {
  document.querySelector("#about_btn").addEventListener("click", moreInfo);
  const projectInfoBox = document.querySelector(".info_box_project");
  const projectButtons = document.querySelectorAll(".project_btn");
  projectButtons.forEach((button) => {
    button.addEventListener("click", showMoreInfo);
  });

  function showMoreInfo(event) {
    const closeBtn = document.querySelector(".info_box_project .close_btn");
    closeBtn.classList.remove("hidden");
    closeBtn.addEventListener("click", closeInfoBox);
    moreInfoAnim(projectInfoBox);
    function closeInfoBox() {
      closeBtn.classList.add("hidden");
      closeMoreInfoAnim(projectInfoBox);
      closeBtn.removeEventListener("click", closeInfoBox);
    }

    if (event.target === projectButtons[0]) {
      const content = document.querySelector(".project_first");
      content.classList.remove("hidden");
      infoBoxFadeIn(content);
      console.log("Hehe");
    } else if (event.target === projectButtons[1]) {
      moreInfoAnim(projectInfoBox);
      console.log("two");
    } else if (event.target === projectButtons[2]) {
      moreInfoAnim(projectInfoBox);
      console.log("three");
    } else if (event.target === projectButtons[3]) {
      moreInfoAnim(projectInfoBox);
      console.log("four");
    }
  }
}

function moreInfo() {
  const infoBox = document.querySelector(".info_box");
  const closeBtn = document.querySelector(".close_btn");
  closeBtn.classList.remove("hidden");
  closeBtn.addEventListener("click", closeInfoBox);
  moreInfoAnim(infoBox);

  function closeInfoBox() {
    closeBtn.classList.add("hidden");
    closeMoreInfoAnim(infoBox);
    closeBtn.removeEventListener("click", closeInfoBox);
  }
}

function writeText() {
  const inputArray = document.querySelector(".txt_animation_container").textContent.split("");
  const container = document.querySelector(".txt_animation_container");
  document.querySelector(".txt_animation_container").textContent = "";

  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    const documentLetterElement = document.createElement("span");
    if (element === " ") {
      documentLetterElement.innerHTML = "&nbsp;";
      documentLetterElement.classList.add("letter");
      documentLetterElement.style.setProperty("--delay", i);
      container.append(documentLetterElement);
    } else {
      documentLetterElement.textContent = element;
      documentLetterElement.classList.add("letter");
      documentLetterElement.style.setProperty("--delay", i);
      documentLetterElement.addEventListener("mouseover", changeColor);
      container.append(documentLetterElement);
    }
    function changeColor(event) {
      const chosenLetter = event.target;
      chosenLetter.style.color = getRandomColor();
    }
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${b},${g})`;
}
