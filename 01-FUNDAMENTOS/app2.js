const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8'); // leer el documento

const words = content.split(' ').length;// contador total de palabras

const countData = content.match(/react/ig).length; // buscador de palabras

//console.log(`El total de palabras del fichero es de ${newData} palabras`);

console.log(`Existen ${countData} palabras que son React`)

