let orase = JSON.parse( localStorage.getItem('orase') ) ?? [];
const formularOrase = document.querySelector('#form-orase');
const oraseElement = document.querySelector('#orase');
const deleteAll = document.querySelector('#delete-all');

const deleteCity = (id) => {
    const state = confirm('Esti sigur?');
    if(state){
        const newOrase = orase.filter( oras => oras.id != id);
        orase = [...newOrase];
        updateLS();
        updateUI();
    }
}

const updateUI = () => {
    oraseElement.innerHTML = '';
    orase.map( data => {
        oraseElement.innerHTML += 
        `<li class="list-group-item list-group-item-action d-flex justify-content-between">
            ${data.nume} 
            <button type="button" class='btn btn-danger btn-sm' onclick='deleteCity(${data.id})'>Delete</button>
        </li>`;
    });
}

const updateLS = () => {
    localStorage.setItem('orase', JSON.stringify(orase));
}
formularOrase.addEventListener('submit', (e) => {
    e.preventDefault();
    let oras = e.target.oras.value;
    const d = new Date();
    const orasObject = {
        "id": d.getTime(),
        "nume": oras
    }
    orase.push(orasObject);
    updateLS();
    updateUI();
    formularOrase.reset();
});
updateUI();

deleteAll.addEventListener('click', () => {
    let state = confirm('Esti sigur?');
    if(state){
        localStorage.clear();
        orase = [];
        updateUI();
    }
});
