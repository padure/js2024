const cartiElement = document.querySelector("#carti");
const URL = "./t1/carti.json";

const getDataFromURL = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

const getRow = ({id, nume, autor, pagini}) => {
    return `<tr><td>${id}</td><td>${nume}</td><td>${autor}</td><td>${pagini}</td><tr>`;
}

const updateUI = (data) => {
    cartiElement.innerHTML = ``;
    data.map( product => cartiElement.innerHTML += getRow(product));
}

( async () => {
    const carti = await getDataFromURL();
    updateUI(carti);
})();