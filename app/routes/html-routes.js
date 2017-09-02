var path = require("path");
module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.send('Welcome to Passport with Sequelize');
    });

    app.get('/signup', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });


    app.get('/signin', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });
    app.get('/timeline', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/timeline.html"));
    });

    //  app.get('/dashboard', isLoggedIn, function (req, res) {
    //      res.send('Yay!');
    // });

    app.get('/logout', function(req, res) {

        req.session.destroy(function(err) {
            res.redirect('/');
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
}