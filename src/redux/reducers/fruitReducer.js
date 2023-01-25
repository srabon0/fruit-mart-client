import { DELETE_FRUIT, LOAD_FRUITS, SET_TEST } from "../actionTypes/fruitActionType"

const initialState = {
    test:"test",
    fruits :[],
}

const fruitReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOAD_FRUITS:
            return {
                ...state,
                fruits:action.payload
            }
        case SET_TEST:
            return {
                ...state,
                test:action.payload
            }
        case DELETE_FRUIT:
            return {
                ...state,
                fruits:state.fruits.filter(aFruit=>aFruit._id!=action.payload)
            }
        default:
            return state

    }
}


export default fruitReducer;