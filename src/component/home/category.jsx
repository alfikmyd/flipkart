import Footer from "../footer";


function Category() {


    return (
        <>
            <div id="category">
                <div className="mint">
                    <a href="minute">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100" alt="minute" />

                        <span>Minutes</span>
                    </a>
                </div>
                <div className="mob">
                    <a href="mob">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" alt="mobile" />

                        <span>Mobiles & Tablets</span>
                    </a>
                </div>
                <div className="fashion">
                    <a href="fashion">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="fashion" />

                        <span>Fashion </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </a>
                </div>
                <div className="electronics">
                    <a href="electronics">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100" alt="" />

                        <span>Electronics</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </a>
                </div>
                <div className="furniture">
                    <a href="furniture">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100" alt="" />
                        <span>Home & Furniture</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </a>
                </div>
                <div className="tv">
                    <a href="tvs">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100" alt="" />
                        <span>TVs & Appliances</span>
                        
                    </a>
                </div>
                <div className="flight">
                    <a href="flight">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" alt="" />
                        <span>Flight Bokkings</span>
                    </a>
                </div>

            </div>
        </>
    )
}
export default Category;
