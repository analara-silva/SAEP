function requireLogin(req, res, next) {

    const rotasLives = ['/login', '/cadastro'];

    if(rotasLives.includes(req.path)) {
        return next()
    }

    if(!req.session.username){
        return res.redirect('/login')
    }

    next()
};

module.exports = {requireLogin}