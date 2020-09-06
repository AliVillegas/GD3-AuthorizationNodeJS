let UserModel = require('../models/User');
const { validationResult } = require('express-validator');

exports.login = (req, res) => {
    console.log(req.flash('success'))
    res.render('auth/login', {
        layout: 'auth',
        success: req.flash('success'),
        errors: req.flash('errors')
    });
}

exports.register = (req, res) => {
    res.render('auth/register', {
        layout: 'auth',
        errors: req.flash('errors')
    });
}
exports.goToDashboard = (req, res) => {
    return res.redirect('/dashboard');
}

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login')
}
exports.loginFailed = (req, res) => {
    req.flash('errors', 'Incorrect Credentials, please try again');
    return res.redirect('/login');
}

exports.store = (req, res) => {
    // Identifica si hubieron errores en el request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Si los hubieron entonces regresa a la petición anterior
        req.flash('errors', errors.array());
        return res.redirect('back');
    }
    UserModel.create(req.body)
        .then((data) => {
            req.flash('success', 'User creation succeeded');
            return res.redirect('/login');
        })
        .catch((error) => {
            console.log(error);
        });
    // res.send('Registrar usuario');
}