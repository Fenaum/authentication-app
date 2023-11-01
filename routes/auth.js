const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');

router.get('/login/', (req, res, next) => {
    res.render('login');
});

module.exports = router;