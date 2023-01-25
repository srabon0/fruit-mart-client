import { LOAD_FRUITS, SET_TEST ,DELETE_FRUIT, ADD_TO_CART} from "../actionTypes/fruitActionType";

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

/**
 * 
 * @param {*} payload = FruitData 
 * @returns  Cart
 */
export const addToCart = (payload) =>{
    console.log("Add to cart",payload)
    return {
        type:ADD_TO_CART,
        payload:payload
    }
}