const toggleButton = document.getElementById("toggle-button");
const bai5Div = document.getElementById("bai5");

bai5Div.addEventListener("click", () => {
  console.log(bai5Div.classList.contains("bai5-dark")); // false
  if (bai5Div.classList.contains("bai5-dark")) {
    // true
    bai5Div.classList.remove("bai5-dark");
  } else {
    bai5Div.classList.add("bai5-dark");
  }
});

