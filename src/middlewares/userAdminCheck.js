function userAdminCheck (req,res,next) {
    if  (req.session.user && req.session.user.rol === 1){
      
        return next();
    }
    return res.redirect('/')

}

module.exports = userAdminCheck;


