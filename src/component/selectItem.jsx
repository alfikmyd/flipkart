import Similar from "./suggestItem";


function SelectedItem() {

    return (
        <>
            <div id="sepItem" style={{ backgroundColor: "white", marginTop: "58px", marginLeft: "14.1%", marginRight: "14.1%", letterSpacing: ".3px" }}>
                <div id="iDetail">
                    <div id="iLeft">
                        <div className="iList">
                            <div className="listImage" >
                                <ul>
                                    <li><img src="https://rukminim2.flixcart.com/image/128/128/xif0q/computer/h/t/t/-original-imahcd9hhh6y4knb.jpeg?q=70&crop=false" alt="" /></li>
                                    <li><img src="https://rukminim2.flixcart.com/image/128/128/xif0q/computer/h/t/t/-original-imahcd9hhh6y4knb.jpeg?q=70&crop=false" alt="" /></li>
                                    <li><img src="https://rukminim2.flixcart.com/image/128/128/xif0q/computer/r/4/p/-original-imahcd9hzmubfynx.jpeg?q=70&crop=false" alt="" /></li>
                                    <li><img src="https://rukminim2.flixcart.com/image/128/128/xif0q/computer/n/t/s/-original-imahcd9hyrsyvp4p.jpeg?q=70&crop=false" alt="" /></li>
                                    <li><img src="https://rukminim2.flixcart.com/image/128/128/xif0q/allinone-desktop/c/k/n/-original-imahcd99hb9jznvn.jpeg?q=70&crop=false" alt="" /></li>
                                    <li><img src="https://rukminim2.flixcart.com/image/128/128/xif0q/allinone-desktop/x/z/z/-original-imahcd99kjrrunhu.jpeg?q=70&crop=false" alt="" /></li>
                                    <li><img src="https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/f/d/-original-imahcd9hwvxytr4y.jpeg?q=70&crop=false" alt="" /></li>
                                    <li><img src="https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/f/c/-original-imahcd9hb2qkwfcb.jpeg?q=70&crop=false" alt="" /></li>
                                </ul>
                            </div>
                            <div className="iImage">
                                <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/computer/h/t/t/-original-imahcd9hhh6y4knb.jpeg?q=70&crop=false" alt="" />
                                <div className="iWish">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#b8b5b5ff" className="x1UMqG" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className="iButton">
                            <button id="toCart"><svg className="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg> ADD TO CART</button>
                            <button id="buy"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16">
                                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
                            </svg> BUY NOW</button>
                        </div>
                    </div>

                    <div id="iRight">
                        <div className="iPath">
                            <div style={{ color: "#949191ff", fontSize: "11px" }}>
                                <span>Home</span>
                                <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                                <span style={{ marginLeft: "6px" }}>Computers</span>
                                <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                                <span style={{ marginLeft: "6px" }}>Laptops</span>
                                <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                                <span>Laptop Name...</span>
                                <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                                <span>Laptop Intel...</span>

                            </div>
                            <div style={{ display: "flex", gap: "10px", marginLeft: "37%", marginTop: "-16px" }}>
                                <label>
                                    <input type="checkbox" value="compare" /> Compare
                                </label>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="jWKn+i"><path d="M14.78 5.883L9.032 0v3.362C3.284 4.202.822 8.404 0 12.606 2.053 9.666 4.927 8.32 9.032 8.32v3.446l5.748-5.883z" className="g9gS7K" fill="#c2c2c2" fillRule="evenodd"></path></svg>
                                    <span> Share</span></p>
                            </div>
                        </div>

                        <div className="ibrandDetail" style={{ marginTop: "-25px" }}>
                            <h3 style={{ fontWeight: "400", fontSize: "17.5px" }}>CHUWI Intel Celeron Dual Core 11th Gen N4020 - (8 GB/256 GB SSD/Windows 11 Home) HeroBook Pro Laptop (14.1 inch, Grey, 1.39 kg)</h3>

                            <div className="ibrandButton" style={{ marginTop: "-18px" }}>
                                <button style={{ cursor: "pointer", height: "18px" }}>3.7 *</button>
                                <span style={{ color: "#878787", fontWeight: "bold", fontSize: "13px", marginTop: "-5px" }}>1,728 Ratings & 207 Reviews</span>
                            </div>
                            <span style={{ color: "#388e3c", fontSize: "12px", fontWeight: "bold", marginTop: "-1px" }}>Specail price</span>

                            <div className="iPrice">
                                <span style={{ fontSize: "28px", fontWeight: "bold" }}>₹18,990</span>
                                <span style={{ fontSize: "16px", color: "#878787", textDecoration: "line-through" }}>₹34,990</span>
                                <span style={{ color: "#388e3c", fontSize: "16px", fontWeight: "bold" }}>45% off</span>
                                <span className="i">i</span>
                            </div>
                            <span style={{ marginTop: "-6px" }}>+ ₹59 Protect Promise Fee <a href="#">Learn more</a></span>
                            <span style={{ marginTop: "-10px" }}>Secure delivery by 11 Sep, Thursday</span>

                            <div className="iOffers">
                                <span style={{ fontSize: "16px", fontWeight: "bold" }}>Available offers</span>
                                <div style={{ display: "flex", flexDirection: "column", lineHeight: "28px" }}>
                                    <span style={{ marginTop: "-6px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
                                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>  <b> Bank Offer</b> 5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter <a href="#">T&C</a>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
                                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg> <b> Bank Offer</b> 5% cashback on flipkart SBI Credit Card upto ₹4,000 per calendar quarter <a href="#">T&C</a>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
                                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg> <b>Bank Offer</b> 5% cashback on Axis Bank Flipkart Debit Card <a href="#">T&C</a>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
                                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg> <b>Special Price</b> Get extra 20% off (price inclusive of cashback/coupon) <a href="#">T&C</a>
                                    </span>
                                </div>
                                <span style={{ marginTop: "-3px" }}><a href="#">View 2 more offers</a></span>
                            </div>

                            {/* <div className="selectExchange">
                                <div id="excActive" style={{backgroundColor:"#f5faff"}}>
                                    <label >
                                        <input type="radio" checked/>
                                        <span> Buy without Exchange</span>
                                        <span style={{marginLeft:"40%",fontWeight:"bold"}}>₹18,990</span>
                                    </label>
                                </div>
                                <div style={{display:"flex",flexDirection:"column",lineHeight:'20px',marginTop:"-1px",color:"#838282ff",cursor:"not-allowed"}}>
                                    <label style={{marginTop:"5px",cursor:"not-allowed"}}>
                                        <input type="radio" disabled style={{cursor:"not-allowed"}}/>
                                        <span> Buy with Exchange</span>
                                        <span style={{marginLeft:"30%"}}>up to ₹14,000 off</span>
                                    </label>
                                    <span style={{color:"red",marginTop:"10px",marginLeft:"25px"}}>Enter pincode to check if exchange is avilable</span>
                                </div>
                            </div> */}

                            <div className="iWarranty" style={{ display: "flex", marginTop: "10px" }}>
                                <img src="https://rukminim2.flixcart.com/image/160/160/cms-brand/5cfb5596ed0ba9eb03be5ce53b9eb3c7f0d54faf6c76e6f40897f55d08b6548c.png?q=90" alt="" />

                                <span>1 Year Onsite Warranty</span>
                                <a href="#">Know More</a>
                            </div>


                            <div className="iDelivery">
                                <span style={{ color: "#929191ff", fontWeight: "bold" }}>Delivery</span>
                                <div className="delivAdrs">
                                    <label>
                                        <input type="text" placeholder="Enter Delivery Pincode" maxLength="6" />
                                        <a href="#">Check</a>
                                    </label>
                                    <span style={{ fontWeight: "bold", marginTop: "5px" }}>Delivery by 13 Sep, Saturday <span className="delivQues">?</span></span>
                                    <span style={{ fontSize: "11px", letterSpacing: ".5px", marginTop: "-7px" }}>if ordered before 11:18 AM</span>
                                    <span style={{ fontWeight: "bold" }}>Installation & Demo by 12 Sep, Friday <span style={{ color: "#b9b8b8ff" }}>|</span> ₹599</span>
                                    <a style={{ marginTop: "5px" }} href="#">View Details</a>
                                </div>
                            </div>

                            <div className="highlSection" style={{ display: "flex", marginTop: "8px" }}>
                                <div className="iHighlight" style={{ display: "flex" }}>
                                    <span style={{ color: "#878787", fontWeight: "bold" }}>Highlights</span>
                                    <ul>
                                        <li><span>Light Laptop without Optical Disk Drive</span></li>
                                        <li><span>14.1 inch Full HD</span></li>
                                    </ul>
                                </div>
                                <div className="iPayment" style={{ display: "flex", marginLeft: "40px" }}>
                                    <span style={{ color: "#878787", fontWeight: "bold", maxWidth: "100px" }}>Easy Payment Options</span>
                                    <ul style={{ marginLeft: "-12px" }}>
                                        <li><span>EMI starting from ₹688/month</span></li>
                                        <li><span>Cash on Delivery</span></li>
                                        <li><span>Net banking & Credit/ Debit/ ATM card</span></li>
                                        <a style={{ marginTop: "3px" }} href="View">View Details</a>
                                    </ul>

                                </div>
                            </div>

                            <div className="iSeller" style={{ display: "flex" }}>
                                <span style={{ color: "#878787", fontWeight: "bold" }}>Seller</span>
                                <div style={{ display: "block", marginLeft: "75px" }}>
                                    <a href="#">TheElefANT <button>4.1 ★</button></a>
                                    <ul style={{ color: "#a1a1a1ff", marginLeft: "-25px", marginTop: "7px" }}>
                                        <li><span style={{ color: "black" }}>7 Days Brand Support <span className="sellerQues">?</span></span></li>
                                    </ul>
                                    <a style={{ marginTop: "-5px" }} href="sell">See other sellers</a>
                                </div>
                            </div>

                            <div className="iDescription">
                                <span style={{ color: "#878787", fontWeight: "bold" }}>Description</span>
                                <span style={{ marginLeft: "39px", lineHeight: "20px", marginTop: "5px", maxWidth: "670px" }}>This HeroBook Pro laptop is packed with an array of features to provude seamless operations. Equipped with a 35.81 cm (14.1) IPS screen to view the visuals in 1920x1080 UHD resolution with
                                    utmost detailing.This laptop features a poowerful Intel Celeron N4020 processor and UHD Graphics 600 so you can enable smooth and efficient multitasking and 4K video playback.
                                    The 38 Wh polymer lithium-ion battery offers long-lasting battery life so you can enjoy uninterrupted performancen for up to 9 hours.
                                    This laptop comes with multiple connectivity ports to offer seamless connections to enhance your productivity.
                                </span>
                            </div>
                        </div>
                        <div id="description">
                            <div style={{ padding: "21.5px" }}>
                                <span style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: ".1px", marginLeft: "7px" }}>Product Description</span>
                            </div>
                            <div className="ips" style={{ padding: "27.5px" }}>
                                <div style={{ border: "none", marginTop: "-20px" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "500" }}>IPS Display</h3>
                                    <span>The HeroBook Pro laptop features a large 35.81 cm (14.1) IPS screen to offer a wide vision and UHD resolution (1920x1080). You can view every visual with
                                        utmost clarity and detail. The night mode and colour setting of this laptop reduce eye fatigue and
                                        strain during prolonged usage or dim light settings.
                                    </span>
                                </div>
                                <img style={{ width: "168px", height: "168px", marginTop: "-2px", marginLeft: "5px" }} src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/d87a624129ad4254a67015d660f039a6_18ae1abe3b5_-original-imagrfsb9ntehrey.jpeg?q=90" alt="" />
                            </div>
                            <div className="smartPro" style={{ padding: "27px" }}>
                                <img style={{ width: "168px", height: "168px", marginTop: "-3px", marginLeft: "-1px" }} src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/14339805697d4cd99556fa324d64dda4_18ae1abc6e9_-original-imagrfsbvhm5khwy.jpeg?q=90" alt="" />
                                <div style={{ border: 'none', marginLeft: "23px", marginTop: "-22px" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "500" }}>Smart Processor</h3>
                                    <span style={{ marginTop: "-10px" }}>This laptop is equipped with a powerful Intel Celeron N4020 processor and UHD Graphics 600 which allows you to seamlessly multitask and enjoy
                                        smooth 4K video playback. With up to 8 GB of RAM and up to 256 GB of SSD, this laptop provides smart performance and efficient storage to enhance your productivity.
                                    </span>
                                </div>
                            </div>
                            <div style={{ marginTop: "-1px", cursor: "pointer", padding: "25px" }}>
                                <a href="feature">View all features</a>
                            </div>
                        </div>

                        <div id="specification">
                            <div style={{ padding: "21.5px" }}>
                                <span style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: ".1px", marginLeft: "7px" }}>Specification</span>
                            </div>
                            <div style={{ padding: "25px", marginTop: "-1px" }}>
                                <h3 style={{ fontSize: "18px", fontWeight: "500", marginTop: "3px" }}>Warranty</h3>
                                <table style={{ fontSize: "13px", lineHeight: "29px", marginTop: "-4px" }}>
                                    <tr>
                                        <td className="blur">Warranty Summary</td>
                                        <td style={{ marginLeft: "20px" }}>1 Year Onsite Warranty</td>
                                    </tr>
                                    <tr>
                                        <td className="blur">Warranty Service type</td>
                                        <td style={{ marginLeft: "20px" }}>Service Center</td>
                                    </tr>
                                    <tr>
                                        <td className="blur">Convered in Warranty</td>
                                        <td style={{ marginLeft: "20px" }}>Manufacturing Defects</td>
                                    </tr>
                                    <tr>
                                        <td className="blur">Not Covered in Warranty</td>
                                        <td style={{ marginLeft: "20px" }}>Water & Physical Damage</td>
                                    </tr>
                                    <tr>
                                        <td className="blur">Domestic Warranty</td>
                                        <td style={{ marginLeft: "20px" }}>1 Year</td>
                                    </tr>
                                </table>
                            </div>
                            <div style={{ marginTop: "-1px", padding: "5px", paddingLeft: "23px" }}>
                                <h3 style={{ color: "#979595ff", fontWeight: "530" }}>Processor And Memory Features</h3>
                                <span style={{ color: "#e0e0e0ff", fontSize: "13px" }}>Dedicated Graphic Memory <span style={{ marginLeft: "20px" }}>DDR4</span></span>
                            </div>
                            <div style={{ marginTop: "-1px", padding: "25px", cursor: "pointer" }}>
                                <a href="read">Read More</a>
                            </div>
                        </div>


                        <div id="combo">
                            <div id="comboCol-one" style={{ border: "1px solid #f1f1f1" }}>
                                <span style={{ fontSize: "24px", fontWeight: "bold", cursor: "default" }}>Buy together and save upto 10%</span>
                                <div className="comboItem">
                                    <div className="one" style={{ paddingRight: "15px" }}>
                                        <a href="chuwi">
                                            <div className="comboImage">
                                                <img style={{ marginRight: "92px", marginTop: "9px", paddingBottom: "40px" }} src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/t/t/-original-imahcd9hhh6y4knb.jpeg?q=70&crop=false" alt="" />
                                            </div>

                                            <span style={{ fontSize: "13px", llineHeight: "20px" }}>CHUWI Intel Celeron Dual Core 11th Gen N4020 - (8 GB/256 GB SSD/W...</span>
                                        </a>
                                        <div >
                                            <div className="comboRate">
                                                <button>3.7 ★</button>
                                                <span className="rateCount">(1,735)</span>
                                            </div>
                                            <div style={{ marginTop: "7px" }}>
                                                <span className="origin">₹18,990</span>
                                                <span className="old">₹34,990</span>
                                                <span className="percent">45% off</span>
                                            </div>
                                        </div>
                                    </div>

                                    <span className="comboPlus" style={{}}>+</span>

                                    <div className="two" style={{ paddingLeft: "20px" }}>
                                        <a href="mouse">
                                            <div className="comboImage">
                                                <input type="checkbox" />
                                                <img style={{ marginRight: "22px", paddingBottom: "30px" }} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mouse/d/d/2/-original-imahbg3mcksqv9pq.jpeg?q=70&crop=false" alt="" />
                                            </div>

                                            <span style={{ fontSize: "13px", lineHeight: "20px" }}>Logitech B175 / Optical Tracking, 12-Months Battery Life, Ambidex</span>
                                        </a>
                                        <div>
                                            <div className="comboRate">
                                                <button>4.4 ★</button>
                                                <span className="rateCount">(1,72,552)</span>
                                            </div>
                                            <div style={{ marginTop: "7px", gap: "10px" }}>
                                                <span className="origin">₹535</span>
                                                <span className="old">₹595</span>
                                                <span className="percent">10% off</span>
                                            </div>
                                            <span style={{ fontSize: "11px", color: "#388e3c", macWidth: "max-content" }}>Special price if bought with this item</span>
                                        </div>
                                    </div>

                                    <span className="comboPlus" style={{ marginTop: "78px", marginRight: "33px" }}>+</span>

                                    <div className="three" style={{}}>
                                        <a href="keyboard">
                                            <div className="comboImage">
                                                <input type="checkbox" />
                                                <img style={{ marginRight: "25px", marginTop: "32px", paddingBottom: "56px" }} src="https://rukminim2.flixcart.com/image/312/312/kyhlfgw0/keyboard/desktop-keyboard/c/p/1/330-mouse-keyboard-combo-hp-original-imagapd3yucmbby4.jpeg?q=70&crop=false" alt="" />
                                            </div>

                                            <span style={{ fontSize: "13px", lineHeight: "20px" }}>HP 330 Mouse & Keyboard Combo Wireless Standard Desktop Keyboard ...</span>
                                        </a>
                                        <div>
                                            <div className="comboRate">
                                                <button>4.2 ★</button>
                                                <span className="rateCount">(18,025)</span>
                                            </div>
                                            <div style={{ marginTop: "7px" }}>
                                                <span className="origin">₹1,299</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div id="comboCol-two">
                                <span style={{ fontSize: "12px", fontWeight: "bold" }}>Please add at least 1 add-on item to proceed</span>
                                <button><svg className="XWLYwr" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg> ADD TO CART</button>
                            </div>
                        </div>

                        <div id="ratingReview" >
                            <div style={{ border: "1px solid #f0efefdd", padding: "27px", paddingLeft: "27px" }}>
                                <div id="reviewHead" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span>Ratings & Reviews</span>
                                    <button>Rate Product</button>
                                </div>

                                <div id="reviewStar" style={{ marginTop: "30px", display: "flex" }}>
                                    <div className="reviewRate" >
                                        <div className="reviewHead">
                                            <span style={{ fontSize: "32px", color: "black" }}>3.7★</span>
                                            <span style={{ marginTop: "13px" }}>1,738 Ratings & </span>
                                            <span>209 Reviews</span>
                                        </div>
                                        <div>
                                            <div className="rateD" >
                                                <span style={{ fontWeight: "bold", maxWidth: "max-content" }}>5★</span>
                                                <div className="rateDiagram" >
                                                    <span className="diagone"></span>
                                                </div>
                                                <span style={{ marginLeft: "14px", color: "#878787", marginTop: "-4px" }}>841</span>
                                            </div>
                                            <div className="rateD">
                                                <span style={{ fontWeight: "bold" }}>4★</span>
                                                <div className="rateDiagram">
                                                    <span className="diagTwo"></span>
                                                </div>
                                                <span style={{ marginLeft: "14px", color: "#878787", marginTop: "-4px" }}>273</span>
                                            </div>
                                            <div className="rateD">
                                                <span style={{ fontWeight: "bold" }}>3★</span>
                                                <div className="rateDiagram">
                                                    <span className="diagThree"></span>
                                                </div>
                                                <span style={{ marginLeft: "14px", color: "#878787", marginTop: "-4px" }}>194</span>
                                            </div>
                                            <div className="rateD">
                                                <span style={{ fontWeight: "bold" }}>2★</span>
                                                <div className="rateDiagram">
                                                    <span className="diagFour"></span>
                                                </div>
                                                <span style={{ marginLeft: "14px", color: "#878787", marginTop: "-4px" }}>110</span>
                                            </div>
                                            <div className="rateD">
                                                <span style={{ fontWeight: "bold" }}>1★</span>
                                                <div className="rateDiagram">
                                                    <span className="diagFive"></span>
                                                </div>
                                                <span style={{ marginLeft: "14px", color: "#878787", marginTop: "-4px" }}>320</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="reviewPerform">
                                        <a href="chuwi">
                                            <div className="rateRound">
                                                <svg className="y5U2lD" viewBox="0 0 100 100">
                                                    <path className="FhjqaA" d="M50,4 A 46,46,0,1,1,49.9999,4" strokeWidth="8" fillOpacity="0"></path>
                                                    <path className="ucl9bG" d="M50,4 A 46,46,0,1,1,4.814786466480328,58.61954047094337" strokeWidth="8" fillOpacity="0"></path>
                                                    <text className="_2DdnFS" x="35" y="57">3.2</text>
                                                </svg>
                                            </div>
                                            <span style={{ fontSize: "13px", fontWeight: "bold", marginTop: "-6px" }}>Performance</span>
                                        </a>

                                        <a href="chuwi">
                                            <div className="rateRound">
                                                <svg className="y5U2lD" viewBox="0 0 100 100">
                                                    <path className="FhjqaA" d="M50,4 A 46,46,0,1,1,49.9999,4" strokeWidth="8" fillOpacity="0"></path>
                                                    <path className="ucl9bG" d="M50,4 A 46,46,0,1,1,4.814786466480328,58.61954047094337" strokeWidth="8" fillOpacity="0"></path>
                                                    <text className="_2DdnFS" x="35" y="57">3.2</text>
                                                </svg>
                                            </div>
                                            <span style={{ fontSize: "13px", fontWeight: "bold", marginTop: "-6px" }}>Battery</span>
                                        </a>

                                        <a href="chuwi">
                                            <div className="rateRound">
                                                <svg className="y5U2lD" viewBox="0 0 100 100">
                                                    <path className="FhjqaA" d="M50,4 A 46,46,0,1,1,49.9999,4" strokeWidth="8" fillOpacity="0"></path>
                                                    <path className="ucl9bG" d="M50,4 A 46,46,0,1,1,4.814786466480328,58.61954047094337" strokeWidth="8" fillOpacity="0"></path>
                                                    <text className="_2DdnFS" x="35" y="57">3.6</text>
                                                </svg>
                                            </div>
                                            <span style={{ fontSize: "13px", fontWeight: "bold", marginTop: "-6px" }}>Design</span>
                                        </a>

                                        <a href="chuwi">
                                            <div className="rateRound">
                                                <svg className="y5U2lD" viewBox="0 0 100 100">
                                                    <path className="FhjqaA" d="M50,4 A 46,46,0,1,1,49.9999,4" strokeWidth="8" fillOpacity="0"></path>
                                                    <path className="ucl9bG" d="M50,4 A 46,46,0,1,1,4.814786466480328,58.61954047094337" strokeWidth="8" fillOpacity="0"></path>
                                                    <text className="_2DdnFS" x="35" y="57">3.6</text>
                                                </svg>
                                            </div>
                                            <span style={{ fontSize: "13px", fontWeight: "bold" }}>Display</span>
                                        </a>
                                    </div>
                                </div>

                                <div id="proImage">
                                    <img src="https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_0cd65418db3b46aa82ef46938d9bd078.jpg?q=90" alt="..." />
                                    <img src="https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83966b4b8e324fe2b6f34fe97330c1a5.jpg?q=90" alt="" />
                                    <img src="https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_19a7ceaca6044e48a6e7584eb6a54b5a.jpg?q=90" alt="...." />
                                    <span>+ 61</span>
                                </div>

                            </div>

                            <div id="rateComntOne">
                                <div style={{ marginBottom: "14px" }}>
                                    <button className="comntBtn">5 ★</button>
                                    <span style={{ fontWeight: "bold", marginLeft: "10px" }}>Perfect product!</span>
                                </div>
                                <span>Laptop is a Good But Battery Problem.. Continue use 4 to 5 hour's is Battery Backup..</span>
                                <div style={{ display: "flex", marginTop: "15px", gap: "4px", cursor: "pointer" }}>
                                    <img src="https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_0cd65418db3b46aa82ef46938d9bd078.jpg?q=90" alt="..." />
                                    <img src="https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_83966b4b8e324fe2b6f34fe97330c1a5.jpg?q=90" alt="" />
                                </div>
                                <div className="cusName" >
                                    <div>
                                        <span style={{ fontWeight: "bold" }}>Mohan Jigale</span>
                                        <span style={{ marginLeft: "7px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="14" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                            Certified Buyer, Nanded Nov, 2023
                                        </span>
                                    </div>
                                    <div className="cusLike">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                        </svg> 282</span>
                                        <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="16" fill="currentColor" className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                            <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591" />
                                        </svg> 67</span>
                                        <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </div>
                                </div>
                            </div>
                            <div id="rateComntTwo">
                                <div style={{ marginBottom: "14px" }}>
                                    <button className="comntBtn">5 ★</button>
                                    <span style={{ fontWeight: "bold", marginLeft: "10px" }}>Perfect Product!</span>
                                </div>
                                <span>Nice 🙂</span>
                                <div style={{ display: "flex", marginTop: "15px", gap: "4px", cursor: "pointer" }}>
                                    <img src="https://rukminim1.flixcart.com/blobio/178/178/imr/blobio-imr_19a7ceaca6044e48a6e7584eb6a54b5a.jpg?q=90" alt="...." />
                                </div>
                                <div className="cusName">
                                    <div>
                                        <span style={{ fontWeight: "bold" }}>MD Saddam Saddam</span>
                                        <span style={{ marginLeft: "7px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="14" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                            Certified Buyer, Alanthurai Mar, 2024
                                        </span>
                                    </div>

                                    <div className="cusLike">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                        </svg> 119</span>
                                        <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="16" fill="currentColor" className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                            <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591" />
                                        </svg> 30</span>
                                        <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        </svg></span>
                                    </div>
                                </div>
                            </div>

                            <div id="cmntLink">
                                <a href="#">
                                    <span>All 209 reviews </span>
                                    <div style={{ color: "#878787", marginTop: "2px", marginRight: "1px" }}>+</div>
                                </a>
                            </div>

                        </div>

                        <div id="proQuery">
                            <div className="quesHead">
                                <span>Questions and Answers</span>
                                <div className="searchQues">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </div>
                            </div>
                            <div className="questions" >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span><b>Q: Can we use for trading??</b></span>
                                    <span style={{ marginTop: "10px" }}><b>A:</b> Yes</span>
                                    <span style={{ marginTop: "12px", color: "#878787", fontSize: "11px", fontWeight: "bold" }}>TheElefANT</span>
                                    <span style={{ marginTop: "10px", fontSize: "11px", color: "#878787" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" className="tdsVnH"><path fill="#878787" d="M4 0s1.5.2 2.3 0C7 0 7.8.5 8 1c0 0 1.4 0 .8 2.7.2.2.3.4 0 1-.2 1-.4 1-.5 1a3.8 3.8 0 0 1-.3 1v1c.4.2 2 1 3.6 2.3.2.2.4.6.4 1v1.6H6.8l-.5-2.4c1-1.4 0-1.5-.3-1.5s-1.3 0-.3 1.5l-.5 2.4H0V11c0-.4.2-.8.4-1A19 19 0 0 1 4 7.8v-1a3.8 3.8 0 0 1-.4-1.2c-.2 0-.3-.2-.5-1s0-1 .4-1c0 0-.6-2 1-3C4.4.6 4 .2 4 0z"></path></svg>Flipkart Seller</span>
                                </div>
                                <div className="cusLike">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                    </svg> 34</span>
                                    <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="16" fill="currentColor" className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                        <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591" />
                                    </svg> 14</span>
                                    <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                </div>
                            </div>

                            <div className="questions" >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span><b>Q: Can we play games</b></span>
                                    <span style={{ marginTop: "10px" }}><b>A:</b> Yes, you can play</span>
                                    <span style={{ marginTop: "12px", color: "#878787", fontSize: "11px", fontWeight: "bold" }}>TheElefANT</span>
                                    <span style={{ marginTop: "10px", fontSize: "11px", color: "#878787" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" className="tdsVnH"><path fill="#878787" d="M4 0s1.5.2 2.3 0C7 0 7.8.5 8 1c0 0 1.4 0 .8 2.7.2.2.3.4 0 1-.2 1-.4 1-.5 1a3.8 3.8 0 0 1-.3 1v1c.4.2 2 1 3.6 2.3.2.2.4.6.4 1v1.6H6.8l-.5-2.4c1-1.4 0-1.5-.3-1.5s-1.3 0-.3 1.5l-.5 2.4H0V11c0-.4.2-.8.4-1A19 19 0 0 1 4 7.8v-1a3.8 3.8 0 0 1-.4-1.2c-.2 0-.3-.2-.5-1s0-1 .4-1c0 0-.6-2 1-3C4.4.6 4 .2 4 0z"></path></svg>Flipkart Seller</span>
                                </div>
                                <div className="cusLike">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                    </svg> 78</span>
                                    <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="16" fill="currentColor" className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                        <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591" />
                                    </svg> 42</span>
                                    <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                </div>
                            </div>

                            <div className="questions" >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span><b>Q: Can we use for programing language</b></span>
                                    <span style={{ marginTop: "10px" }}><b>A:</b> Yes, of course you can use for programing languages software.</span>
                                    <span style={{ marginTop: "12px", color: "#878787", fontSize: "11px", fontWeight: "bold" }}>TheElefANT</span>
                                    <span style={{ marginTop: "10px", fontSize: "11px", color: "#878787" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" className="tdsVnH"><path fill="#878787" d="M4 0s1.5.2 2.3 0C7 0 7.8.5 8 1c0 0 1.4 0 .8 2.7.2.2.3.4 0 1-.2 1-.4 1-.5 1a3.8 3.8 0 0 1-.3 1v1c.4.2 2 1 3.6 2.3.2.2.4.6.4 1v1.6H6.8l-.5-2.4c1-1.4 0-1.5-.3-1.5s-1.3 0-.3 1.5l-.5 2.4H0V11c0-.4.2-.8.4-1A19 19 0 0 1 4 7.8v-1a3.8 3.8 0 0 1-.4-1.2c-.2 0-.3-.2-.5-1s0-1 .4-1c0 0-.6-2 1-3C4.4.6 4 .2 4 0z"></path></svg>Flipkart Seller</span>
                                </div>
                                <div className="cusLike">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                    </svg> 65</span>
                                    <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="16" fill="currentColor" className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                        <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591" />
                                    </svg> 37</span>
                                    <span style={{ marginLeft: "26px" }}><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                </div>
                            </div>

                            <div id="cmntLink">
                                <a href="#">
                                    <span>All questions </span>
                                    <div style={{ color: "#878787", marginTop: "2px", marginRight: "1px" }}>+</div>
                                </a>
                            </div>

                        </div>


                        <div id="scrollSecure">
                            <img src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg" alt="..." />
                            <span style={{ marginTop: "-5px" }}>Safe and Secure Payments.Easy returns.100% Authentic products.</span>
                        </div>

                    </div>
                </div>

                <div id="intrstItem">
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>You might be interested in</div>

                    <div className="intrstScroll">
                        <div style={{ cursor: "pointer" }} className="physicalItem">
                            <img src="https://rukminim2.flixcart.com/image/400/400/xif0q/operating-system/e/d/6/windows-11-windows-11-neozone-original-imahf9pskehgkhnj.jpeg?q=90" alt="..." />
                            <div className="scrollItemName">
                                <span style={{ fontSize: "21px", fontWeight: "bold" }}>Physical</span>
                                <span style={{ fontSize: "18px", color: "#878787", marginTop: "4px" }}>Min. 50% Off</span>
                                <button className="scrollShopBtn">Shop Now</button>
                            </div>
                        </div>

                        <div className="physicalItem" style={{ marginLeft: "15px" }}>
                            <img style={{width:"140px",marginLeft:"-15px"}} src="https://rukminim2.flixcart.com/image/400/400/kcxpbww0/external-hard-drive/ssd/z/j/b/samsung-mu-pc1t0h-ww-original-imaftxkfp8rrfeku.jpeg?q=90" alt="..." />
                            <div className="scrollItemName">
                                <span style={{ fontSize: "21px", fontWeight: "bold" }}>External SSD</span>
                                <span style={{ fontSize: "18px", color: "#878787", marginTop: "4px" }}>Min. 50% Off</span>
                                <button className="scrollShopBtn">Shop Now</button>
                            </div>
                        </div>

                        <div className="physicalItem" style={{ marginLeft: "15px" }}>
                            <img style={{width:"80px"}} src="https://rukminim2.flixcart.com/image/400/400/xif0q/headphone/x/f/r/-original-imahfpmehbsghzyj.jpeg?q=90" alt="..." />
                            <div className="scrollItemName">
                                <span style={{ fontSize: "21px", fontWeight: "bold", }}>Wired Ear</span>
                                <span style={{ fontSize: "18px", color: "#878787", marginTop: "4px" }}>Min. 50% Off</span>
                                <button className="scrollShopBtn">Shop Now</button>
                            </div>
                        </div>

                        <div className="physicalItem" style={{ marginLeft: "15px" }} >
                            <img style={{width:"140px",marginLeft:"-15px"}} src="https://rukminim2.flixcart.com/image/400/400/xif0q/datacard/l/n/w/mini-wifi-dongle-adapter-with-upto-150-mbps-speed-for-pc-data-original-imah4h265zyy392x.jpeg?q=90" alt="..." />
                            <div className="scrollItemName">
                                <span style={{fontSize:"21px",fontWeight:"bold"}}>Data Cards</span>
                                <span style={{fontSize:"18px",color:"#878787",marginTop:"4px"}}>Min. 50% Off</span>
                                <button className="scrollShopBtn">Shop Now</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div id="suggested">
                <Similar/>
            </div>
        </>
    )
}
export default SelectedItem;





