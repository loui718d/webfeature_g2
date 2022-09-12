import "./style.css";

import { animate, stagger, inView, scroll, timeline } from "motion";

const body = document.querySelector("body");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    body.classList.add("flicker-1");
  } else {
    body.classList.remove("flicker-1");
  }
}

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  console.log(parallaxcontainer);

  const elementderskalparallaxes = parallaxcontainer.querySelector("p");

  const elementderskalparallaxes2 = parallaxcontainer.querySelector("h1");

  console.log(elementderskalparallaxes);

  scroll(animate(elementderskalparallaxes, { y: [50, -50] }), {
    target: elementderskalparallaxes,
  });

  scroll(animate(elementderskalparallaxes2, { y: [20, -600] }), {
    target: elementderskalparallaxes2,
  });
});
