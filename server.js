const express = require('express');
const mysql2 = require('mysql2/promise');
const path = require('path');
const cors = require('cors')

const app = express();
app.use(cors())
const port = 3000;

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}));
app.use(express.json)

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
   
});

app.listen(port, () => {
    console.log(`Servidor funcionando: http://localhost:${port}`)
});

