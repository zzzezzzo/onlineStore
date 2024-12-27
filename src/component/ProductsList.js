import { useEffect } from "react";
import Product from "./Product";
import { useState } from "react";
import GetCategories from "./GetCategories";

function ProductsList(){
    const [products ,setProducts] = useState([])
    const api_url = 'https://fakestoreapi.com/products'
    useEffect(()=>{
        fetch(api_url).then(res=>res.json()).then(data=>setProducts(data))
    },[])
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