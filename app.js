const express = require('express');
const app = express();
const hbs = require('hbs');

const port = 3030;



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home', {title: "Whatever"});
});

app.get('/about', (req, res) => {
    res.render('about', {title: "Whatever"});
});

app.get('/gallery', (req, res) => {
    res.render('gallery', {title: "Whatever"});
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

