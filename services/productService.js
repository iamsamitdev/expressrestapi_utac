import productModel from '../models/productModel.js'

// อ่านข้อมูลสินค้าทั้งหมด
export const getAllProducts = async () => {
  return await productModel.find()
}

// สร้างข้อมูลสินค้า 
export const createProduct = async (name, price) => {
  const product = new productModel({ name, price })
  return await product.save()
}