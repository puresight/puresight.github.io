require('./polyfill-classlist.js')();
require('./M.js')();

window.addEventListener("load", function(e) {
  if (!M.ready) throw new Error("M not ready at window load");
  document.body.classList.remove("loading");
});
