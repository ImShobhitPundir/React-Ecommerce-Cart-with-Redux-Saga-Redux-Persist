import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, UPDATE_TO_CART } from "./constant"

export const cartData = (data = [], action) => {
    switch (action.type) {
       
        case ADD_TO_CART:
            //console.warn("add to cart action",action)
            let res = data.find(item => item.id.toString().includes(action.data.id));
            if (res) {
                data.map((item) => (
                    item.id === action.data.id ?
                        item.quantity = item.quantity + 1
                        : null
                ))
                return [...data]
            }
            action.data.quantity = 1;
            return [...data,action.data]

        case UPDATE_TO_CART:

            //let res1 = data.find(item => item.id.toString().includes(action.data.id));
            let res1 = data.find(item => item.id === action.data.id);
            if (res1){
                data.map((item) => (
                    item.id === action.data.id && item.quantity > 1?
                        item.quantity = item.quantity - 1
                        : null
                ))
                return [...data]
            }
            return [...data]

        case REMOVE_FROM_CART:
            //console.warn("remove reducer",action);
            //data.length = data.length?data.length-1:[];
            const remainigItems = data.filter((item) => item.id != action.data)
            return [...remainigItems]

        case EMPTY_CART:
            data = [];
            return [...data]

        default:
            return data
    }

}