const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerE1 = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video")

btnEl.addEventListener("click", ()=> {
    trailerContainerE1.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=> {
    trailerContainerE1.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;

});


