var element = document.createElement("div"),
    text = "<p>kilroy was here</p>";

text += "<p>";
text += navigator.userAgent;
text += "</p>";

element.innerHTML = text;
document.getElementsByTagName("main")[0].appendChild(element);

window.addEventListener("load", function(e) {
  setInterval(function() {
    document.body.classList.toggle("tick");
  }, 1E3);
});
