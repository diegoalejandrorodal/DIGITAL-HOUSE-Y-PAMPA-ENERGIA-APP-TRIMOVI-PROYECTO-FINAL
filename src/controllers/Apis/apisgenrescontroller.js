const { response } = require("express");
const db = require("../../database/models")

module.exports = {
    all:(req, res) => {
db.Genre.findAll() 
.then(genres => genres.json()) 
.then(result => res.json(result))
}};

