import axios from "axios"
import { loadFruitInStore} from "../actions/fruitAction";

const loadFruitData = ()=>{
    return async(dispatch,getState)=>{
        const url = "http://localhost:5000/api/v1/fruits";
        const {data} = await axios.get(url);
        console.log(data.fruits)
        if(data){
            dispatch(loadFruitInStore(data.fruits))
        }
    }
}

export default loadFruitData