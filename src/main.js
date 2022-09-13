import "./style.css";

import { animate, stagger, inView, scroll, timeline } from "motion";

const body = document.querySelector("body");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.documentElement.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
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

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  console.log(parallaxcontainer);

  const elementderskalparallaxes3 = parallaxcontainer.querySelector("#fakta1");
  const elementderskalparallaxes4 = parallaxcontainer.querySelector("#fakta2");
  const elementderskalparallaxes5 = parallaxcontainer.querySelector("#fakta3");

  scroll(animate(elementderskalparallaxes3, { y: [500, 1600] }), {
    target: elementderskalparallaxes3,
  });
  scroll(animate(elementderskalparallaxes4, { y: [600, 1800] }), {
    target: elementderskalparallaxes4,
  });
  scroll(animate(elementderskalparallaxes5, { y: [670, 2000] }), {
    target: elementderskalparallaxes5,
  });
});
