let shareBtn = document.querySelector(".article__icon");
let Share = document.querySelector(".share");

console.log(shareBtn);
console.log(Share);

shareBtn.addEventListener("click", function () {
  shareBtn.classList.toggle("change");
  Share.classList.toggle("change");
});