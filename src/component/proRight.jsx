// import React, { useEffect, useMemo, useState } from "react";
// import Sort from "./sort";

// function Product({ products }) {
//     const [display, setDisplay] = useState([]);
//     const [sortOption, setSortOption] = useState("relevance");  

//     useEffect(() => {
//         setDisplay(products || []);
//     }, [products]);


//     const sortedProducts = useMemo(() => {
//         const productsCopy = [...display];

//         switch (sortOption){
//             case "popularity":
//                 return productsCopy.sort((a,b) => b.popularity - a.popularity);
//             case "priceLow":
//                 return productsCopy.sort((a,b) => parseInt(a.price.replace(/₹|,/g, "")) - parseInt(b.price.replace(/₹|,/g, "")));
//             case "priceHigh":
//                 return productsCopy.sort((a,b) => parseInt(b.price.replace(/₹|,/g, "")) - parseInt(a.price.replace(/₹|,/g, "")));
//             case "newest":
//                 return productsCopy.sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate));
//             default:
//                 return productsCopy;
//         }
//     },[display, sortOption]);

//     if(!sortedProducts || sortedProducts.length === 0){
//         return <p>No products found</p>;
//     }


//     //  if (!display || display.length === 0) {
//     //     return <p>No Products found</p>;
//     // }
//     return (
//         <>
//             <div id="right">
//                 <div className="rightHeadPart">
//                     <div id="path">
//                         <span>Home</span>
//                         <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                             <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
//                         </svg>
//                         <span style={{ marginLeft: "6px" }}>Computers</span>
//                         <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
//                             <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
//                         </svg>
//                         <span style={{ marginLeft: "6px" }}>Laptops</span>
//                     </div>

//                     <div id="showNumbr">
//                         <span>
//                             Showing {display.length > 0 ? `1 - ${display.length}` : "0"} of {display.length} results for "laptop"
//                         </span>
//                     </div>

//                     <div id="sorting">
                        
//                         {/* <span className="sortBy" style={{ fontWeight: "bold" }}>Sort By</span>
//                         <div className="sortFilt">
//                             <span>Relevance</span>
//                             <span style={{ marginLeft: "26px" }}>Popularity</span>
//                             <span style={{ marginLeft: "27px" }}>Price -- Low to High</span>
//                             <span style={{ marginLeft: "31px" }}>Price -- High to Low</span>
//                             <span style={{ marginLeft: "30px" }}>Newest First</span>
//                         </div> */}

//                         <Sort sortOption={sortOption} setSortOption={setSortOption} />
//                     </div>
//                 </div>

//                 <div id="productPart">
//                     {/* {display.map((item, index) => ( */}
//                     {sortedProducts.map((item,index) => (
//                         <div key={item.id || index} className="items">
//                             <div className="col-one">
//                                 <div className="colOneImage">
//                                     <img src={item.img || "placeholder.png"} alt={item.name || item.brand || "Product"} />
//                                     <label className="addCompare">
//                                         <input type="checkbox" value="compare" style={{ marginRight: "10px" }} />Add to Compare
//                                     </label>
//                                 </div>
//                                 <svg style={{ marginTop: "-1px", marginLeft: "-4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="#d6d6d6ff" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                                     <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
//                                 </svg>
//                             </div>
//                             <div className="col-two">
//                                 <h3 style={{ lineHeight: "18px" }}>{item.brand}</h3>
//                                 <div style={{ marginTop: "-2px" }}>
//                                     <button>{item.rate}</button>
//                                     <span className="reviewS">{item.review}</span>
//                                 </div>
//                                 <div className="details">
//                                     <ul style={{ color: "#d8d8d8ff" }}>
//                                         <li><p>{item.processor}</p></li>
//                                         <li><p>{item.ram}</p></li>
//                                         <li><p>{item.os}</p></li>
//                                         <li><p>{item.ssd}</p></li>
//                                         <li><p>{item.cm}</p></li>
//                                         <li><p>{item.include}</p></li>
//                                         <li><p>{item.warranty}</p></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-three">
//                                 <div className="price-col">
//                                     <span style={{ color: "black", fontSize: "24px", fontWeight: "600", display: "flex", flexDirection: "column" }}>
//                                         {item.price}
//                                         <div>
//                                             <span style={{ color: "#999898ff", textDecoration: "line-through", fontWeight: "500" }}>{item.oldPrice}</span>
//                                             <span style={{ color: "#03a703ff", fontWeight: "bold", marginLeft: "8px" }}>{item.off}</span>
//                                         </div>
//                                     </span>
//                                     {item.assured && (
//                                         <img style={{ width: "70px", height: "23px" }} src={item.assured} alt="assured" />
//                                     )}
//                                 </div>
//                                 <span style={{ color: "#e24660ff", fontSize: "12px", marginLeft: "0" }}>{item.nmbr}</span>
//                                 <span style={{ fontSize: "14px", marginLeft: "0" }}>{item.exchange}</span>
//                                 <span style={{ color: "#03a703ff", fontWeight: "bold", fontSize: "12px", marginLeft: "0px" }}>{item.bank}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Product;





import React, { useMemo, useState } from "react";
import Sort from "./sort";

function Product({ products = [] }) {
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
                <div id="path">
                    <span>Home</span>
                    <span style={{ marginLeft: "6px" }}>›</span>
                    <span style={{ marginLeft: "6px" }}>Computers</span>
                    <span style={{ marginLeft: "6px" }}>›</span>
                    <span style={{ marginLeft: "6px" }}>Laptops</span>
                </div>

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
                        </div>
                        <div className="col-two">
                            <h3>{item.brand}</h3>
                            <div>
                                <button>{item.rate}</button>
                                <span className="reviewS">{item.review}</span>
                            </div>
                            <ul>
                                <li>{item.processor}</li>
                                <li>{item.ram}</li>
                                <li>{item.os}</li>
                                <li>{item.ssd}</li>
                                <li>{item.cm}</li>
                                <li>{item.include}</li>
                                <li>{item.warranty}</li>
                            </ul>
                        </div>
                        <div className="col-three">
                            <span style={{ fontSize: "24px", fontWeight: "600" }}>{item.price}</span>
                            <div>
                                <span style={{ textDecoration: "line-through" }}>{item.oldPrice}</span>
                                <span style={{ color: "green", marginLeft: "8px" }}>{item.off}</span>
                            </div>
                            {item.assured && (
                                <img style={{ width: "70px", height: "23px" }} src={item.assured} alt="assured" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;



