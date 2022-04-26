const createError = require("http-errors");

module.exports = (req, res, next) => {
    if(req.session.user){
        next();
    }

    // return next(createError(401));
    res.redirect('/user/login')
}