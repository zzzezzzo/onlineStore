import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";
import axios from "axios";

function ItemsCategory() {
    const prams = useParams();
    const [product, setItemsCategory] = useState([]);
    const api_url = `http://127.0.0.1:8000/api/products/${prams.category}`;
    useEffect(() => {
        const fetchData = async ()=>{
            const res = await axios.get(api_url);
            console.log(res);
            setItemsCategory(res.data)
        }
        fetchData()
    }, [api_url]);
    return (
    <>
        <div className="row container mx-auto">
            <h2 className="my-5 text-center display-2"><span className="text-primary"></span> products</h2>
            {product.map((product) => {
            return (
                <>
                    <Product product={product} btnShow={true} ShowDes={true} />
                </>
            );
            })}
        </div>
    </>
);
}
export default ItemsCategory;
