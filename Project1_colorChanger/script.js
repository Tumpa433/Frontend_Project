const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
         body.style.backgroundColor = 'red';
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = 'rgb(115, 51, 112)';
        }
        if(color.target.id === 'box3'){
         body.style.backgroundColor = 'rgb(102, 102, 194)';
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = 'rgb(206, 180, 51)';
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = 'blueviolet';
        }
        
    })
})