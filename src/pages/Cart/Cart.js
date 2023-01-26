import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartRow from "./CartRow";

 

const Cart = () => {
  const state = useSelector((state)=>state.fruitState)
  const navigate = useNavigate()
  const cart =  state.cart
  const initialValue = 0
  const cartTotal = cart.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );
  return (
    <div className="container mx-auto max-w-6xl mt-4">
    {
      cart.length ? 
      <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            cart?.sort((a, b) => a.cartPosition - b.cartPosition)?.map((item,index)=><CartRow key={item._id} fruit={item} index={index} ></CartRow>)
          }
        </tbody>
        <tfoot>
        <tr>
            <th></th>
            <th></th>
            <th>Total</th>
            <th>{cartTotal.toFixed(2)}</th>
            <th>
              <button className="btn btn-sm btn-success" onClick={()=>navigate("/shipping-details")} > Proceed </button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
    :<div className="card w-96 glass">
    <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">Life hack</h2>
      <p>How to park your car at your garage?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
    }

    </div>
  );
};

export default Cart;
