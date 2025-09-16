

function Scroll() {
    return (

        <>
            <div id="offSlider">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/0a08b3795f997b1d.jpg?q=60" className="d-block w-100" alt="..."/>
                        </div>
                        {/* <div className="carousel-item">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/99cfe31c9ac32d0b.jpg?q=60" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/a315509552eeaf53.jpg?q=60" className="d-block w-100" alt="..."/>
                        </div> */}
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>

            <div id="offDate">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/230/image/c6e003e409dd71c8.jpg?q=80" alt="" />
            </div>
        </>
    )
}
export default Scroll;