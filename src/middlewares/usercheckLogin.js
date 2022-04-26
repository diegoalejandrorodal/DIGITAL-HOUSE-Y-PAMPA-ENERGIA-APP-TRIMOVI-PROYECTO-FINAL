const createError = require("http-errors");

module.exports = (req, res, next) => {
    if(!req.session.user){
        next();
    }

    // return next(createError(403));
    res.redirect('/')
}