import { PRODUCT_LIST,PRODUCT_SEARCH } from "./constant"

export const productList =  () =>{
    //const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //data = await data.json();
    //const data = []
    //console.warn("product list action called",data)
    return {
        type:PRODUCT_LIST
    }
}

export const productSearch =  (query) =>{
    return {
        type:PRODUCT_SEARCH,
        query
    }
}