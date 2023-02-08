var colors = ['blue', 'red', 'yellow', 'green', 'white', 'orange'];
const btn = document.getElementById('btn');
var randomNumber ;

btn.addEventListener('click', function (){
    randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    document.querySelector('.color').textContent = colors[randomNumber];
    
});














