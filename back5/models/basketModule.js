import mongoose from "mongoose";

const basketShcema = mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, reuqired:true},
    price:{type:String, reuqired:true},
    decription:{type:String, required:true}
}, {timestamps:true})

const BasketModel = mongoose.model('Basket', basketShcema)

export default BasketModel