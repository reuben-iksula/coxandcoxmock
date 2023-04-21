import "./index.css";
import Alpine from "alpinejs";
import Glide from "@glidejs/glide";

window.Alpine = Alpine;

Alpine.data("imgslider", () => ({
  glideOptions: {
    type: "slider",
    startAt: 0,
    bound: true,
    perView: 6,
    rewind: false,
    gap: 10,
    breakpoints: {
      768: {
        perView: 3,
      },
    },
  },

  init() {
    const glideElement = document.querySelector(".glide");
    this.glide = new Glide(glideElement, this.glideOptions);
    this.glide.mount();
  },
}));

Alpine.start();
