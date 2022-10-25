import React from 'react';

const AddProduct = () => {
    const addFruit = (e)=>{
        e.preventDefault();
        console.log("Submitting");
        let fruitName = e.target.fruitName.value;
        let price = e.target.price.value;
        let imgLink =  e.target.imgLink.value 
        const fruitObject = {
            name:fruitName,
            price:price,
            inStock:true,
            picture:imgLink
        }
        console.log(fruitObject);
        const url = `http://localhost:5000/api/v1/fruits/addfruit`
        fetch(url,{
            method:"POST",
            body:JSON.stringify(fruitObject),
            headers:{
                'content-type':'application/json'
            }
        }).then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (

        <div class="max-w-2xl mx-auto">
        
            <form onSubmit={addFruit} >
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="fruitName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                    <label for="fruitName" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fruit Name</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="number" name="price" id="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                    <label for="price" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" name="imgLink" id="imgLink" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                        <label for="imgLink" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Link</label>
                    </div>
                </div>
                <input type="submit" class="text-white bg-orange-600 hover:bg-orange-40 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center " value="Add Fruit" />
            </form>
        </div>
    );
};

export default AddProduct;