let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidators');

let passport = require('passport');
let dashboardController = require('../controllers/DashboardController')
router.get('/', homepageController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);
router.get('/manage-users', dashboardController.manageUsers);

router.post('/register', authValidator.store, authController.store);
router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/protected' }));
router.get('/protected', authController.goToDashboard);
router.get('/dashboard', dashboardController.dashboard)
router.get('/login-fail', authController.loginFailed);

module.exports = router;