// for red button
const redButton = document.getElementById('btn-1');
let index = 0; 
const colors = ['red', 'white']; 
redButton.addEventListener ('click', function(){
    document.body.style.backgroundColor = colors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;}
    );

// for yellow button 

const yellowButton = document.getElementById('btn-yellow');

const colorsTwo = ['yellow', 'white']; 

yellowButton.addEventListener('click', function(){
     document.body.style.backgroundColor = colorsTwo[index];
     index = index >= colorsTwo.length - 1 ? 0 : index + 1;}
    );


//change the buttons blue 
const blueButton = document.getElementById('btn-blue'); 
    blueButton.addEventListener ('click', function(){ 
        document.getElementsByName('button').style.color = "blue";
    }); 