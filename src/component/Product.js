import { Link } from "react-router";

function Product (props){
    const {product, ShowDes ,btnShow} = props;
    return(
        <>
            <div className="card col-4 mx-auto my-3" key={product.id}  >
                <img src={product.image} className="card-img-top" style={{width: '100%' , maxHeight: '120px'}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-primary">{product.title}</h5>
                    {ShowDes && <p className="card-title">{product.description}</p>}
                    <p className="card-text">{product.price}$</p>
                    {btnShow && <Link to={`/ProductDetails/${product.id}`} className="btn btn-primary">show more</Link>}
                    
                </div>
            </div>
        </>
    );
}
export default Product