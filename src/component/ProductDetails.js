import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";

function ProductDetails(){
    const prams = useParams();    
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${prams.productId}`)
        .then(res=>res.json())
        .then(res=>setProduct(res))

        
        

    },[])
    return(
        <>
            <h1 className="display-1 text-center text-primary">Prodcut Details</h1>
                {<Product product={product} ShowDes={true} btnShow={false} />}
            
        </>
    );
}

export default ProductDetails