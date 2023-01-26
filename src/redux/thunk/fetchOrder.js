import axios from "axios"
import { loadOrderToStore } from "../actions/orderAction";

const loadAllOrders = ()=>{
    return async(dispatch,getState)=>{
        const url = "http://localhost:5000/api/v1/orders";
        const {data} = await axios.get(url);
        console.log(data.fruits)
        if(data){
            dispatch(loadOrderToStore(data.orders))
        }
    }
}

export default loadAllOrders