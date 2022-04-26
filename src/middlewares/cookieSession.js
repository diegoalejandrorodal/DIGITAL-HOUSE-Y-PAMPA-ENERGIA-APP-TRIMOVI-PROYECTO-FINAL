function cookieSession (req, res, next) {
    if(req.cookies.userTriMovie){
        req.session.user = req.cookies.userTriMovie;
        res.locals.user = req.session.user
    }
    next()
}

module.exports = cookieSession