const cols = document.querySelectorAll(".col-3");
const numbers = [];
let count = 0;
while(count < 15){
    let number = Math.floor(Math.random() * 100 + 1);
    if( number < 16 && !numbers.includes(number) ) {
        numbers.push(number);
        count++;   
    }
}

cols.forEach( (col, index) => {
    col.textContent = numbers[index];
    col.setAttribute('data-id', numbers[index]);
});