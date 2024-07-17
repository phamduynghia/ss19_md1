const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const main = document.getElementById("main");
square1.onmouseover = () => {
  setTimeout(() => {
    main.style.background = "brown";
  }, 1000);
};
square2.onmouseover = () => {
  setTimeout(() => {
    main.style.background = "rgb(35, 180, 49)";
  }, 1000);
};

square3.onmouseover = () => {
  setTimeout(() => {
    main.style.background = "rgb(239, 213, 19)";
  }, 1000);
};