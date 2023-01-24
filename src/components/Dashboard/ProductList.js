import axios from "axios";
import React, { useState, useEffect } from "react";

const deleteFruit=async(id)=>{
  console.log(id);
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };
  const url = `http://localhost:5000/api/v1/fruits/${id}`;
  const { data } = await axios.delete(url, { headers: headers });
  console.log(data);
}

const ProductList = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/api/v1/fruits";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFruits(data.fruits);
      });
  }, []);
  return (
    <div className="container h-full mt-5">
      <div className="w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              
              <th>Action</th>
            </tr>
            
          </thead>
          <tbody>
            {
              fruits.map((item,index)=><ProdcutRow  key={index} fruit={item}></ProdcutRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;



const ProdcutRow = ({fruit}) => {
  const {_id,name,picture,price,quantity} = fruit
  return (
    <tr>
    <td>
      <div className="flex items-center space-x-2">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img
              src={picture}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">Available: 50 pcs</div>
        </div>
      </div>
    </td>
    <td>
      $ {price}
    </td>
   
    <th>
      <button onClick={()=>deleteFruit(_id)} className="btn btn-error text-white btn-sm">Delete</button>
    </th>
  </tr>
  );
};


