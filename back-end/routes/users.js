const router = require('express').Router();
var User = require('../models/User');
const bcrypt = require('bcryptjs');

const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

router.route('/register')
    .post((req, res) => {
        const { isValid, errors } = validateRegisterInput(req.body);

        if(!isValid) {
            return res.status(404).json(errors);
        }
        console.log(User);

       User.findOne({ email: req.body.email })
            .then(user => {
                if(user){
                    errors.email = 'Email is already exist';
                    return res.status(404).json(errors);
                }

                bcrypt.genSalt(10, function(err, salt){
                    bcrypt.hash(req.body.password, salt, function (err, hash){
                        const newUser = new User({
                            email: req.body.email,
                            login: req.body.login,
                            password: hash
                        });

                        newUser.save()
                            .then(newUser => res.json(newUser))
                            .catch(err => console.log(err))
                    })
                })
            })

    });

router.route('/login')
    .post((req, res) => {
        res.send('OK!');
    });

module.exports = router;