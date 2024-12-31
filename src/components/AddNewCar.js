import axios from "axios";
import { useEffect, useState } from "react";

function AddNewCar() {
    const [items, setItems] = useState([]);
    const [counts, setCounts] = useState([]); 
    const url_api = "http://127.0.0.1:8000/api/carItems";
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(url_api);
            setItems(res.data[0]);
            // Initialize counts based on the fetched items
            setCounts(new Array(res.data[0].length).fill(1));
        };

        const intarvel = setInterval(()=>{
            fetchData();
        },3000)
        return ()=>clearInterval(intarvel)
    }, [url_api]);
    const handleDelete =async (id)=>{
        try {
            const res = await axios.delete(`${url_api}/${id}`);
            console.log(res);            
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error("Error deleting item:", error);
        }

    }

    const handleIncrement = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const handleDecrement = (index) => {
        const newCounts = [...counts];
        if (newCounts[index] > 1) {
            newCounts[index] -= 1;
            setCounts(newCounts);
        }
    };

    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">My Car</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {items.map((product, index) => (
                                <div key={product.id} className="d-flex align-items-center my-2">
                                    <img src={product.image} style={{ width: "30px" }} alt={product.title} />
                                    <p className="mx-3" style={{ width: "30%" }}>{product.title}</p>
                                    <div>
                                        <i onClick={() => handleDecrement(index)} className="fa-solid fa-angles-left"></i>
                                        <input className="input mx-3" style={{ width: '30px' }} value={counts[index]} readOnly />
                                        <i onClick={() => handleIncrement(index)} className="fa-solid fa-angles-right"></i>
                                    </div>
                                    <button className="btn btn-outline-success ms-auto">Buy Now</button>
                                    <button onClick={()=>handleDelete(product.id)} className="btn btn-outline-danger ms-2">delete items</button>
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddNewCar;