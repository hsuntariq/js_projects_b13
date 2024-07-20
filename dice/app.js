let image1 = document.querySelector(".player1");
let image2 = document.querySelector(".player2");
let p1 = document.querySelector(".pl-1");
let p2 = document.querySelector(".pl-2");
let heading = document.querySelector(".text-center");
let audio = new Audio("./dice.mp3");
let faces = [
  "1-face.png",
  "2-face.png",
  "3-face.png",
  "4-face.png",
  "5-face.png",
  "6-face.png",
];

let value1;
let value2;

const randomImage = () => {
  const random = Math.random() * faces.length;
  const floor = Math.floor(random);
  return floor;
};

p1.addEventListener("click", () => {
  let val = randomImage();
  image1.src = `./images/${faces[val]}`;
  value1 = val;
  audio.play();
});

p2.addEventListener("click", () => {
  let val = randomImage();
  image2.src = `./images/${faces[val]}`;
  value2 = val;
  audio.play();

  if (value1 > value2) {
    heading.innerHTML = "Player 1 wins";
  } else if (value1 == value2) {
    heading.innerHTML = "Match Drawn";
  } else {
    heading.innerHTML = "Player 2 wins";
  }

  setTimeout(() => {
    heading.innerHTML = "";
  }, 3000);
});

console.log();
