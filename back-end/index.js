const express =require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const cors = require('cors');
const passport = require('passport');


// setup environment
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users);

// mongo db connect
mongoose.connect(process.env.MONGODB_URL, {userNewUrlParser: true});
const PORT = process.env.PORT || 5000;

// run app
app.listen(process.env.PORT, () => console.log(`servser is running on port ${PORT}`));
