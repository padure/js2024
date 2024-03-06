const cols = document.querySelectorAll(".col-3");
const numbers = [];
let count = 0;
let end = false;

const changeValues = (vecin, celula, number) => {
    vecin.setAttribute('data-id', number);
    celula.setAttribute('data-id', undefined);
    vecin.textContent = number;
    celula.textContent = "";
}

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

let index = 0;
for(let row = 1; row < 5; row++){
    for(let col = 1; col < 5; col++){
        cols[index].setAttribute("data-col", col);
        cols[index].setAttribute("data-row", row);
        index++;
    }
}

cols.forEach( col => {
    col.addEventListener('click', ()=>{
        let number = Number(col.dataset.id);
        let coloana = Number(col.dataset.col);
        let rand = Number(col.dataset.row);
        if(number){
            let vt = [...cols].filter(data => {
                return Number(data.dataset.col) === coloana && 
                Number(data.dataset.row) === rand - 1;
            });
            let vb = [...cols].filter(data => {
                return Number(data.dataset.col) === coloana && 
                Number(data.dataset.row) === rand + 1;
            });
            let vl = [...cols].filter(data => {
                return Number(data.dataset.col) === coloana - 1 && 
                Number(data.dataset.row) === rand;
            });
            let vr = [...cols].filter(data => {
                return Number(data.dataset.col) === coloana + 1 && 
                Number(data.dataset.row) === rand;
            });
            if( vt.length ){
                if(!Number(vt[0].dataset.id)){
                    changeValues(vt[0], col, number);
                }
            }
            if( vb.length ){
                if(!Number(vb[0].dataset.id)){
                    changeValues(vb[0], col, number);
                }
            }
            if( vl.length ){
                if(!Number(vl[0].dataset.id)){
                    changeValues(vl[0], col, number);
                }
            }
            if( vr.length ){
                if(!Number(vr[0].dataset.id)){
                    changeValues(vr[0], col, number);
                }
            }
        }
        const rezultat = [...cols].map((val, i) => {
            return Number(val.dataset.id) === i + 1
        });
        const rezultatLenght = rezultat.pop().filter( data => data );
        if(rezultatLenght.length === 15){
            alert("Ai castigat!");
        }
    });
} );