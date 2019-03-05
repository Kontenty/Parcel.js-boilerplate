import $ from "jquery";
import "popper.js";
import "bootstrap";

/* image defer */
const initImgDefer = function() {
  const imgDefer = document.getElementsByTagName("img");
  for (let i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
      imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
  }
};

window.onload = function() {
  initImgDefer();
};

$("#slider").on(input, function() {
  const val = $("#slider").value();
  const img = $("#track-img");
  img.css({ filter: "blur(" + val / 5 + "px)" });
});
