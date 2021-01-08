const hoverElements = document.querySelectorAll(".HOVER");

hoverElements.forEach((element) => {
  const elementCircle = element.querySelector("span");
  const elementText = element.querySelector("div");
  setMouseOver(element, elementCircle);
  setMouseOver(elementText, elementCircle);
  setMouseOut(element, elementCircle);
});

function setMouseOver(element, elementCircle) {
  element.addEventListener("mouseover", (e) => {
    elementCircle.style.left = e.pageX - element.offsetLeft + "px";
    elementCircle.style.top = e.pageY - element.offsetTop + "px";
  });
}

function setMouseOut(element, elementCircle) {
  element.addEventListener("mouseout", (e) => {
    elementCircle.style.left = e.pageX - element.offsetLeft + "px";
    elementCircle.style.top = e.pageY - element.offsetTop + "px";
  });
}
