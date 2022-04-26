let { products, categories }=require('../data/products/peliculas.json')


let controller = {
    detail: (req, res) => {
        let productDetailId = +req.params.id;

        let product = products.find(product => product.id === productDetailId)
        let relatedProducts = products.filter(relatedProduct => relatedProduct.category === product.category)
        
        res.render('product-detail', {
            product,
            sliderTitle: "Productos relacionados",
            sliderProducts: relatedProducts,
            session: req.session
        })
    }
}
module.exports = controller


    