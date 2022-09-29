// for red button
const redButton = document.getElementById('btn-one');
let index = 0; 
const colors = ['red', 'white']; 
redButton.addEventListener ('click', function(){
    document.body.style.backgroundColor = colors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;}
    );

// for yellow button 

const yellowButton = document.getElementById('btn-yellow');

const colorsTwo = ['yellow']; 

yellowButton.addEventListener('click', function(){
     document.body.style.backgroundColor = colorsTwo[index];
     index = index >= colorsTwo.length - 1 ? 0 : index + 1;}
    );


//change the buttons to a color ------------------------
const blueButton = document.getElementById('btn-blue'); 
    blueButton.addEventListener ('click', function(){ 
        document.getElementById('btn-blue').style.color = "blue";
        document.getElementById('btn-yellow').style.color="yellow";
        document.getElementById('btn-one').style.color="red";
        document.getElementById('counter-add').style.color='pink'; 
        document.getElementById('counter-remove').style.color='pink'; 
    }); 


//Reset all ------------------------
const arrayReset =  document.getElementsByTagName('button'); 
const restButton = document.getElementById('btn-reset');
    restButton.addEventListener('click', function() {
        document.body.style.backgroundColor="white";
        for ( let i=0; i<arrayReset.length; i++) { 
            arrayReset[i].style.color="black";
        }     
        restButton.onclick = function() { count = 0; counterNum.innerHTML = count;}
        
    }
    ); 
     
     
    
    

//Prompt Name ---------------------
document.querySelector('#btn-prompt').addEventListener('click', function() {
    var userAdjective = prompt("Please provide an Adjective");
    alert (userAdjective);
});



// Click ME --------------
const counterNum = document.getElementById('counter-number')
const addMe = document.getElementById('counter-add'); 
const removeMe = document.getElementById('counter-remove');
const resetME = document.getElementById('counter-reset'); 
count = 0 
addMe.onclick = function() { 
    count +=1; 
    counterNum.innerHTML = count; 

};
removeMe.onclick = function() { count -=1; counterNum.innerHTML = count;} 

resetME.onclick = function() { count = 0; counterNum.innerHTML = count;}



// BUTTON 6 ------------

document.querySelector('.toggle-button').addEventListener('click', ()=> { 
    document.body.classList.toggle('dark')
    document.getElementById("darkmode").style.opacity ="1";
    let i = 1; 
    let j=0; 

     



    document.getElementById("lightmode").style.opacity= "0"; 
   
    

})






    
    

