import Logo from '../image/logo.jpg'
import { Link } from 'react-router';

function Navbar (){
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
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
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
                        <span className='number_items'>0</span>
                    </a>
                </div>
                <div className='car'>
                    <i className="fa-solid fa-cart-shopping fa-xl"></i>
                </div>
            </div>

        </div>
    </nav>
        </>
    );
}
export default Navbar