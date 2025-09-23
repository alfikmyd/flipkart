import { useEffect, useState } from "react";


const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/0a08b3795f997b1d.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/b480bd26b3ccc4e6.png?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/e2a2db0ec9e10311.jpeg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/b480bd26b3ccc4e6.png?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/fb6af354b4cf44ad.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/99cfe31c9ac32d0b.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/452de9f60d0956d5.jpeg?q=80"

];
function Scroll() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };


    return (

        <>
            <div id="offSlider">

                <div className="sliderImage">
                    <button className="pr" onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                    </button>

                    <img className="sImage" src={images[index]} alt="slider" />


                    <button className="nx" onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                </div>

                <div className="slideDot">
                    {images.map((_, i) => (
                        <span className="sDots" key={i} style={{ background: i === index ? "black" : "#cec9c9ff",
                            width : i === index ? "48px" : "12px"
                         }}
                            
                        ></span>
                    ))}
                </div>

                

            </div>

            <div id="offDate">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/230/image/c6e003e409dd71c8.jpg?q=80" alt="" />
            </div>
        </>
    )
}
export default Scroll;

