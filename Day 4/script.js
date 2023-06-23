const btn = document.getElementById('btn');
const input = document.querySelector('.input');

var isclicked = true;
 
btn.addEventListener('click',()=>{
    console.log('clicked',isclicked);
    if(isclicked === true){
        input.classList.add('shrink');
        isclicked = false;
    }
    else{
        input.classList.remove('shrink');
        isclicked = true;
    }
})