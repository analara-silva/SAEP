const express = require('express');
const router = express.Router();
const { pool } = require('../db/db');


router.get('/', (req, res) => {
    res.render('index', {
        pageTittle: 'SAEP - Mercado',
        isLoggedIn: !!req.session.username
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password){
        return res.status(400).json({sucess: false, message: 'Nome e senha são obrigatórios.'});
    }

    try {
        const [rows] = await pool.query(
            'SELECT nome, senha FROM funcionarios WHERE nome = ? AND senha = ?', [username, password]
        );
    
        if (rows.length === 0) {
            return res.status(401).json({ sucess: false, message: 'Nome ou senha inválidos'});
        } else {
            req.session.username = username;
            res.redirect('/home');
        };
        
    } catch (error) {
        res.status(500).json({sucess: false, message: 'Erro interno no servidor durante o login.'});
    };

});

router.get('/cadastro', (req, res) => {
    res.render('cadastro')
});

router.post('/cadastro', async (req, res) => {
    const { username, password} = req.body;

    if(!username || !password){
        res.status(400).json({sucess: false, message: 'Nome ou senha inválidos para cadastro.'})
    }

    try {
        const [rows] = await pool.execute(
            'INSERT INTO funcionarios (nome, senha) VALUE (?, ?);', [username, password]
        );
    
        if(rows.affectedRows > 0) {
            console.log('Inserção realizada com sucesso!')
    
            req.session.username = username
            res.redirect('/home')
    
        } else {
            console.log('Nenhuma linha foi inserida.')
        };
    } catch (error) {
        console.error(`Erro interno no servidor: ${error}`)
    }

 });

router.get('/home', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * from produtos');
        const username = req.session.username;
        res.render('index', { username: username, produtos: rows });

    } catch (error) {
        return res.status(500).json({sucess: false, message: 'Erro interno no servidor'});
    };

});


module.exports = router;