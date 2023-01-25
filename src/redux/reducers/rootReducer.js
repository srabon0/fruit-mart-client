import { combineReducers } from "redux";
import fruitReducer from "./fruitReducer";
const rootReducer =  combineReducers({
    fruitState:fruitReducer,
});
export default rootReducer