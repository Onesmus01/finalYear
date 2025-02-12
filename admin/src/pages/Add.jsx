import React,{useState} from "react";
import assets from "../assets/admin_assets/assets.js";
import axios from 'axios'
import {toast} from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

  const [name,setName] =useState("")
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async(e)=> {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post('http://localhost:7000/api/product/add',formData,{headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        
      } else {
        toast.error(response.data.message)
      }


    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
    );
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full max-w-[600px] mx-auto p-6 bg-gray-900 shadow-xl rounded-lg text-gray-100">
      {/* Image Upload Section */}
      <div className="mb-6">
        <p className="text-lg font-semibold mb-3">Upload Image</p>
        <div className="flex gap-3">
        <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])}  type='file' id='image1' hidden />
          </label>

          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type='file' id='image2' hidden />
          </label>

          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type='file' id='image3' hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type='file' id='image4' hidden />
          </label>

        </div>
      </div>

      {/* Product Name */}
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Product Name</label>
        <input
        onChange={(e)=>setName(e.target.value)}
        value={name}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Product Description</label>
        <textarea
        onChange={(e)=>setDescription(e.target.value)}
        value={description}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Write content here"
          rows="4"
          required
        />
      </div>

      {/* Category & Subcategory */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-lg font-semibold mb-2">Product Category</label>
          <select onChange={(e)=>setCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-lg font-semibold mb-2">Subcategory</label>
          <select onChange={(e)=> setSubCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
      </div>

      {/* Product Price */}
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Product Price</label>
        <input
        onChange={(e)=>setPrice(e.target.value)}
        value={price}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="25"
          required
        />
      </div>

      {/* Product Sizes */}
      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">Product Sizes</p>
        <div className="flex justify-center gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-4 py-2 border rounded-md text-center cursor-pointer transition ${
                sizes.includes(size) ? "bg-blue-600 text-white" : "bg-gray-800 border-gray-700 text-gray-300"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>




      {/* Bestseller Checkbox */}
      <div className="mb-4 flex items-center gap-2">
        <input
        onChange={()=>setBestSeller(prev => !prev)}
        checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="w-5 h-5 accent-blue-600 cursor-pointer"
        />
        <label htmlFor="bestseller" className="text-lg font-medium cursor-pointer">
          Add to Best Seller
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
