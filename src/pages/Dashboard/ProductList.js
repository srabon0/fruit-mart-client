import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadFruitData from "../../redux/thunk/fetchFruits";
import ProductRow from "./ProductRow/ProductRow";

const ProductList = () => {
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadFruitData())
    },[dispatch])
    const fruitState = useSelector((state)=>state) //only frut state
    console.log("whole stt", fruitState);
    const fruits = fruitState.fruitState.fruits
  return (
    <div className="container border border-red-300 rounded-sm mx-auto">
      
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((item, index) => (
              <ProductRow key={index} fruit={item}></ProductRow>
            ))}
          </tbody>
        </table>
      
    </div>
  );
};

export default ProductList;
