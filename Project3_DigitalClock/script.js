const clock = document.getElementById('clock');



// setInterval method

setInterval(function(){
let date = new Date();
// console.log(date.toLocaleTimeString()); output in console
clock.innerHTML = date.toLocaleTimeString();
},1000)
