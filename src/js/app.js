import { isWebp } from "./components/webp.js";

document.addEventListener("DOMContentLoaded", function () {
  const headerSwiper = document.querySelector("#header-swiper");
  if (headerSwiper) {
    const swiper = new Swiper("#header-swiper", {
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: ".special-button-next",
        prevEl: ".special-button-prev",
      },
    });
  }

  isWebp();
});
