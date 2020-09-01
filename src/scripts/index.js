import "./themeChanger";
import "./amIOnline";
import { animatePage, skipAnimation } from "./animationScripts";

import '../style/style.css'
import '../style/header.css'
  //Setting up elements for being animated. You need to have the original text stored somewhere else as reference, and you need a
  // hasBeenAnimated attribute set to false

  const titles = document.querySelectorAll("h1");
  const p = document.querySelectorAll(".description p, .about-me p");
  const pages = document.querySelectorAll(".page");

  titles.forEach((element) => {
    element.finalText = element.textContent;
    element.finalINNERHTML = element.innerHTML;
    element.hasBeenAnimated = false;
  });

  p.forEach((element) => {
    element.finalText = element.textContent;
    element.finalINNERHTML = element.innerHTML;
    element.hasBeenAnimated = false;
  });

  //skip animation on click
  pages.forEach((element) => {
    element.hasBeenAnimated = false;
    element.onclick = () => {
      skipAnimation(element);
    };
  });

  //this check if an element is in the view port. This is used to trigger animations
  function isInView(el) {
    let box = el.getBoundingClientRect();

    const padding = window.innerHeight * 0.25;
    return box.top < window.innerHeight - padding && box.bottom >= 0;
  }

  function animatePageOnViewPort(elements) {
    for (let element of elements) {
      if (isInView(element) && element.hasBeenAnimated == false) {
        element.hasBeenAnimated = true;
        animatePage(element);
      }
    }
  }

  // this runs on opening the page. It animates whatever page is currently in the viewport
  animatePageOnViewPort(pages);

  // animate page on viewport everytiem you scroll.
  // This function will trigger a lot of times, but it wont cause any harm because it checks if the hasBeenAnimated atribute is false
  // before doing anything.
  window.addEventListener("scroll", () => {
    animatePageOnViewPort(pages);
  });

  const howItWorks = document.querySelectorAll(".small");

  howItWorks.forEach((element) => {
// togglefunction to show and hide the how it works panel
// this function toggles the NEXT siblin of a given element

    element.onclick = () => {
      const nextSibling = element.nextElementSibling;
      let pressed = element.getAttribute('aria-pressed') == "true";
      element.setAttribute("aria-pressed", !pressed);

      
      if (!pressed) {
        element.nextElementSibling.classList.remove("hidden");
      } else {
        element.nextElementSibling.classList.add("hidden");
      }
    };
  });

