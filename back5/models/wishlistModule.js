import mongoose from "mongoose";

const wishlistShcema = mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:String, required:true},
    decription:{type:String, required:true}
}, {timestamps:true})

const WishlistModel = mongoose.model('Wishlist', wishlistShcema)

export default WishlistModel