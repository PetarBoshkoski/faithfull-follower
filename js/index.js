import { createCircle } from "./elements.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initFunction();
  }
});

const initFunction = () => {
  for (let i = 0; i < 15; i++) {
    let circleCreate = createCircle();
    addElementToDocument(circleCreate);
  }

  let circle = getElement("circle");
  moveElement(circle);
};
const addElementToDocument = (element) => {
  let main = getMainSection();
  main.appendChild(element);
};

const getMainSection = () => {
  let main = document.getElementsByClassName("main")[0];
  return main;
};

const getElement = (elementClass) => {
  // Just pass the element ID as an argument to this function
  let element = document.getElementsByClassName(elementClass);
  return element;
};

const moveElement = (element) => {
  document.body.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    gsap.to(element, {
      x: x,
      y: y,
      stagger: 0.1,
      duration: 0.1,
      ease: "elastic",
      opacity: 0.5,
    });
  });
};
