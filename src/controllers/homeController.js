const db = require('../database/models');
const { getBanners } = require('../database');

const { Op } = require('@sequelize/core');

module.exports = {
    inicio: (req, res) => {

        let movies = db.Movie.findAll()
        let genres = db.Genre.findAll()
        let years = db.Movie.findAll({
            attributes: ['year'],
            group: ["year"],
            having: "",
        })
        Promise.all([movies, genres, years])
            .then(([movies, genres, years]) => {
                return res.render('home', {
                    titulo: "Inicio",
                    peliculas: movies,
                    generos: genres,
                    banners: getBanners,
                    anios: years.map(element => element.year),
                    session: req.session.user
                })
            })
            .catch(error => console.log(error))



    },

    filterByGenre: async (req, res) => {
        try {
            let id = req.params.id;
            // console.log(`id: ${id}`)
            let genre = await db.Genre.findByPk(id, {
                include: [{ all: true }]
            });
            let genres = await db.Genre.findAll();
            let dataYears = await db.Movie.findAll({
                attributes: ["year"],
                group: ["year"],
                // having: "",
            })
            return res.render('home', {
                titulo: "Trimovie - Inicio",
                peliculas: genre.movies,
                generos: genres,
                banners: getBanners,
                anios: dataYears.map(element => element.year),
                session: req.session.user,
            })
        } catch (error) {
            console.log(error)
        }
    },
    filterByYear: async (req, res) => {
        try {
            let year = req.params.id;
            // console.log(`id: ${id}`)
            let peliculas = await db.Movie.findAll({
                where : {
                    year
                },
                include: [{ all: true }]
            });
            let genres = await db.Genre.findAll();
            let dataYears = await db.Movie.findAll({
                attributes: ["year"],
                group: ["year"],
                // having: "",
            })
            return res.render('home', {
                titulo: "Trimovie - Inicio",
                peliculas,
                generos: genres,
                banners: getBanners,
                anios: dataYears.map(element => element.year),
                session: req.session.user,
            })
        } catch (error) {
            console.log(error)
        }
    },

    search: async (req, res) => {
        
        try {

            let searchValue = req.query.search;

            let movies = await db.Movie.findAll({
                where: {
                    title: {
                        [Op.substring]: `%${searchValue}%`
                    }
                }
            })
            let genres = await db.Genre.findAll()
            let years = await db.Movie.findAll({
                attributes: ['year'],
                group: ["year"],
                having: "",
            })

            return res.render('home', {
                titulo: "Inicio",
                peliculas: movies,
                generos: genres,
                banners: getBanners,
                anios: years.map(element => element.year),
                session: req.session.user
            })

        } catch (error) {
            console.error(error);
        }

    },

}