import { combineReducers } from "redux";
import fruitReducer from "./fruitReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";
const rootReducer =  combineReducers({
    fruitState:fruitReducer,
    orderState:orderReducer,
    userState:userReducer
});
export default rootReducer