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

                <div id="productPart">
                    {data.map((item, index) => (
                        <div key={index} className="items">
                            <div className="col-one">
                                <div>
                                    <img src={item.img} alt={item.name} />
                                    <label><input type="checkbox" value="compare" />Add to Compare</label>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bebdbdff" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                </svg>
                            </div>
                            <div className="col-two">
                                {/* <span></span> */}
                                <h3>{item.brand}</h3>
                                <div>
                                    <button>{item.rate}</button>
                                    <span>{item.review}</span>

                                </div>
                                <div className="details">
                                    <ul>
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
                                    <span>{item.price}
                                        <p>{item.oldPrice}</p> <p>{item.off}</p></span>
                                    <img src={item.assured} alt="assured" />
                                </div>

                                <span>{item.nmbr}</span>
                                <span>{item.exchange}</span>
                                <span>{item.bank}</span>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}
export default Product;


