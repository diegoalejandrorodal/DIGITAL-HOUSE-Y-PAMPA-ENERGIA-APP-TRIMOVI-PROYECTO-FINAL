const fs = require('fs');
const path = require('path');
const users = JSON.parse(fs.readFileSync(path.join(__dirname, "./users.json"), "utf-8"));
const genres = JSON.parse(fs.readFileSync(path.join(__dirname, "./generos.json"), "utf-8"));
const movies = JSON.parse(fs.readFileSync(path.join(__dirname, "./peliculas.json"), "utf-8"));
const banners = JSON.parse(fs.readFileSync(path.join(__dirname, "./banners.json"), "utf-8"));

module.exports = {
    getUsers: users,
    writeUsers: (data) => fs.writeFileSync(path.join(__dirname, "./users.json"),JSON.stringify(data),"utf-8"),
    getGenres: genres, 
    WriteGenres: (data) => fs.writeFileSync(path.join(__dirname, "./generos.json"),JSON.stringify(data), "utf-8"),
    getMovies: movies,
    writeMovies: (data) => fs.writeFileSync(path.join(__dirname, "./peliculas.json"),JSON.stringify(data), "utf-8"),
    getBanners: banners,
    writeBanners: (data) => fs.writeFileSync(path.join(__dirname, "./banners.json"),JSON.stringify(data), "utf-8"),
     
}