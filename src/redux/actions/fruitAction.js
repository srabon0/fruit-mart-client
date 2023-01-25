import { LOAD_FRUITS, SET_TEST ,DELETE_FRUIT} from "../actionTypes/fruitActionType";

export const loadFruitInStore = (payload) =>{
    console.log("sending payload ", payload)
    return {
        type:LOAD_FRUITS,
        payload:payload
    }
}
export const deleteFruitFromStore = (payload) =>{
    console.log("deleteting", payload)
    return {
        type:DELETE_FRUIT,
        payload:payload
    }
}

export const test = (payload) =>{
    console.log("setting tresx")
    return {
        type:SET_TEST,
        payload:payload
    }
}