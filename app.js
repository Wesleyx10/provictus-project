const open = document.querySelector(".open");
const links = document.querySelector(".links");
const close = document.querySelector(".close");
const netflix = document.querySelector("#netflix");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  links.style.display = "flex";
});
close.addEventListener("click", () => {
  open.style.display = "block";
  close.style.display = "none";
  links.style.display = "none";
});

netflix.addEventListener("click", () => {
  window.location.href =
    "https://www.netflix.com/gb/title/81437051?s=i&trkid=264164088&vlang=en";
});
