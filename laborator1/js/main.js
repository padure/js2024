let suma = prompt('Introduceti o valoare numerica!') ?? 0;
let valuta = confirm('Convertiti in Euro? Daca negati va fi Dolari');
let curs = 0;
let rezultat = 0;
if(valuta) {
    curs = prompt('Introduceti cursul la EURO de azi');
} else {
    curs = prompt('Introduceti cursul la DOLARI de azi');
}

rezultat = Number(suma) / Number(curs);

console.log(`Valoarea finala este: ${rezultat}`);
alert(`Valoarea finala este: ${rezultat}`);