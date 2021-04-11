"use strict";

const infoBoxOpenAnim = { duration: 800, easing: "ease-out", fill: "forwards" };
const infoBoxCloseAnim = { duration: 800, easing: "ease-in", fill: "forwards" };
const infoBoxKeys = [
  { offset: 0, transform: "translateY(0)" },
  { offset: 1, transform: "translateY(-85vh)" },
];
const infoBoxCloseKeys = [
  { offset: 0, transform: "translateY(-85vh)" },
  { offset: 1, transform: "translateY(0)" },
];

export function moreInfoAnim(infoBox) {
  infoBox.animate(infoBoxKeys, infoBoxOpenAnim);
}

export function closeMoreInfoAnim(infoBox) {
  infoBox.animate(infoBoxCloseKeys, infoBoxCloseAnim);
}

export function initialAnimations() {
  gsap.set(document.querySelector(".self_portrait"), {
    transform: "translateY(-1000px)",
    transformOrigin: "top left",
  });

  gsap.to(document.querySelector(".self_portrait"), {
    transform: "translateY(0px)",
    transition: 1,
    transformOrigin: "top left",
  });

  gsap.set(document.querySelector(".top_nav"), {
    transform: "translateY(-5vh)",
    transformOrigin: "top left",
  });

  gsap.to(document.querySelector(".top_nav"), {
    transform: "translateY(0)",
    transition: 0.5,
    transformOrigin: "top left",
  });
}

const infoBoxFadeAnim = { duration: 800, easing: "ease-out", fill: "forwards" };
const infoBoxFadeInKeys = [
  { offset: 0, filter: "opacity(0)" },
  { offset: 1, filter: "opacity(1)" },
];

const infoBoxFadeOutKeys = [
  { offset: 0, filter: "opacity(1)" },
  { offset: 1, filter: "opacity(0)" },
];

export function infoBoxFadeIn(infoBoxContent) {
  infoBoxContent.animate(infoBoxFadeInKeys, infoBoxFadeAnim);
}
