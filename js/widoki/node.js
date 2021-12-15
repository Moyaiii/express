const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.use(express.static('public'));
app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Strona główna'
    });
});

app.get('/omnie', (req, res) => {
    res.render('omnie', {
        pageTitle: 'O mnie'
    });
});

app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        pageTitle: 'Kontakt'
    });
});

app.listen(3000, () => {
    console.log("XDD");
});