import express from 'express'
import {listProducts,removeProduct,singleProduct,addProduct} from '../controllers/productController.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'
const productRouter = express.Router()

productRouter.post('/add',upload.fields([{name: 'image1',maxcount:1},{name: 'image2',maxcount:1},{name: 'image3',maxcount:1},{name: 'image4',maxcount:1}]),addProduct)
productRouter.post('/single',singleProduct)
productRouter.post('/remove',removeProduct)
productRouter.get('/list',listProducts)

export default productRouter