import productModel from '../models/productModel.js'

// อ่านข้อมูลสินค้าทั้งหมด
export const getAllProducts = async () => {
  try{
    const products = await productModel.find()
    if (!products.length) {
      throw new Error('No products found')
    }
    return products
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`)
  }
}

// อ่านข้อมูลสินค้าเฉพาะตาม id
export const getProductById = async (id) => {
  try {
    const product = await productModel.findById(id)
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  } catch (error) {
    throw new Error(`Error fetching product: ${error.message}`)
  }
}

// สร้างข้อมูลสินค้า 
export const createProduct = async (name, price) => {
  try {
    const product = new productModel({ name, price })
    return await product.save()
  } catch (error) {
    throw new Error(`Error creating product: ${error.message}`)
  }
}

// อัปเดตข้อมูลสินค้า
export const updateProduct = async (id, name, price) => {
  try {
    return await productModel.findByIdAndUpdate(id, { name, price }, { new: true })
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`)
  }
}

// ลบข้อมูลสินค้า
export const deleteProduct = async (id) => {
  try {
    return await productModel.findByIdAndDelete(id)
  } catch (error) {
    throw new Error(`Error deleting product: ${error.message}`)
  }
}

// ค้นหาข้อมูลสินค้าตามชื่อ
export const searchProduct = async (name) => {
  try {
    const products = await productModel.find({ name: { $regex: name, $options: 'i' } })
    if (!products.length) {
      throw new Error('No products found')
    }
    return products
  } catch (error) {
    throw new Error(`Error searching products: ${error.message}`)
  }
}