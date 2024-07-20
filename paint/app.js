let canvas = document.querySelector(".canvas");
let sizes = document.querySelectorAll(".size");
let colors = document.querySelectorAll(".color");
let size1 = false;
let size2 = false;
let size3 = false;
let size4 = false;

let color1 = false;
let color2 = false;
let color3 = false;
let color4 = false;

sizes.forEach((item, setItem) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("size1")) {
      size1 = true;
      size2 = false;
      size3 = false;
      size4 = false;
    } else if (e.target.classList.contains("size2")) {
      size1 = false;
      size2 = true;
      size3 = false;
      size4 = false;
    } else if (e.target.classList.contains("size3")) {
      size1 = false;
      size2 = false;
      size3 = true;
      size4 = false;
    } else {
      size1 = false;
      size2 = false;
      size3 = false;
      size4 = true;
    }
  });
});

colors.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("bg-danger")) {
      color1 = true;
      color2 = false;
      color3 = false;
      color4 = false;
    } else if (e.target.classList.contains("bg-warning")) {
      color1 = false;
      color2 = true;
      color3 = false;
      color4 = false;
    } else if (e.target.classList.contains("bg-success")) {
      color1 = false;
      color2 = false;
      color3 = true;
      color4 = false;
    } else {
      color1 = false;
      color2 = false;
      color3 = false;
      color4 = true;
    }
  });
});

let isPainting = false;

canvas.addEventListener("mousedown", () => {
  isPainting = true;
});

canvas.addEventListener("mouseup", () => {
  isPainting = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPainting) {
    let { clientX, clientY } = e;
    let bala = document.createElement("div");
    canvas.appendChild(bala);
    bala.classList.add("brush");

    if (size1) {
      bala.style.width = "20px";
      bala.style.height = "20px";
    } else if (size2) {
      bala.style.width = "30px";
      bala.style.height = "30px";
    } else if (size3) {
      bala.style.width = "40px";
      bala.style.height = "40px";
    } else {
      bala.style.width = "50px";
      bala.style.height = "50px";
    }

    if (color1) {
      bala.style.backgroundColor = "red";
    } else if (color2) {
      bala.style.backgroundColor = "yellow";
    } else if (color3) {
      bala.style.backgroundColor = "green";
    } else {
      bala.style.backgroundColor = "blue";
    }

    bala.style.transform = `translate(${clientX - 80}px,${clientY - 200}px)`;
  }
});
