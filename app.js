const express = require('express');

// express app

const app = express();

// register view engine

app.set('view engine', 'ejs');

// listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Welcome!</p>');
    res.render('index', { title: 'Home' });
})

app.get('/about', (req, res) => {
    // res.send('<p>Welcome!</p>');
    res.render('about', { title: 'About' });
})

app.get('/create', (req, res) => {
    // res.send('<p>Welcome!</p>');
    res.render('create', { title: 'Blog' });
})

// redirects

app.get('/about-us', (req, res) => {
    res.render('about');
})

// 404 page - app.use grabs any request that makes it past everything above

app.use((req, res) => {
    res.status(404).render('404');
})
