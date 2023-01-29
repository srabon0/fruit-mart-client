import React from "react";
import { useDispatch } from "react-redux";



const OrderRow = ({ order, index,modalOrder }) => {
  const dispatch = useDispatch();
  const {setModalOrder} = modalOrder
  const { _id, name, email, subtotal,order_date } = order;
  return (
    <tr>
      <td>{index + 1}</td>
      <td >
        <label onClick={()=>setModalOrder(order)} htmlFor="ordermodal" className="bg-info text-black text-sm rounded-sm underline px-1 block">{_id}</label>
        <p className="badge badge-ghost badge-sm">Date: {order_date.split("T")[0]}</p>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{subtotal}</td>
      <td>
      <button className="btn btn-success text-white btn-sm">Unpaid</button>
      </td>

      <th>
        <button className="btn btn-error text-white btn-sm">Cancel</button>
      </th>
      
    </tr>
  );
};

export default OrderRow;
