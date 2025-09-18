import { useState } from "react";
import '../home/header.css';
import FaDrop from "./FaDrop";


function Category() {
    const [fashion, setFashion] = useState(false)



    return (
        <>
            <div id="category">
                <div className="categ" style={{ margin: "0px" }}>
                    <a href="min">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100" alt="minute" />

                        <span>Minutes</span>
                    </a>
                </div>
                <div className="categ" style={{ margin: "0px", marginLeft: "46px" }}>
                    <a href="mob">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" alt="mobile" />

                        <span>Mobiles & Tablets</span>
                    </a>
                </div>


                <div className="categoryC">
                    <div className="categ" style={{ cursor: "default", margin: "0px", marginLeft: "42px" }}
                        onMouseOver={() => setFashion(true)} onMouseOut={() => setFashion(false)}
                    >
                        <a href="fashion" >
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="fashion" />


                            <span>Fashion <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                            </span>
                        </a>
                        {fashion && (
                        <div className="fashionDrop">
                            <div className="fashColOne">
                                <span >Men's Top Wear</span>
                                <span >Men's Bottom Wear</span>
                                <span >Women Ethnic</span>
                                <span >Men Footwear</span>
                                <span >Women Footwear</span>
                                <span >Watches and Accessories</span>
                                <span >Women Western</span>
                                <span >Bags, Suitcases & Luggage</span>
                                <span >Kids</span>
                                <span >Essentials</span>
                                <span >Winter</span>
                            </div>
                        </div>
                        )}
                    </div>
                </div>



                <div className="categ" style={{ margin: "0px", cursor: "default", marginLeft: "42px" }}>
                    <a href="electronics">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100" alt="" />


                        <span>Electronics  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                        </span>
                    </a>
                </div>
                <div className="categ" style={{ margin: "0px", marginLeft: "31px" }}>
                    <a href="furniture">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100" alt="" />

                        <span>Home & Furniture  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                        </span>
                    </a>
                </div>
                <div className="categ" style={{ margin: "0", marginLeft: "31px" }}>
                    <a href="tvs">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100" alt="" />
                        <span>TVs & Appliances</span>

                    </a>
                </div>
                <div className="categ" style={{ margin: "0px", marginLeft: "33px" }}>
                    <a href="flight">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" alt="" />
                        <span>Flight Bookings</span>
                    </a>
                </div>
                <div className="categ" style={{ margin: "0px", marginLeft: "31px" }}>
                    <a href="beauty">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100" alt="" />

                        <span>Beauty, Food.. <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                        </span>
                    </a>

                    {/* <div className="catDrop">
                        <div className="partOne" style={{display:"flex",flexDirection:"column"}}>
                            <span>Beauty & Personal Care</span>
                            <span>Men's Grooming</span>
                            <span>Food & Drinks</span>
                            <span>Nutrition & Health Care</span>
                            <span>Baby Care</span>
                            <span>Toys & School Supplies</span>
                            <span>Sports & Fitness</span>
                            <span>Books</span>
                            <span>Music</span>
                            <span>Stationary & Office Supplies</span>
                            <span>Auto Accessories</span>
                            <span>Safety & Hygiene Essentials</span>
                        </div>
                        <div className="partTwo" style={{display:"flex",flexDirection:"column"}}>
                            <span>More in Beauty & Personal Care</span>
                            <span>View All</span>
                            <span>Bath & Oral Care</span>
                            <span>Personal Hygiene</span>
                            <span>Eye Makeup</span>
                            <span>Face Makup</span>
                            <span>Lip Makeup</span>
                            <span>Hair Care</span>
                            <span>Beth Essentials</span>
                            <span>Women's Personal Hygiene</span>
                            <span>Body & Skin Care</span>
                            <span>Top Brand Deals</span>
                        </div>
                    </div> */}
                </div>
                <div className="categ" style={{ margin: "0px", marginLeft: "53px" }}>
                    <a href="grocery">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100" alt="" />
                        <span>Grocery</span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Category;
