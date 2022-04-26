/*let {tablePeliculas, generos, tableGeneros} = require('../database')*/
const fs = require("fs")
/*Obtenemos dentro de nuestro controlador nuestra base de datos y el método para actualizar información de la base de datos*/
const {getMovies, writeMovies, getGenres} = require("../database/index");

let controller = {




inicio : (req, res) => {
    res.render('admin/dashboard', {
        session: req.session.user,
        peliculas: getMovies,
        user: req.session.user
    })
},
productos: (req, res) => {
    res.render('admin/getMovies', {
        getMovies,
        session: req.session
    })
},
editar: (req, res) => {
let product = getMovies.find(product => product.id === +req.params.id);

console.log(product);
res.render("admin/editProduct", {
    generos: getGenres,
    producto: getMovies,
    user: req.session.user
})
},
actualizar: (req, res) => {
const {name, category, age, price, description, reparto, direction, duration} = req.body

getMovies.forEach(product => {
    if(product.id === +req.params.id){
        product.name = name.trim(),
        product.price = price,
        product.description = description.trim(),
        product.direction=direction,
        product.duration=duration,
        product.reparto= reparto
         if (req.file){ 
             if(fs.existsSync('/public/desing/image/getMovies/', product.image)){
             fs.unlinkSync(`./public/desing/images/getMovies/${product.image}`)
            } 
        } }
         /*Si llegara una nueva imagen buscaremos la imagen almacenada anteriormente y si extiste la eliminamos*/
         
        /*consultamos si la imagen que está almcenada en nuestra base de datos existe en 
        product.age= age,
        product.category= category*/
})

},
crear: (req, res) => {
 res.render("admin/addProduct", {
     generos: getGenres,
     user: req.session.user
 })
 
},
eliminar: (req, res) => {
    let productId = +req.params.id;

		getMovies.forEach(product => {
			if(product.id === productId){
				if(fs.existsSync("./public/images/productos/", product.image)){
					fs.unlinkSync(`./public/images/productos/${product.image}`)
				}else{
					console.log('No encontré el archivo')
				}

				let productToDestroyIndex = getMovies.indexOf(product) // si lo encuentra devuelve el indice si no -1
				if(productToDestroyIndex !== -1) {
					getMovies.splice(productToDestroyIndex, 1)
				}else{  // primer parámetro es el indice del elemento a borrar, el segundo, la cantidad a eliminar 
					console.log('No encontré el producto')
				}
			}
		})

		writeMovies(getMovies)
		res.redirect('/admin')
    },
    agregar: (req, res) => {
        let {name, category, age, price, description, reparto, duration, direction} = req.body
       console.log(req.body)
        
       
        let lastId = 1;
        getMovies.forEach(product => {
        if(product.id > lastId) {
           lastId = product.id
           }});
       
        
        let newgetMovies = {
            id: lastId + 1,
            name: name.trim(),
            price: price,
            description: description.trim(),
            image: req.file ? [req.file.filename] : ["default-image.png"],
            age: age,
            category: category,
            reparto: reparto,
            direction: direction,
            duration: duration,
        }
        getMovies.push(newgetMovies);
        writeMovies(getMovies);
        res.redirect("/admin")
       
       }
}







module.exports = controller;













