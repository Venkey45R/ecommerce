import { Provider } from "react-redux";
import { ActionTypes } from "../../constants/action-types"
export const set_products = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};
export const selected_Products = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};