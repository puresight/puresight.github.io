/**
 * clock
 */

window.addEventListener("load", function(e) {
  setInterval(function() {
    document.body.classList.toggle("tick");
  }, 1E3);
});
