import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadAllOrders from "../../redux/thunk/fetchOrder";
import loadUserOrders from "../../redux/thunk/fetchUserWiseOrder";
import OrderRow from "./OrderRow/OrderRow";
import RowDataModal from "./OrderRow/RowDataModal";

const Orders = () => {
  const dispatch = useDispatch()
  const orderState = useSelector((state)=>state.orderState);
  const currentUser = useSelector((state)=>state.userState.authUser);
  console.log(currentUser.email)
  const orders = orderState.orders
  const [modalOrder, setModalOrder]= useState({})
  const mdoalData = {modalOrder,setModalOrder}

  useEffect(()=>{
    if(currentUser.role==="Admin"){
      dispatch(loadAllOrders())
    }else{
      dispatch(loadUserOrders(currentUser.email))
    }
    
  },[dispatch,currentUser])

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
            {orders?.map((item, index) => (
              <OrderRow  key={index} order={item} index={index} modalOrder={mdoalData}></OrderRow>
            ))}
          </tbody>
        </table>
        { modalOrder && <RowDataModal order={modalOrder} ></RowDataModal> }
    </div>
  );
};

export default Orders;
