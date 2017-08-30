var path = require("path");

module.exports = function (app, passport) {

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }
    ));
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }
    ));




<<<<<<< HEAD
}






=======
}
>>>>>>> b438ca6a5600091fde310862535f62317574d52d
