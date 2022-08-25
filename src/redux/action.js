import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART,UPDATE_TO_CART } from "./constant"


export const addToCart = (data) =>{
    //console.warn("action called",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const updateToCart = (data) =>{
    //console.warn("action called",data)
    return {
        type:UPDATE_TO_CART,
        data:data
    }
}

export const removeFromCart = (data) =>{
    //console.warn("remove action called",data)
    return {
        type:REMOVE_FROM_CART,
        data:data
    }
}

export const emptyCart = () =>{
    //console.warn("action called",data)
    return {
        type:EMPTY_CART
    }
}