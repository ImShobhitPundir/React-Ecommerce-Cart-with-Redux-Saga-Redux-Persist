import { PRODUCT_LIST,SET_PRODUCT_LIST } from "./constant"

export const productData = (data = [], action) => {
    switch (action.type) {
      /*  case PRODUCT_LIST:
            console.warn("product list reducer ", action)
            return [action.data]
            */

        case SET_PRODUCT_LIST:
            console.warn("product list from saga ", action)
            return [...action.data]

        default:
            return data
    }

}