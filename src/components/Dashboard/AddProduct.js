import axios from 'axios';
import React,{useState} from 'react';

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
    const addFruit = async(e)=>{
        e.preventDefault();
        console.log("Submitting");
        let fruitName = e.target.fruitName.value;
        let price = e.target.price.value;
        let desc = e.target.desc.value
        const fruitObject = {
            name:fruitName,
            price:price,
            inStock:true,
            picture:file,
            description:desc
        }
        console.log(fruitObject);
        const url = `http://localhost:5000/api/v1/fruits/addfruit`
        const {data} = await axios.post(url,fruitObject)
        console.log(data);
    }
    return (

        <div className="max-w-2xl mx-auto">
        
            <form onSubmit={addFruit} >
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="fruitName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                    <label htmlFor="fruitName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fruit Name</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="number" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                    <label htmlFor="price" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            onChange={onUploadFileChange}
                            type="file"
                            placeholder="Picture"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer" required
                        />
                        
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Link</label>

                    </div>
                </div>
                <div className="relative z-0 mb-6 w-full group">
            <textarea rows="5" cols="70" type="text" name="desc" className="textarea textarea-warning" placeholder="description"></textarea>
                </div>
                <input type="submit" className="text-white bg-orange-600 hover:bg-orange-40 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center " value="Add Fruit" />
            </form>
        </div>
    );
};

export default AddProduct;