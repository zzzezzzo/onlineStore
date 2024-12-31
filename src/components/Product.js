import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";

function Product (props){
    const handelSubmit =(e)=>{
        e.preventDefault();
        const product_id = e.target.product_id.value
        const postData = async ()=>{
            axios.post('http://127.0.0.1:8000/api/products',{
                product_id: product_id
            })
        }
        postData();
    }
    const {product, ShowDes ,btnShow} = props;
    return(
        <>
            <div className="card col-4 mx-auto my-3" key={product.id}  >
                <img src={product.image} className="card-img-top" style={{width: '100%' , maxHeight: '120px'}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-primary">{product.title}</h5>
                    {ShowDes && <p className="card-title">{product.description}</p>}
                    <p className="card-text">{product.price}$</p>
                    <div className="d-flex">
                        {btnShow && <Link to={`/ProductDetails/${product.id}`} className="btn btn-primary">show more</Link>}
                        <form onSubmit={handelSubmit}>
                            <input type="hidden" name="product_id" value={product.id}/>
                            <button className="btn btn-dark ms-3">add Car</button>
                        </form>
                    </div>
                    
                </div>

            </div>

        </>
    );
}
export default Product