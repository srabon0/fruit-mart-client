import React from "react";
import { useDispatch } from "react-redux";
import RowDataModal from "./RowDataModal";


const OrderRow = ({ order, index }) => {
  const dispatch = useDispatch();
  const { _id, name, email, subtotal } = order;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <label htmlFor={index} className="bg-info text-black text-sm rounded-sm underline px-1">{_id}</label>
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
      <RowDataModal index={index} order={order} ></RowDataModal>
    </tr>
  );
};

export default OrderRow;
