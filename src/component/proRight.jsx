import React from "react";
// import data from "./data.json";

function Product(proProps) {
    

    return (
        <>
            <div id="right">
                <div className="rightHeadPart">
                    <div id="path">
                        <span>Home</span>
                        <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                        <span style={{ marginLeft: "6px" }}>Computers</span>
                        <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                        <span style={{ marginLeft: "6px" }}>Laptops</span>
                    </div>

                    <div id="showNumbr" style={{ marginTop: "12px" }}>
                        <span style={{ fontWeight: "bold", fontSize: "15.5px", letterSpacing: "" }}>Showing 1 - 24 of 2,272 results for "laptop"</span>
                    </div>

                    <div id="sorting">
                        <span style={{ fontWeight: "bold" }}>Sort By</span>
                        <div className="sortFilt">
                            <span>Relevance</span>
                            <span style={{ marginLeft: "26px" }}>Popularity</span>
                            <span style={{ marginLeft: "27px" }}>Price -- Low to High</span>
                            <span style={{ marginLeft: "31px" }}>Price -- Hiigh to Low</span>
                            <span style={{ marginLeft: "30px" }}>Newest First</span>
                        </div>
                    </div>
                </div>

                <div id="productPart">
                    {data.map((item, index) => (
                        <div key={index} className="items">
                            <div className="col-one">
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img src={item.img} alt={item.name} />
                                    <label style={{ fontSize: "13px", marginTop: "38px" }}><input type="checkbox" value="compare" style={{ marginRight: "10px" }} />Add to Compare</label>
                                </div>
                                <svg style={{ marginTop: "-1px", marginLeft: "-4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="#d6d6d6ff" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                </svg>
                            </div>
                            <div className="col-two">
                                {/* <span></span> */}
                                <h3 >{item.brand}</h3>
                                <div style={{ marginTop: "-8px" }}>
                                    <button>{item.rate}</button>
                                    <span style={{ color: "#a7a5a5ff", fontWeight: "bold", marginLeft: "10px" }}>{item.review}</span>

                                </div>
                                <div className="details" style={{ lineHeight: "8px", marginLeft: "-25px", paddingTop: "6px" }}>
                                    <ul style={{ color: "#d8d8d8ff" }}>
                                        <li><p>{item.processor}</p></li>
                                        <li><p>{item.ram}</p></li>
                                        <li><p>{item.os}</p></li>
                                        <li><p>{item.ssd}</p></li>
                                        <li><p>{item.cm}</p></li>
                                        <li><p>{item.include}</p></li>
                                        <li><p>{item.warranty}</p></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-three">
                                <div className="price-col">
                                    <span style={{ color: "black", fontSize: "25px", fontWeight: "550", display: "flex", flexDirection: "column" }}>{item.price}
                                        <div><span style={{ color: "#999898ff", textDecoration: "line-through" }}>{item.oldPrice}</span> <span style={{ color: "#03a703ff", fontWeight: "bold", marginLeft: "8px" }}>{item.off}</span></div>
                                    </span>
                                    <img style={{ width: "100px", height: "30px" }} src={item.assured} alt="assured" />
                                </div>

                                <span style={{ color: "#e24660ff", fontSize: "13px" }}>{item.nmbr}</span>
                                <span>{item.exchange}</span>
                                <span style={{ color: "#03a703ff", fontWeight: "bold", fontSize: "13px" }}>{item.bank}</span>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>


    );
}
export default Product;





