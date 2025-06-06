import ProductModel from "../models/productModule.js"

const getProducts = async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
}

const postProduct = async (req, res) => {
    const {image, price, name, decription} = req.body
    const product = {image, price, name, decription}
    await ProductModel.create(product)
    res.json(product)
}

const deleteProduct = async (req,res) => {
    const {id} = req.params
    await ProductModel.findByIdDelete(id)
    res.json(`${id} -li product silindi`)
}

export {getProducts, postProduct, deleteProduct}