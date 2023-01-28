import axios from "axios"
import { loadOrderToStore } from "../actions/orderAction";

const loadUserOrders = (email)=>{
    return async(dispatch,getState)=>{
        console.log("sing ping", email);
        const url = `http://localhost:5000/api/v1/orders/userwise/${email}`;
        const {data} = await axios.get(url);
        if(data){
            dispatch(loadOrderToStore(data.userorder))
        }
    }
}

export default loadUserOrders;