const { validationResult } = require('express-validator');
let {
    getMovies,
    getGenres,
} = require('../database'), {
    getListAllUniqueAtributes
} = require('../middlewares/ourLib')

// momentaneo

let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        let genres = db.Genre.findAll();
        let directors = db.Director.findAll();
        Promise.all(([genres, directors]))
            .then(function ([genres, directors]) {
                return res.render('./admin/creacionPeliculas', {
                    genres,
                    directors
                });

            }).catch(error => console.log(error))
    },
    agregar: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { title, direction, length, year, trailer, price, sinopsis, genres } = req.body;



            db.Movie.create({
                title: title.trim(),
                directorId: +direction,
                length: +length,
                year: +year,
                price: +price,
                trailer: trailer,
                sinopsis: sinopsis.trim(),
                image: req.file ? req.file.filename : 'notImage.png',
            }).then(movie => {

                if (typeof genres === "string") {
                    genres = genres.split()
                }
                if (genres) {
                    genres.forEach(async genre => {
                        await db.Movie_has_Genre.create({
                            movieId: movie.id,
                            genreId: +genre
                        })
                    });
                }


                res.redirect("/admin");

            }).catch(error => console.log(error))

        } else {
            let genres = db.Genre.findAll();
            let directors = db.Director.findAll();
            Promise.all(([genres, directors]))
                .then(function ([genres, directors]) {
                    return res.render('./admin/creacionPeliculas', {
                        genres,
                        directors,
                        errors: errors.mapped(),
                        old: req.body,

                    });

                }).catch(error => console.log(error))
        }


    },
    listar: function (req, res) {
        db.Movie.findAll()
            .then(function (movies) { res.render("/admin/dashboard", { movies: movies }) })
            .catch(error => console.log({ error }))

    },
    detalle: function (req, res) {

        db.Movie.findByPk(req.params.id, {
            include: [{all:true}]
        }).then(function (movie) {
            console.log(movie)
            return res.render('product-detail',{
                movie,
                session : req.session.user
            })
        }).catch(error => console.log(error))
    },
    editar: function (req, res) {
        let movie = db.Movie.findByPk(req.params.id, {
            include: [{ all: true }]
        });
        let genres = db.Genre.findAll();
        let directors = db.Director.findAll();
        let actors = db.Actor.findAll()
        Promise.all([movie, genres, directors, actors])
            .then(function ([movie, genres, directors, actors]) {
                res.render("admin/editarPelicula", {
                    movie,
                    genres,
                    directors,
                    actors
                });
            }).catch(error => console.log(error))
    },
    actualizar: function (req, res) {

        let { title, directorId, length, year, trailer, price, sinopsis, genres } = req.body;


        db.Movie.update({
            title: title.trim(),
            directorId: directorId,
            length: +length,
            year: year && +year,
            price: +price,
            trailer: trailer.trim(),
            sinopsis: sinopsis.trim(),
        }, {
            where: {
                id: req.params.id
            }
        }).then(async () => {

            if (typeof genres === "string") {
                genres = genres.split()
            }

            await db.Movie_has_Genre.destroy({
                where: {
                    movieId: req.params.id
                }
            })

            genres.forEach(async genre => {
                await db.Movie_has_Genre.create({
                    movieId: req.params.id,
                    genreId: +genre
                })
            });


            return res.redirect("/admin")
        }).catch(error => console.log(error))
    },
    eliminar: function (req, res) {
        db.movie.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/admin");
    },
    inicio: (req, res) => {
        db.Movie.findAll({
            include: [{ all: true }]
        })
            .then(function (movies) {
                res.render('admin/dashboard', {
                    session: req.session.user,
                    peliculas: movies,
                    user: req.session.user
                })
            })
            .catch(error => console.log(error))
    },
    /*peliculasPorGenero: (req, res) => {
    
    }*/
}
module.exports = peliculasController;
















/*let {
   getMovies,
   getGenres
} = require('../database');
const { getListAllUniqueAtributes } = require('../middlewares/ourLib');

module.exports = {
   "peliculasPorGenero": (req, res) => {
       let genero = req.params.genero
       let lista = getPeliculas.filter(pelicula => pelicula.genero.includes(genero));
       res.render('user/home', {
           peliculas: lista,
           generos: getGeneros,
           anios: aniosEnLista
       })
       // res.send(lista);
   },

   // detalle de pelicula

   "detail": (req, res) => {
       let id = +req.params.id;
       let movie = getMovies.find(pelicula => pelicula.id == id);
       res.render('product-detail', {
           movie,
           session: req. session.user,
           genresMovie: getGenres,
           anios: getListAllUniqueAtributes(getMovies, 'age'),
           peliculas: getMovies
       });
   }
}*/

