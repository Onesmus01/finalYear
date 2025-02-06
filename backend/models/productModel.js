import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {type: String,required: true},
    descrition: {type: String,required: true},
    price:{type:Number,required: true},
    image: {type: Array,required: true},
    category: {type: String,required: true},
    subCategory: {type: String,required: true},
    sizes: {type: Array,required: true},
    bestseller: {type: boolean,required: true},
    date: {type: Number,required: true},


})
const productModel = mongoose.models.Product || mongoose.model('Product',productSchema)

export default productModel