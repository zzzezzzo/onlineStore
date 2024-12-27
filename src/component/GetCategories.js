import { useEffect, useState } from "react"
import ProductsList from "./ProductsList";
import { Link } from "react-router";

function GetCategories(){
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(res=>setCategory(res))
    },[])
    return(
        <>
            {category.map((item)=>{
                return(
                    <>
                        <Link to={`/productCategory/${item}`}  className="btn btn-success mx-4 my-5">{item}</Link>
                    </>
                )
            })}
        </>
    )
}
export default GetCategories