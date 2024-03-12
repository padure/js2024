const buttons = document.querySelectorAll("button.btn");
const display = document.querySelector(".display");
let operation = "";

[...buttons].forEach( btn => {
    btn.addEventListener('click', (event) => {
        if( event.target.dataset.value == "C" ){
            operation = "";
        } else if(event.target.dataset.value == "="){
            operation = eval(operation);
        } else{
            operation += event.target.dataset.value;
        }
        display.textContent = operation;
    });
});