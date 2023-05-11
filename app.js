const body = document.getElementsByTagName("body");
console.log(body);
const dark = document.getElementById("dark");
console.log(dark);
const light = document.getElementById("light");
console.log(light);

const darkIcon = document.getElementById("dark__icon");
console.log(darkIcon);
const lightIcon = document.getElementById("light__icon");
console.log(lightIcon);

dark.addEventListener("click", () => {
  darkBody();

});

light.addEventListener("click", () => {
  lightBody();
});

function darkBody() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  dark.style.backgroundColor = "red";
  darkIcon.style.color = "black";
  light.style.backgroundColor = "white";
  lightIcon.style.color = "black";
}

function lightBody() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  dark.style.backgroundColor = "black";
  darkIcon.style.color = "white";
  light.style.backgroundColor = "red";
  lightIcon.style.color = "white";
 
}
