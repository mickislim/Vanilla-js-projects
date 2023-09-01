const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const content = document.getElementById("content");
const bullets = [...document.querySelectorAll(".bullet")];

const maxStep = 4;
let currentStep = 1;

nextBtn.addEventListener("click", () => {
  const currentBullet = bullets[currentStep - 1];
  currentBullet.classList.add("completed");
  currentStep++;
  prevBtn.disabled = false;

  if (currentStep == maxStep) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }

  content.innerText = `Step Number ${currentStep}`;
});

prevBtn.addEventListener("click", () => {
  const prevBullet = bullets[currentStep - 2];
  prevBullet.classList.remove("completed");
  currentStep--;
  nextBtn.disabled = false;
  finishBtn.disabled = true;

  if (currentStep == 1) {
    prevBtn.disabled = true;
  }
  content.innerText = `Step Number ${currentStep}`;
});

finishBtn.addEventListener("click", () => {
  location.reload();
});
