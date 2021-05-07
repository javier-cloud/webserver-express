const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnho', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    // Convirtiendo el texto string en un array de palabras
    let palabras = texto.split(' ');
    palabras.forEach( (palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    // Convirtiendo el arreglo en string separado por espacios
    return palabras.join(' ');
});