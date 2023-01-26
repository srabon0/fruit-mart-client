import { combineReducers } from "redux";
import fruitReducer from "./fruitReducer";
import orderReducer from "./orderReducer";
const rootReducer =  combineReducers({
    fruitState:fruitReducer,
    orderState:orderReducer
});
export default rootReducer