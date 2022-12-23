import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
const Product = ({ fruit }) => {
  const [cart,setCart] = useCart();
  const navigate =  useNavigate()
  const { _id, name, price, picture } = fruit;
  const fruitAddedToCart = {
    ...fruit,
    qty:1
  }
  const addToCart = (product) => {
    const index = cart.findIndex(element => element._id === product._id) 
    console.log(index);
    if(index === -1){
      const newCart = [...cart, product] //push
      setCart(newCart);
  }else{
    window.alert("Already exist");
  }
    };


  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt={_id}
          className="object-cover object-center h-full w-full"
          src={picture}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {name}
      </h2>
      <h2 className="text-sm font-medium title-font text-gray-900 mt-1">
        ${price}
      </h2>
      <div className="flex flex-row gap-2">
        <p className="w-2/3 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, illo? Rem, aliquid beatae possimus, ut qui quae dolore similique sint architecto dolores incidunt. Perspiciatis ullam aliquid sapiente, harum voluptatem illum.</p>
<div className="flex flex-col w-1/3">
<button
      onClick={()=>{addToCart(fruitAddedToCart)}}
        className="btn btn-sm bg-orange-600 text-white text-xs border-none inline-flex items-center mt-3"
      >
        Add to cart
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <button
      onClick={()=>{ navigate(`/details/${_id}`) }}
        className="btn btn-sm bg-orange-600 text-white  text-xs border-none inline-flex items-center mt-3"
      >
        View details
      </button>
</div>
      
      </div>
    </div>
  );
};

export default Product;
