function pintar(elementId, color = "black") {
  elemento = document.querySelector("#" + elementId);
  if (elemento.style.backgroundColor === "")
    elemento.style.backgroundColor = color;
  else elemento.style.backgroundColor = "";
}
let color = "";
document.addEventListener("keydown", function (event) {
  document.getElementById("key").style.backgroundColor = "white";
  if (event.key === "a") {
    color = "pink";
    document.getElementById("key").style.backgroundColor = "pink";
  } else if (event.key === "s") {
    color = "orange";
    document.getElementById("key").style.backgroundColor = "orange";
  } else if (event.key === "d") {
    color = "lightblue";
    document.getElementById("key").style.backgroundColor = "lightblue";
  } else {
    color = "";
    document.getElementById("key").style.backgroundColor = "white";
    document.getElementById("key").style.border = "1px solid black";
  }
})