const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Servir contenido estático
app.use(express.static(path.join(__dirname, 'public')));

// Express HBS engine
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jaVier'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});