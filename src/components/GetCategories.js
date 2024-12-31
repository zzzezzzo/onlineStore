import { useEffect, useState } from "react"
import ProductsList from "./ProductsList";
import { Link } from "react-router";
import axios from "axios";

function GetCategories(){
    const [category, setCategory] = useState([]);
    const api_url = 'http://127.0.0.1:8000/api/categories'
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get(api_url);        
            setCategory(res.data)
        }
        fetchData();
    },[api_url])
    return(
        <>
            {category.map((item)=>{
                return(
                    <>
                        <Link key={item.id} to={`productCategory/${item.id}`} className="btn btn-success mx-4 my-5">{item.title}</Link>
                    </>
                )
            })}
        </>
    )
}
export default GetCategories