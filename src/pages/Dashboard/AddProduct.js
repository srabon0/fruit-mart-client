import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  const onUploadFileChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return;
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFile(result);
        setFileName(target.files[0]);
      }
    });
  };
  const addFruit = async (e) => {
    e.preventDefault();
    console.log("Submitting");
    let fruitName = e.target.fruitName.value;
    let price = e.target.price.value;
    let quantity = e.target.price.value;
    let desc = e.target.desc.value;
    let company = e.target.company.value
    const fruitObject = {
      name: fruitName,
      price: price,
      inStock: true,
      picture: file,
      quantity:quantity,
      description: desc,
      company:company,
    };
    console.log(fruitObject);
    const url = `http://localhost:5000/api/v1/fruits/addfruit`;
    const { data } = await axios.post(url, fruitObject);
    console.log(data);
  };
  return (  
    <section class="max-w-4xl mt-4 p-6 mx-auto bg-white rounded-md shadow-md ">
    <h2 class="text-lg font-semibold text-gray-700 capitalize">Add Fruit</h2>

    <form onSubmit={addFruit}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700 " for="fruitName">Product Name</label>
                <input required  id="fruitName" name="fruitName" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label class="text-gray-700 " for="price">Price</label>
                <input required  type="number"
            name="price"
            id="price" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 " for="password">Quantity</label>
                <input required
                id="quantity" 
                type="number"
                name="quantity"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 " for="passwordConfirmation">Picture</label>
                <input required 
                onChange={onUploadFileChange}
                type="file"
                id="picture" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>
        </div>
        <div class="w-full my-4">
        <label class="text-gray-700 " for="description">Description</label>

            <textarea name="desc" id="desc" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 -300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " placeholder="description" ></textarea>
        </div>

        <div>
                <label class="text-gray-700" for="fruitName">Company</label>
                <input required id="company" name="company" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring" />
          </div>

        <div class="flex justify-end mt-6">
            <input type="submit" class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600" value="Add Fruit" /> 
        </div>
        
    </form>
</section>
  );
};

export default AddProduct;
