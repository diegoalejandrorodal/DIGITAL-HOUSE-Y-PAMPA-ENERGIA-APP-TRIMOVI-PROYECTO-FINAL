const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = {
    "loginPage": (req, res) => {
        res.render('login', {
            titulo: "login"
        })
    },

    "login": async (req, res) => {
        try {

            let errors = validationResult(req);
            if (errors.isEmpty()) {

                let { email, remember } = req.body;
                const user = await db.User.findOne({
                    where: {
                        email
                    }
                });
                // console.log(user)
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rolId
                }

                if (remember) {
                    const TIME_IN_MILISECONDS = 60000
                    res.cookie("userTrimovie", req.session.user, {
                        expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                        httpOnly: true,
                        secure: true
                    })
                }

                res.locals.user = req.session.user;

                return res.redirect('/');
            }
            
            return res.render('login', {
                errors: errors.mapped(),
                titulo: "login",
            })

        } catch (error) {
            console.log(error);
        }
    },

    "registerPage": (req, res) => {
        res.render("register", {
            title: "Register Trimovie"
        });
    },

    "processRegister": async (req, res) => {
        try {
            // res.send(req.body)
            let errors = validationResult(req);
            if(errors.isEmpty()) {
                let {name, lastname, email, avatar, date, phone, pass1} = req.body;
            
                let user = {
                    name,
                    lastname,
                    email,
                    password: bcrypt.hashSync(pass1, 12),
                    avatar: req.file ? req.file.filename : "AvatarChichiro.png",
                    // date
                    // phone
                    rolId: 2,
                }

                let creado = await db.User.create(user)

                if(creado){
                    return res.redirect('/user/login');
                }
            }

            return res.render("register", {
                        errors: errors.mapped(),
                        old: req.body,
                    })

        } catch (error) {
            console.log(error);
        }
    },
    
    "logout": (req, res) => {
        req.session.destroy();
        if (req.cookies.userTrimovie) {
            res.cookie('userTrimovie', "", {
                maxAge: -1
            })
        }
        res.redirect('/')
    },

    "profile":  (req, res) => {
       
        db.User.findByPk(req.session.user.id, {
            include : [{all:true}]
        }).then(user => {
            return res.render('userProfile', {
                titulo: "TRIMOVI",
                session: req.session.user,
                user
            })
        })
    },

    update : (req,res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()) {
           
            let {name, lastname, date, phone} = req.body;
            
            let {id} = req.params;
    
            db.User.update(
                {
                    name,
                    lastname,
                    date,
                    phone,
                    avatar: req.file ? req.file.filename : req.session.user.avatar,
                },
                {
                    where : {
                        id
                    }
                }
            ).then( () => {
                
                if(req.file){
                    if(fs.existsSync(path.join(__dirname,'../../public/design/images/avatars/' + req.session.user.avatar))){
                        fs.unlinkSync(path.join(__dirname,'../../public/design/images/avatars/' + req.session.user.avatar))
            
                   req.session.user.avatar = req.file.filename
               }
            }
       
                return res.redirect('/user/profile')
                
            }).catch(error => console.log(error))
        }else{
            db.User.findByPk(req.session.user.id, {
                include : [{all:true}]
            }).then(user => {
                return res.render('userProfile', {
                    titulo: "TRIMOVI",
                    session: req.session.user,
                    user,
                    errors:errors.mapped(),
                    old:req.body
                })
            })
    
        }
        },
    "carrito": (req, res) => {
        res.render("carrito", {
            title: "carrito",
            session: req.session.user
        });
    },
    
    "paymentPageRender": (req, res) => {
        res.render('payment', {
            session: req.session.user,
        })
    },
    


    /* apis */
    changeImage : (req,res) => {

    }

}