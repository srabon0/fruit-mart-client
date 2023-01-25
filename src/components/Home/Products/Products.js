import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
    

const Products = () => {
  const [fruits,setFruits]=useState([])
  const navigate =  useNavigate()
  useEffect(()=>{
    const url = "http://localhost:5000/api/v1/fruits";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{setFruits(data.fruits)})
  
  },[])
    return (
        <section className="text-gray-600 body-font bg-base-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-base-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-orange-600"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Our Fruits Products</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-5 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
          {fruits.map((fruit) => (
            <Product key={fruit._id} fruit={fruit}></Product>
          ))}
        </div>
        </div>
      </section>
    );
};

export default Products;