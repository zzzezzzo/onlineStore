import slider1 from '../image/slider2.jpg'
import slider2 from '../image/slider4.jpg'
import slider3 from '../image/slider5.avif'
function Slider(){
    return(
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1}   className="d-block  sliderImage" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2}  className="d-block  sliderImage" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slider3}   className="rounded mx-auto d-block sliderImage" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default Slider;