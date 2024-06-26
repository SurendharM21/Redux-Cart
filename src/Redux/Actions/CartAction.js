import React from "react";
import { addCart,removeCart,addQuantity,reduceQuantity} from "../Features/CartSlice";
import { useDispatch } from "react-redux";



export const CartAction = (action) =>{

    console.log("inside action")
   return{
    type: addCart.type,
    payload: action
   }
  };

export const removeCartAction =(action)=>{

    return{
        type: removeCart.type,
        payload: action

    }
}

export const addQuantityAction = (action)=>{
    return{
        type: addQuantity.type,
        payload: action
    }
}

export const reduceQuantityAction =(action)=>{
    return{
        type: reduceQuantity.type,
        payload: action
    }
}
