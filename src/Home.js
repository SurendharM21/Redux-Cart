import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartAction } from "./Redux/Actions/CartAction";

function Home(){

    const [details,setDetails] = useState()
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{

        const response = await axios.get("https://fakestoreapi.com/products")
        setDetails(response.data)
        
    }
    const dispatch = useDispatch()
    return(

        <div>
            <div className="container">

                <div className="row">
                    {
                        details && details.map((detail) => (


                            <div className="col-4">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img src={detail.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{detail.title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="Cart" class="btn btn-primary" onClick={()=> 
                                            {
                                                const action= CartAction(detail)
                                                dispatch(action)}}>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home