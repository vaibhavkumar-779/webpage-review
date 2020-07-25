// local reviews data
const reviews = [
  {
    id: 1,
    name: "Vaibhav 1",
    job: "web developer",
    img:
      "vk.jpg",
    text:
      "I'm  defense lover, book worm , adventure freak. life is not long or short , it is way of percieving it and making the moving and the thinking",
  },
  {
    id: 2,
    name: "shiwang kumar",
    job: "web designer",
    img:
      "sk.jpg",
    text:
      "gaming is love , can spend hours watching cartoons and playing.life is joke but jokes are even harsh for people who leave humour behind and only are in their thoughts",
  },
  {
    id: 3,
    name: "Vamaneshwar",
    job: "intern",
    img:
      "vk1.jpg",
    text:
      "python development is love.starting  is most hard part of something rest comes ahead itself",
  },
  {
    id: 4,
    name: "sureal creator",
    job: "the boss",
    img:
    "sk1.jpg",
  text:
    "would love to visit sweets shops and eat food as i am a foodie. not junk food but healthy diet , vibrant sporting is my way of life ",
},
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
const item = reviews[person];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
