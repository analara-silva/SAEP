const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');

const { requireLogin } = require('./middleware/auth.js')

const app = express();
const port = 3000;

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'alguma coisa',
    resave: false,
    saveUninitialized: true
}));

const viewRoutes = require('./routes/username');

app.use('/', requireLogin, viewRoutes);

app.listen(port, () => {
    console.log(`Servidor funcionando: http://localhost:${port}`)
});

