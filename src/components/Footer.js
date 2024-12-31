function Footer(){
    return(
        <>
            <div className="container mt-5">
                <hr/>
                <div className="head-nav d-flex justify-content-between">
                    <div className="first_ul">
                        <ul className="d-flex justify-content-between" >
                            <li><a href="#">Home</a></li>
                            <li><a href="#" className="mx-5">About</a></li> 
                        </ul>
                    </div>
                    <div className="second_ul">
                        <ul className="d-flex justify-content-between">
                            <li><a href="#"><i className="fa-brands fa-facebook fs-2"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-whatsapp fs-2 mx-5"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright text-center">
                    <p > &#169;All rights reserved ZCODE 2024.</p>
                </div>
            </div>
        </>
    )
}
export default Footer