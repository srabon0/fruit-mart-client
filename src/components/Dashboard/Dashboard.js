import React from "react";
import { Outlet,Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* <!-- Page content here --> */}
      <Outlet/>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
            <Link to='/dashboard/productlist' >Product list</Link>
          </li>
          <li>
            <Link to='/dashboard'>Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/payment' >Payment Method</Link>
          </li>
          <li>
            <Link to='/dashboard/addproduct' >Add Product</Link>
          </li>
       
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;
