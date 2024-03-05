const numbersEl = document.querySelectorAll(".number");

numbersEl.forEach( numar => {
    numar.addEventListener('click', (event)=>{
        let value = Number(event.target.textContent);
        numar.textContent = value + 1; 
    });
    numar.addEventListener('mouseover', (event)=>{
        let value = Number(event.target.textContent);
        numar.textContent = value + 10; 
    });
});