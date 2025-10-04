
// import { useState, useEffect } from "react";

// function ProductList({ products }) {
//   const [displayProducts, setDisplayProducts] = useState([]);

//   useEffect(() => {
//     setDisplayProducts(products || []);
//   }, [products]);

//   // Conditional rendering after hooks
//   if (!displayProducts || displayProducts.length === 0) {
//     return <p>No products found</p>;
//   }

//   return (
//     <div>
//       {displayProducts.map((p, index) => (
//         <div key={index}>
//           <h4>{p.name}</h4>
//           <p>{p.type}</p>
//           <p>{p.processor}</p>
//           <p>{p.ram}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;



// //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,




// import { useState, useEffect, useMemo } from "react";
// import FiltLeft from "./filtLeft";
// import ProductList from './proRight'

// function Parent() {
//   const [productData, setProductData] = useState([]);
//   const [filters, setFilters] = useState({}); // e.g., { type: "Laptop", ram: "16 GB" }

//   // Fetch products from JSON
//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then((data) => setProductData(Array.isArray(data) ? data : []))
//       .catch((err) => console.error(err));
//   }, []);

//   // Compute filtered products
//   const filteredProducts = useMemo(() => {
//     return productData.filter((p) => {
//       return (
//         (!filters.type || p.type.toLowerCase().includes(filters.type.toLowerCase())) &&
//         (!filters.processor || p.pros?.toLowerCase().includes(filters.processor.toLowerCase())) &&
//         (!filters.ram || p.ramCapa?.toLowerCase().includes(filters.ram.toLowerCase()))
//       );
//     });
//   }, [productData, filters]);

//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       <FiltLeft filters={filters} setFilters={setFilters} />
//       <ProductList products={filteredProducts} />
//     </div>
//   );
// }

// export default Parent;



// ///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





// const types = ["Thin and Light Laptop", "Chromebook", "Gaming Laptop"];
// const processors = ["Core i3", "Core i5", "Core i7", "Core i9"];
// const rams = ["4 GB", "8 GB", "16 GB", "32 GB"];

// function FiltLeft({ filters, setFilters }) {
//   const handleChange = (key, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: prev[key] === value ? "" : value, // toggle filter
//     }));
//   };

//   return (
//     <div style={{ minWidth: "200px" }}>
//       <h3>Filters</h3>

//       <div>
//         <h4>Type</h4>
//         {types.map((t) => (
//           <div key={t}>
//             <input
//               type="checkbox"
//               checked={filters.type === t}
//               onChange={() => handleChange("type", t)}
//             />
//             {t}
//           </div>
//         ))}
//       </div>

//       <div>
//         <h4>Processor</h4>
//         {processors.map((p) => (
//           <div key={p}>
//             <input
//               type="checkbox"
//               checked={filters.processor === p}
//               onChange={() => handleChange("processor", p)}
//             />
//             {p}
//           </div>
//         ))}
//       </div>

//       <div>
//         <h4>RAM</h4>
//         {rams.map((r) => (
//           <div key={r}>
//             <input
//               type="checkbox"
//               checked={filters.ram === r}
//               onChange={() => handleChange("ram", r)}
//             />
//             {r}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FiltLeft;




// function Parent({ initialData = [] }) {
//     // filterValue will have shape: { min: 0, max: Infinity, ...otherFilters }
//     const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });
//     const [productData, setProductData] = useState(Array.isArray(initialData) ? initialData : []);

//     useEffect(() => {
//         fetch("/data.json")
//             .then((res) => res.json())
//             .then((data) => setProductData(Array.isArray(data) ? data : []))
//             .catch((err) => console.error("failed :", err));
//     }, []);

//     const filteredProducts = useMemo(() => {
//         return productData.filter((p) =>
//             p.price >= (filterValue.min ?? 0) &&
//             p.price <= (filterValue.max ?? Infinity) &&
//             Object.entries(filterValue).every(([key, values]) => {
//                 if (key === "min" || key === "max") return true;
//                 if (!Array.isArray(values) || values.length === 0) return true;
//                 return values.some((val) =>
//                     (p[key] || "").toLowerCase().includes(val.toLowerCase())
//                 );
//             })
//         );
//     }, [productData, filterValue]);



//********************************************************************************************** */



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





style={{
                                left: `${(sliderPos.minIndex / (priceSteps.length - 1)) * 100}%`,
                                width:`${((sliderPos.maxIndex - sliderPos.minIndex) / (priceSteps.length - 1)) * 100}%`
                            }}