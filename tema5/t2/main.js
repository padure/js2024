let index = 1;
let interval;
let time = 1000;
const imagini = document.querySelectorAll('.carousel-container > img');
const slides = [...imagini];

const schimbaSlide = (n) => {
    if(n > slides.length){
        index = 1;
    } else if(n < 1) {
        index = slides.length;
    }
    slides.map( slide => {
        slide.style.display = 'none';
    });
    slides[index - 1].style.display = 'block';
} 

const schimba = (numar) => {
    schimbaSlide(index += numar);
}

interval = setInterval(() => {
    index++;
    schimbaSlide(index);
}, time);

schimbaSlide(index);
slides.map( slide=>{
    slide.addEventListener('mouseenter', ()=>{
        clearInterval(interval);     
    });
    slide.addEventListener('mouseleave', ()=>{
        interval = setInterval(() => {
            index++;
            schimbaSlide(index);
        }, time);     
    });
});