const numbers = Array.from(document.querySelectorAll('.row div span'));
const display = document.querySelector('#display span');
const equalSign = document.querySelector('p');
const clear = document.querySelector('.clear');
//display numbers in calc display
function clickNumbers(){
    numbers.forEach(function(e){
        e.onclick = ()=>{
            display.textContent += e.textContent;
            evaluate();
        }
    })
    
}
clickNumbers();

// evalute numbers in display
function evaluate(){
    let evaluation = eval(display.textContent);
   
    equalSign.onclick = ()=>{
       display.textContent = evaluation;
      
    }
}
// clear display
    clear.onclick = ()=>{
        display.textContent = ''
    };