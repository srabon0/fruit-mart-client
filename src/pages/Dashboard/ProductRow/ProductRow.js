import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import deleteFruit from "../../../redux/thunk/deleteFruit";

const ProductRow = ({ fruit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, name, picture, price, quantity } = fruit;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-2">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">Available: {quantity} pcs</div>
          </div>
        </div>
      </td>
      <td>${price}</td>

      <th>
        <button
          onClick={() => dispatch(deleteFruit(_id))}
          className="btn btn-error text-white btn-sm"
        >
          Delete
        </button>
        <button onClick={() => navigate("update-product/"+_id)} className="btn btn-sm">
          Edit
        </button>
      </th>
    </tr>
  );
};

export default ProductRow;
