import { useEffect, useState } from 'react';
import Logo from '../image/logo.jpg'
import { Link } from 'react-router';
import axios from 'axios';

function Navbar (){
    const [items, setItems] = useState([])
    useEffect(()=>{
        const fetchData = async ()=> {
            const res = await axios.get("http://127.0.0.1:8000/api/carItems")            
            setItems(res.data[1])
        }
        const interval = setInterval(()=>{
            fetchData()
        },1000)
        return ()=>clearInterval(interval)
    },[])
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
                <a className="navbar-brand" href="#"><img className='imgLogo' src={Logo} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/AboutProducts">about</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#products">products</a>
                    </li>
                </ul>
            </div>
            <div className='shoping_car'>
                <div>
                    <a>
                        <span className='number_items'>{items}</span>
                    </a>
                </div>
                <div className='car'>
                    <i  data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="fa-solid fa-cart-shopping fa-xl"></i>
                </div>
            </div>

        </div>
    </nav>
        </>
    );
}
export default Navbar