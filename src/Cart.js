import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantityAction, reduceQuantityAction, removeCartAction } from "./Redux/Actions/CartAction";
import { useDispatch } from "react-redux";
function Cart(){

const cart=useSelector((state)=>state.cart.detail)
const dispatch = useDispatch()

    return(
        <div>
            <div className="container">

                <div className="row">
                    {
                        cart&& cart.map((cart) => (


                            <div className="col">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img src={cart.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{cart.title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="Cart" class="btn btn-primary">Buy Now</Link>
                                        <button to="Cart" class="btn btn-primary" onClick={()=>{
                                                const action= removeCartAction(cart.id)
                                                dispatch(action)}}>Remove</button>
                                 
                                  <button to="Cart" class="btn btn-primary" onClick={()=>{
                                                const action= addQuantityAction(cart.id)
                                                dispatch(action)}}>+</button>{cart.price}

                                         <button to="Cart" class="btn btn-primary" onClick={()=>{
                                                const action= reduceQuantityAction(cart.id)
                                                dispatch(action)}}>-</button> 

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link to="/" >Back to Home</Link>
            </div>
        </div>
    )
}

export default Cart