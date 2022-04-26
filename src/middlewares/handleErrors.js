module.exports = (err, req, res, next) => {
    // res.send(err.message);
    switch(err.message) {
        case "Forbidden":
            return res.send("Aca hay que renderizar una vista tipo 404...esto actual pendiente");
        case "Unauthorized":
            return res.redirect("/user/login")
    
    }
}