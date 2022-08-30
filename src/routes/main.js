
const router = require('express').Router();
const { index, about, contact, services, admin, login } = require('../controllers/mainController');
const adminCheck = require('../middlewares/adminCheck');
router
    .get('/',index)
    .get('/about',about)
    .get('/contact',contact)
    .get('/services',services)
    .get('/admin',adminCheck,admin)
    .get('/login',login)

module.exports = router;
