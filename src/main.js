import "./style.css";

import { animate, stagger, inView, scroll, timeline } from "motion";

const body = document.querySelector("body");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.documentElement.scrollTop > 600 ||
    document.documentElement.scrollTop > 3000
  ) {
    body.classList.add("flicker-1");
  } else {
    body.classList.remove("flicker-1");
  }
}

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  console.log(parallaxcontainer);

  const elementderskalparallaxes = parallaxcontainer.querySelector("h1");

  const elementderskalparallaxes2 = parallaxcontainer.querySelector("p");

  console.log(elementderskalparallaxes);

  scroll(animate(elementderskalparallaxes, { y: [250, 900] }), {
    target: elementderskalparallaxes,
  });

  scroll(animate(elementderskalparallaxes2, { y: [200, 900] }), {
    target: elementderskalparallaxes2,
  });
});

document
  .querySelectorAll(".parallaxcontainer2")
  .forEach((parallaxcontainer) => {
    console.log(parallaxcontainer);

    const elementderskalparallaxes = parallaxcontainer.querySelector("#fakta1");
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector("#fakta2");
    const elementderskalparallaxes3 =
      parallaxcontainer.querySelector("#fakta3");

    scroll(animate(elementderskalparallaxes, { y: [300, 900] }), {
      target: elementderskalparallaxes,
    });
    scroll(animate(elementderskalparallaxes2, { y: [400, 900] }), {
      target: elementderskalparallaxes2,
    });
    scroll(animate(elementderskalparallaxes3, { y: [500, 900] }), {
      target: elementderskalparallaxes3,
    });
  });
