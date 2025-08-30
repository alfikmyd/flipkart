import { useEffect } from "react";
import data from "./data.json";

function Product() {

    

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

                <div className="productPart">
                    {data.map((item,index) => (
                        <div key={index} className="">
                            <img src={item.img} alt={item.brand} className="" />
                            <h3 className="">{item.brand}</h3>

                            <div className="">
                                <span className="">{item.price} </span>
                                <span className="">{item.oldPrice}</span>
                                <span className="">{item.off} </span>
                            </div>

                            <p className="">{item.processor} </p>
                            <p className="">{item.ram} | {item.ssd} </p>
                            <p className="">{item.cm} </p>

                            <div className="">
                                <span className="">{item.rate} ★ </span>
                                <span className="">{item["rate-rev"]}</span>
                            </div>

                            <div className="">
                                <img src={item.assured} alt="assure" className="" />
                                <span>{item.bank}</span>
                            </div>

                            <p className="">{item.exchange}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    ); 
}
export default Product;

