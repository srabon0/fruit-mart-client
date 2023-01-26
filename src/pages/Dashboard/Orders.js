import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadAllOrders from "../../redux/thunk/fetchOrder";

const Orders = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadAllOrders())
  },[dispatch])

  const orderState = useSelector((state)=>state.orderState)
  const orders = orderState.orders

  return (
    <div className="card w-full h-[75vh] bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>{orders.length}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
