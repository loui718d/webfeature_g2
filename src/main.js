import "./style.css";

import { animate, stagger, inView, scroll, timeline } from "motion";
import { doc } from "prettier";

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

document
  .querySelectorAll(".parallaxcontainer2")
  .forEach((parallaxcontainer) => {
    console.log(parallaxcontainer);

    const elementderskalparallaxes6 =
      parallaxcontainer.querySelector("#historie1");

    scroll(animate(elementderskalparallaxes6, { y: [300, 2000] }), {
      target: elementderskalparallaxes6,
    });
  });

document
  .querySelectorAll(".parallaxcontainer3")
  .forEach((parallaxcontainer) => {
    console.log(parallaxcontainer);

    const elementderskalparallaxes7 =
      parallaxcontainer.querySelector("#historie2");
    const elementderskalparallaxes8 =
      parallaxcontainer.querySelector("#historie3");

    scroll(animate(elementderskalparallaxes7, { y: [100, 2500] }), {
      target: elementderskalparallaxes7,
    });
    scroll(animate(elementderskalparallaxes8, { y: [100, 400] }), {
      target: elementderskalparallaxes8,
    });
  });

document
  .querySelectorAll(".parallaxcontainer4")
  .forEach((parallaxcontainer) => {
    console.log(parallaxcontainer);

    const elementderskalparallaxes9 = parallaxcontainer.querySelector("button");

    scroll(
      animate(elementderskalparallaxes9, { y: [100, -100], x: [-300, 400] }),
      {
        target: elementderskalparallaxes9,
      }
    );
  });

document
  .querySelectorAll(".parallaxcontainer5")
  .forEach((parallaxcontainer) => {
    console.log(parallaxcontainer);

    const elementderskalparallaxes10 =
      parallaxcontainer.querySelector("#skillevej1");
    const elementderskalparallaxes11 =
      parallaxcontainer.querySelector("#skillevej1");

    scroll(animate(elementderskalparallaxes10, { y: [200, 100] }), {
      target: elementderskalparallaxes10,
    });

    scroll(animate(elementderskalparallaxes11, { y: [300, 100] }), {
      target: elementderskalparallaxes11,
    });
  });

// crossfade

// const checkpoint = 200;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = 1 - currentScroll / checkpoint;
//   } else {
//     opacity = 0;
//   }
//   document.querySelector(".front").style.opacity = opacity;
// });

//Crossfade
// const apperOptions = { threshold: 1, rootMargin: "0px 0px -200px 0px " };
// const faders = document.querySelectorAll(".fade-in");

// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// apperOptions);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fader);
// });

const frontPic = document.querySelector(".back");
const backPic = document.querySelector(".front");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("hide", entry.isIntersecting);
    });
    console.log(entries);
  },
  {
    threshold: 0.5,
  }
);
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
    console.log(entries);
  },
  {
    threshold: 0.5,
  }
);

observer.observe(frontPic);
observer2.observe(backPic);

const observerFame = document.querySelector(".fame");

const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      document.querySelector("body").classList.toggle("flicker-1");
    });
    console.log(entries);
  },
  {
    threshold: 0.5,
  }
);

observer3.observe(observerFame);

const observerStock = document.querySelector(".stock");

const observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      document.querySelector("body").classList.toggle("flicker-1");
    });
    console.log(entries);
  },
  {
    threshold: 0.5,
  }
);

observer4.observe(observerStock);

const observerSkillevej = document.querySelector(".skillevej");

const observer5 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      document.querySelector("body").classList.toggle("flicker-1");
    });
    console.log(entries);
  },
  {
    threshold: 0.5,
  }
);

observer5.observe(observerSkillevej);

// split effekt

const observerSplit1 = document.querySelector(".loader");

const observer6 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      document.querySelector("body").classList.toggle("animate");
      document.querySelector("body").classList.toggle("animate2");
    });
    console.log(entries);
  },
  {
    threshold: 0.5,
  }
);

observer6.observe(observerSplit1);
