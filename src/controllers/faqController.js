module.exports = {
    "faq": (req, res) => {
        res.render('FAQ/terminos-condiciones',{
            titulo: "Términos y condiciones"
        })
    },
    "privacidad": (req, res) => {
        res.render('FAQ/privacidad',{
            titulo: "Privacidad"
        })
    },
    "sobreNosotros":  (req, res) => {
        res.render('FAQ/sobre-nosotros',{
            titulo: "Sobre nosotros"
        })
    },
    "contacto": (req, res) => {
        res.render('FAQ/contacto', {
            titulo: "Tri Movi - Contacto",
            session: req.session.user,
        })
    },
    "mensaje":  (req, res) => {
        res.redirect('FAQ/gracias')
    },

    "gracias": (req, res) => {
        res.render('/FAQ/gracias', {
            titulo: "Tri Movi - ¡Gracias!",
        })
    },
}

