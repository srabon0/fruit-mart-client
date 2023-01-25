import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/actions/fruitAction";
const Product = ({ fruit }) => {
  const dispatch= useDispatch()
  
  const navigate = useNavigate();
  const { _id, name, price, picture } = fruit;

  return (
    <div
      className="flex items-end overflow-hidden bg-cover rounded-lg h-[500px]"
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className="w-full px-8 py-2 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 ">
        <h2 className="mt-1 text-xl font-semibold text-gray-800 capitalize">
          {name}
        </h2>
        <p className="mt-2 text-lg tracking-wider text-blue-800">
        Price: ${price}
        </p>
        <p className="my-2  truncate">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
        <button
          onClick={() => {
            dispatch(addToCart(fruit))
          }}
          className="btn bg-orange-600 btn-sm text-white border-none mr-1"
        >
          Add to cart{" "}
        </button>
        <button
          onClick={() => {
            navigate(`/details/${_id}`);
          }}
          className="btn btn-success btn-sm text-white border-none ml-1"
        >
          Details{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
