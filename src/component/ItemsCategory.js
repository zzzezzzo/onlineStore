import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";

function ItemsCategory() {
    const prams = useParams();
    const [product, setItemsCategory] = useState([]);
    useEffect(() => {
        const api_url = "https://fakestoreapi.com/products/category";
        fetch(`${api_url}/${prams.category}`)
        .then((res) => res.json())
        .then((res) => setItemsCategory(res));
    }, []);
    return (
    <>
        <div className="row container mx-auto">
            <h2 className="my-5 text-center display-2"><span className="text-primary">{prams.category}</span> product</h2>
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
