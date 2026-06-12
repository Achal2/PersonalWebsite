const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const navToggle = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector("#navbarNav");
const range = 40;

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1); // thanks @alice-mx

let timeout;
if (cards) {
  document.addEventListener(
    "mousemove",
    ({ x, y }) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

        [].forEach.call(images, (image) => {
          image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        });

        [].forEach.call(backgrounds, (background) => {
          background.style.backgroundPosition = `${xValue * 0.45}px ${
            -yValue * 0.45
          }px`;
        });
      });
    },
    false
  );
}
