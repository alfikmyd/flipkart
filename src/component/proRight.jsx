import { Link } from "react-router-dom";
import React, { useMemo, useState } from "react";
import Sort from "./sort";

function Product({ products = [] }) {
    const [hover, setHover] = useState(false);
    const [computer, setComputer] = useState(false);
    const [lap, setLap] = useState(false);
    const [sortOption, setSortOption] = useState("relevance");

    const sortedProducts = useMemo(() => {
        const productsCopy = [...products];

        switch (sortOption) {
            case "popularity":
                return productsCopy.sort((a, b) => b.popularity - a.popularity);
            case "priceLow":
                return productsCopy.sort(
                    (a, b) =>
                        parseInt(a.price.replace(/₹|,/g, "")) -
                        parseInt(b.price.replace(/₹|,/g, ""))
                );
            case "priceHigh":
                return productsCopy.sort(
                    (a, b) =>
                        parseInt(b.price.replace(/₹|,/g, "")) -
                        parseInt(a.price.replace(/₹|,/g, ""))
                );
            case "newest":
                return productsCopy.sort(
                    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
                );
            default:
                return productsCopy;
        }
    }, [products, sortOption]);

    if (!sortedProducts || sortedProducts.length === 0) {
        return <p>No products found</p>;
    }

    return (
        <div id="right">
            <div className="rightHeadPart">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <div id="path">
                        <span onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            style={{ color: hover ? "#2874f0" : "#878787" }}>Home</span>
                        <span style={{ marginLeft: "6px" }}>›</span>
                        <span style={{ marginLeft: "6px", color: computer ? "#2874f0" : "#878787" }}
                            onMouseOver={() => setComputer(true)}
                            onMouseOut={() => setComputer(false)}>Computers</span>
                        <span style={{ marginLeft: "6px" }}>›</span>
                        <span style={{ marginLeft: "6px", color: lap ? "#2874f0" : "#878787" }}
                            onMouseOver={() => setLap(true)}
                            onMouseOut={() => setLap(false)}>Laptops</span>
                    </div>
                </Link>

                <div id="showNumbr">
                    <span>
                        Showing {sortedProducts.length > 0 ? `1 - ${sortedProducts.length}` : "0"} of{" "}
                        {sortedProducts.length} results for "laptop"
                    </span>
                </div>

                <div id="sorting">
                    <Sort sortOption={sortOption} setSortOption={setSortOption} />
                </div>
            </div>


            <Link to={"/item"} style={{ textDecoration: "none", color: "black" }}>
                <div id="productPart">
                    {sortedProducts.map((item, index) => (
                        <div key={item.id || index} className="items">
                            <div className="col-one">
                                <div className="colOneImage">
                                    <img src={item.img || "placeholder.png"} alt={item.name || item.brand || "Product"} />
                                    <label className="addCompare">
                                        <input type="checkbox" value="compare" style={{ marginRight: "10px" }} />Add to Compare
                                    </label>
                                </div>
                                <svg style={{ marginTop: "-1px", marginLeft: "-4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="#d6d6d6ff" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                </svg>
                            </div>


                            <div className="col-two">
                                <h3 style={{ lineHeight: "18px", fontSize: "18px" }}>{item.brand}</h3>
                                <div style={{ marginTop: "-2px" }}>
                                    <button>{item.rate}</button>
                                    <span className="reviewS">{item.review}</span>
                                </div>
                                <div className="details">
                                    <ul style={{ color: "#d8d8d8ff" }}>
                                        {item.processor && <li><p>{item.processor}</p></li>}
                                        {item.ram && <li><p>{item.ram}</p></li>}
                                        {item.os && <li><p>{item.os}</p></li>}
                                        {item.ssd && <li><p>{item.ssd}</p></li>}
                                        {item.cm && <li><p>{item.cm}</p></li>}
                                        {item.include && <li><p>{item.include}</p></li>}
                                        {item.warranty && <li><p>{item.warranty}</p></li>}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-three">
                                <div className="price-col">
                                    <span style={{ color: "black", fontSize: "24px", fontWeight: "600", display: "flex", flexDirection: "column" }}>
                                        {item.price}
                                        <div>
                                            <span style={{ color: "#999898ff", textDecoration: "line-through", fontWeight: "600" }}>{item.oldPrice}</span>
                                            <span style={{ color: "#03a703ff", fontWeight: "bold", marginLeft: "8px" }}>{item.off}</span>
                                        </div>
                                    </span>
                                    {item.assured && (
                                        <img src={item.assured || " "} style={{ width: "70px", height: "23px" }} alt="assured" />
                                    )}
                                </div>
                                <span style={{ color: "#e24660ff", fontSize: "12px", marginLeft: "0" }}>{item.nmbr}</span>
                                <span style={{ fontSize: "14px", marginLeft: "0" }}>{item.exchange}</span>
                                <span style={{ color: "#03a703ff", fontWeight: "bold", fontSize: "12px", marginLeft: "0" }}>{item.bank}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    );
}

export default Product;



