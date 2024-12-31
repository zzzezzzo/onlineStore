import { useEffect } from "react";
import Product from "./Product";
import { useState } from "react";
import GetCategories from "./GetCategories";
import { data } from "react-router";
import axios from "axios";

function ProductsList(){
    const [products ,setProducts] = useState([])
    const api_url = 'http://127.0.0.1:8000/api/products'
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get(api_url);
            const products = res.data
            setProducts(products)
        }
        fetchData();
        
    },[api_url])
    return(
        <>
            <div className="ourProducts" id="products"> 
                <h1 className="text-center text-dark my-4 display-3">Our Products</h1>
            </div>
            <div className="text-center" id="products"> 
                <GetCategories/>
            </div>
            <div className="fltaration">
                
            </div>
            <div className="container ">
                <div className="row ">
                    {products.map((product)=>{
                        return(
                            <>
                                <Product product={product} ShowDes={false} btnShow={true}/>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
export default ProductsList