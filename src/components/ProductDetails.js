import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";
import axios from "axios";

function ProductDetails(){
    const prams = useParams();    
    const [product, setProduct] = useState([])
    const api_url = `http://127.0.0.1:8000/api/product/${prams.productId}`
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get(api_url)
            setProduct(res.data)
        }
        fetchData()
    },[api_url])
    return(
        <>
            <h1 className="display-1 text-center text-primary">Prodcut Details</h1>
                {<Product product={product} ShowDes={true} btnShow={false} />}
            
        </>
    );
}

export default ProductDetails