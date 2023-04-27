import "./index.css";
import Alpine from "alpinejs";
import Glide from "@glidejs/glide";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

window.Alpine = Alpine;

Alpine.data("imgslider", () => ({
  glide: null,
  glideOptions: {
    type: "slider",
    startAt: 0,
    bound: true,
    perView: 6,
    rewind: false,
    gap: 15,
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

Alpine.data("doubleThumbRange", () => ({
  vals: [],
  slider: null,
  init() {
    this.slider = document.querySelector("#double-thumb-range");
    noUiSlider.create(this.slider, {
      start: [0, 5759],
      connect: true,
      range: {
        min: 0,
        max: 5759,
      },
    });
    this.slider.noUiSlider.on("update", (values, handle) => {
      this.setVals(values);
    });
  },

  setVals() {
    // let el = document.querySelector("#double-thumb-range .noUi-handle-lower");
    // this.leftVal = `£${el.ariaValueNow}`;
    this.vals = this.slider.noUiSlider.get();
  },
}));

Alpine.start();
