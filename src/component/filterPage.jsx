// import { useMemo, useState, useEffect } from "react";
// import Footer from "./footer";
// import Header from "./header";
// import '../../src/index.css';
// import FiltLeft from "./filtLeft";
// import Product from "./proRight";

// // function Parent() {
// // function Parent({initialData = []}) {
// //     const [filterValue, setFilterValue] = useState({},{min: 0, max: Infinity});
// //     const [productData, setProductData] = useState([],Array.isArray(initialData) ? initialData : []);

// //     const [priceRange,setPriceRange] = useState({min: 0, max: Infinity});
// //     const [filt] = useState(Array.isArray(initialData) ? initialData : []);

// //     useEffect(() => {
// //         fetch("/data.json")
// //             .then((res) => res.json())
// //             .then((data) => setProductData(Array.isArray(data) ? data : []))
// //             .catch((err) => console.error("failed :", err));
// //     }, []);



// //     const filteredProducts = useMemo(() => {
// //         return productData.filter((p) =>
// //                             p.price >= priceRange.min && p.price <= priceRange.max &&

// //             Object.entries(filterValue).every(([key, values]) => {
// //                 if (!Array.isArray(values) || values.length === 0) return true;
// //                 return values.some((val) =>
// //                     (p[key] || "").toLowerCase().includes(val.toLowerCase())
// //                 );

// //             })
            
// //         );

       
// //     }, [productData, filterValue]);

// function Parent({initialData = []}){
//     const [filterValue,setFilterValue] = useState({min : 0, max: Infinity});
//     const [productData,setProductData] = useState(Array.isArray(initialData) ? initialData : []);

//     useEffect(() => {
//         fetch("/data.json")
//            .then((res) => res.json())
//            .then((data) => setProductData(Array.isArray(data) ? data : []))
//            .catch((err) => console.error("failed :", err));
//     }, []);
//     // const filteredProducts = useMemo(() => {
//     //     return productData.filter((p) => 
//     //         p.price >= (filterValue.min ?? 0)  &&
//     //         p.price <= (filterValue.max ?? Infinity) && 
//     //         Object.entries(filterValue).every(([key, values]) => {
//     //             if(key === "min" || key === "max") return true;
//     //             if(!Array.isArray(values) || values.length === 0) return true;
//     //             return values.some((val) => 
//     //                 (p[key] || "").toLowerCase().includes(val.toLowerCase())
//     //         );
//     //         })
//     //     );
//     // }, [productData, filterValue]);

//     const filteredProducts = useMemo(() => {
//       return productData.filter((p) => {
//         const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
//         return (
//           priceNum >= (filteredProducts.min ?? 0) && 
//           priceNum <= (filteredProducts.max ?? Infinity) && 
//           Object.entries(filterValue).every(([key, values]) => {
//             if(key === "min" || key === "max") return true;
//             if (!Array.isArray(values) || values.length === 0) return true;
//                 return values.some((val) =>
//                     (p[key] || "").toString().toLowerCase().includes(val.toLowerCase())
//                 );
//           })
//         )
//       })
//     })

//     return (
//         <>
//             <Header />
//             <div id="cent">
//                 <FiltLeft filterValue={filterValue} setFilterValue={setFilterValue} />
//                 <Product products={filteredProducts} />
//             </div>
//             <Footer />
//         </>
//     )
// }
// export default Parent



import { useMemo, useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import '../../src/index.css';
import FiltLeft from "./filtLeft";
import Product from "./proRight";

function Parent({ initialData = [] }) {
    const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });
    const [productData, setProductData] = useState(Array.isArray(initialData) ? initialData : []);

    // Fetch data from JSON file once
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setProductData(Array.isArray(data) ? data : []))
            .catch((err) => console.error("Failed to load data:", err));
    }, []);

    // Filter products based on price and other filters
    const filteredProducts = useMemo(() => {
        return productData.filter((p) => {
            const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
            return (
                priceNum >= (filterValue.min ?? 0) &&
                priceNum <= (filterValue.max ?? Infinity) &&
                Object.entries(filterValue).every(([key, values]) => {
                    if (key === "min" || key === "max") return true; // skip price keys
                    if (!Array.isArray(values) || values.length === 0) return true;
                    return values.some((val) =>
                        (p[key] || "").toString().toLowerCase().includes(val.toLowerCase())
                    );
                })
            );
        });
    }, [productData, filterValue]);

    return (
        <>
            <Header />
            <div id="cent">
                <FiltLeft filterValue={filterValue} setFilterValue={setFilterValue} />
                <Product products={filteredProducts} />
            </div>
            <Footer />
        </>
    );
}

export default Parent;
