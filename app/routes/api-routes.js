var path = require("path");

module.exports = function(app, passport) {

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/timeline',
        failureRedirect: '/tom'
    }));
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/timeline',
        failureRedirect: '/signin'
    }));

    //  app.post("/signUp", function(req, res) {
    //      console.log("it's working", req.body);
    //  })

}