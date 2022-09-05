const header = document.getElementById("gb");
header.classList.add("hidden");

const footer = document.getElementsByClassName("o3j99");
footer[4].classList.add("hidden");

const text = document.getElementById("SIvCob");
if (text.innerText == undefined) {
  throw new Error("Af");
} else {
  text.innerHTML = "";
}
