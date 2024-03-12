const images = document.querySelectorAll("img.col-2");

[...images].forEach( img => {
    img.addEventListener('click', (event) => {
        const imagine = document.querySelector("#imagine > img");
        imagine.src = event.target.src;
    });
});

