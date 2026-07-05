// polyfill
window.requestAnimationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

var speed = 4000;
(function currencySlide() {
  var currencyPairWidth = any(".slideItem:first-child").outerWidth();
   any(".slideContainer").animate(
    { marginLeft: -currencyPairWidth },
    speed,
    "linear",
    function () {
      any(this)
        .css({ marginLeft: 0 })
        .find("li:last")
        .after(any(this).find("li:first"));
    },
  );
  requestAnimationFrame(currencySlide);
})();
