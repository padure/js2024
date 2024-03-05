const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        let id = link.getAttribute('href');
        const section = document.querySelector(id);
        section.scrollIntoView({
            behavior: 'smooth'
        });                                             
    });
});