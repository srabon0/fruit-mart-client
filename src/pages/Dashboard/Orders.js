import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadAllOrders from "../../redux/thunk/fetchOrder";
import OrderRow from "./OrderRow/OrderRow";

const Orders = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadAllOrders())
  },[dispatch])

  const orderState = useSelector((state)=>state.orderState)
  const orders = orderState.orders

  return (
    <div className="container border border-red-300 rounded-sm mx-auto">
      
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Order Id</th>
              <th>Customer Name</th>
              <th>Grand Total</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <OrderRow key={index} order={item} index={index}></OrderRow>
            ))}
          </tbody>
        </table>
      
    </div>
  );
};

export default Orders;
