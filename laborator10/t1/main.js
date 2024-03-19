//Variabile
const searchProductElement  = document.querySelector("#search-product");
const producsElement        = document.querySelector(".producs");
const searchElement         = document.querySelector("#search");
const URL                   = "./t1/products.json";
//Functii
const getProducts = async () => {
    const response = await fetch(URL);
    const products = await response.json();
    return products;
}

const updateUI = (products) => {
    producsElement.innerHTML = ``;
    products.map( product => {
        producsElement.innerHTML += `<div class="card col-md-4" key="${product.id}">
            <div class="card-body">
                <h5 class="card-title">${product.nume}</h5>
                <h6 class="text-danger">${product.pret} lei</h6>
                <p class="card-text">${product.descriere}</p>
                <a href="#" class="btn btn-outline-dark btn-sm">In cos</a>
            </div>
        </div>`; 
    });
}
//Main
( async () => {
    const products = await getProducts();
    updateUI(products);
    searchProductElement.addEventListener( "submit", (event) => {
        event.preventDefault();
        let pret        = Number(searchProductElement.pret.value);
        let descriere   = searchProductElement.descriere.value.toLowerCase();
        const produseFiltrate = products.filter( product => {
            return product.pret >= pret && product.descriere.toLowerCase().includes(descriere);
        });
        updateUI(produseFiltrate);
    });

    searchElement.addEventListener('input', (event)=>{
        event.preventDefault();
        const produseFiltrate = products.filter(product => {
            return product.nume.toLowerCase().includes(searchElement.value.toLowerCase());
        });
        updateUI(produseFiltrate);
    });
})();

