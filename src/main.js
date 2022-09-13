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

document
  .querySelectorAll(".parallaxcontainer2")
  .forEach((parallaxcontainer) => {
    console.log(parallaxcontainer);

    const elementderskalparallaxes = parallaxcontainer.querySelector("#fakta1");
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector("#fakta2");
    const elementderskalparallaxes3 =
      parallaxcontainer.querySelector("#fakta3");

    scroll(animate(elementderskalparallaxes, { y: [1000, 2000] }), {
      target: elementderskalparallaxes,
    });
    scroll(animate(elementderskalparallaxes2, { y: [100, 700] }), {
      target: elementderskalparallaxes2,
    });
    scroll(animate(elementderskalparallaxes3, { y: [-100, 500] }), {
      target: elementderskalparallaxes3,
    });
  });
