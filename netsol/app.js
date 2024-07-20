let icon_drop = document.querySelector(".bi-chevron-down");
let lang = document.querySelector(".languages");
let selected_lang = document.querySelectorAll(".my-lang");
let lang_display = document.querySelector(".lang-display");
let menu_display = document.querySelector(".menu-display");
let line_icon = document.querySelector(".lines");
let lines = document.querySelectorAll(".line");
let sidebar = document.querySelector(".sidebar");
let sidebar_list = document.querySelectorAll(".sidebar-list");
let ul_list = document.querySelectorAll(".ul-name");

let bg_image = document.querySelector(".bg-image");

selected_lang.forEach((item, index) => {
  item.addEventListener("click", () => {
    lang_display.innerText = item.innerText;
    console.log(lang_display.innerText);
  });
});

icon_drop.addEventListener("click", () => {
  lang.style.display = "block";
  icon_drop.style.transform = "rotate(180deg)";
});

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("bi-chevron-down")) {
    lang.style.display = "none";
    icon_drop.style.transform = "rotate(0deg)";
  }
});

line_icon.addEventListener("click", () => {
  if (menu_display.innerHTML == "MENU") {
    menu_display.innerHTML = "CLOSE";
  } else {
    menu_display.innerHTML = "MENU";
  }
  lines[0].classList.toggle("line1-styling");

  lines[1].classList.toggle("line2-styling");
  lines[2].classList.toggle("line3-styling");

  sidebar.classList.toggle("show-sidebar");

  sidebar_list.forEach((item, index) => {
    item.style.opacity = 0;
    setTimeout(() => {
      item.classList.toggle("animate");
      item.style.opacity = "1";
    }, 100 * index);
  });
});

let images = [
  "https://netsoltech.com/images/ascentVector.svg",
  "https://netsoltech.com/images/contact-usVector.svg",
  "https://netsoltech.com/images/digitalVector.svg",
  "https://netsoltech.com/images/eventsVector.svg",
  "https://netsoltech.com/images/innovationVector.svg",
  "https://netsoltech.com/images/investorsVector.svg",
  "https://netsoltech.com/images/netsolVector.svg",
];

ul_list.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    switch (item.innerHTML) {
      case "Home":
        bg_image.src = images[6];
        break;
      case "About us":
        bg_image.src = images[6];
        break;
      case "Products":
        bg_image.src = images[0];
        break;
      case "Investors":
        bg_image.src = images[5];
        break;
      case "Innovation":
        bg_image.src = images[4];
        break;
      case "Events":
        bg_image.src = images[3];
        break;
    }
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 360,
      density: { enable: true, value_area: 1657.2100474277727 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4.810236182596568,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
