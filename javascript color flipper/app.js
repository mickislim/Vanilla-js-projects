const color = document.querySelector(".color");
const btn = document.getElementById('btn');

const colors = [ 'green' , 'red', 'blue', 'rgba(300,0, 150)'];


btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent = color[randomNumber]



});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};

