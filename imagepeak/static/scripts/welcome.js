const plusOneBtn = document.querySelector(".plus-one-btn");
const skipBtn = document.querySelector(".skip-btn");
const modal = document.querySelector(".score");
const modalScore = document.querySelector(".score p");
const newModalScore = document.createElement("p");

let voted = false;
let score = parseInt(modalScore.textContent);

addScore = () => {
  if (voted === false) {
    score = score + 1;
    voted = true;
    console.log("Zagłosowałeś");
    console.log(score);
    newModalScore.textContent = score;
    modalScore.classList.add("active");
    modal.appendChild(newModalScore);
  }
  return score;
};

skip = () => {
  voted = false;
};

console.log(score);
plusOneBtn.addEventListener("click", addScore);
skipBtn.addEventListener("click", skip);
