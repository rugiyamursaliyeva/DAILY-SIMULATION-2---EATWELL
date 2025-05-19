import WishlistModel from "../models/wishlistModule.js";

const getWishlists = async (req, res) => {
    const baskets = await WishlistModel.find()
    res.json(baskets)
}

const postWishlist = async (req,res) => {
    const {image, name, price, decription} = req.body
    const wishlist = {image, name, price, decription} 
    await WishlistModel.create(wishlist)
    res.json(wishlist)
}

const deleteWishlist = async (req, res) => {
    const {id} = req.params
    await WishlistModel.findByIdAndDelete(id)
    res.json(`${id} -li wishlist silindi`)
}

export {getWishlists, postWishlist, deleteWishlist}