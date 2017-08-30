var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login session



//Models
var models = require("./app/models");
//Routes
require('./app/routes/api-routes.js')(app, passport);
require('./app/routes/html-routes.js')(app, passport);
//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
//Sync Database
models.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine')
    app.listen(5000, function (err) {
        if (!err)
            console.log("Site is live"); else console.log(err)

    });
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});






