// import { useMemo,useState } from "react";
// import FiltLeft from "./filtLeft";
// import Product from "./proRight";
// import Footer from "./footer";
// import Header from "./header";
// import '../../src/index.css';

// function Parent({initialData = []}){
//     const [filterValue, setFilterValue] = useState("");

//     const products = useMemo(
//         () => (Array.isArray(initialData) ? initialData : []),
//         [initialData]
//     );
//     // const filteredProducts = useMemo(() => {
//     //     if(!filterValue) return products;
//     //     return products.filter(
//     //         (p) =>
//     //         (p.name && p.name.toLowerCase().includes(filterValue.toLowerCase())) || 
//     //         (p.value && p.value.toLowerCase().includes(filterValue.toLowerCase()))
//     //     );
//     // }, [products, filterValue]);
    
//     const filteredProducts = useMemo(() => {
//         if(!filterValue) return products;

//         return products.filter((p) =>
//             p.name.toLowerCase().includes(String(filterValue).toLowerCase())
//         );
//     }, [filterValue, products]);

//     return(
//         <>
//             <Header />
//             <FiltLeft filtProps={filteredProducts} setFilterValue={setFilterValue} />
//             <Product proProps={filteredProducts} setFilterValue={setFilterValue} />
//             <Footer  />
//         </>
//     );
// }
// export default Parent;





import { useMemo,useState,useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import '../../src/index.css';
import FiltLeft from "./filtLeft";
import Product from "./proRight";

function Parent(){
    const [filterValue,setFilterValue] = useState("");
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            // .then((data) => setProductData(Array.isArray(data) ? data : []))
            .then((data) => {
                console.log("Fetched json : ", data);
                setProductData(Array.isArray(data) ? data : []);
            })
            .catch((err) => console.error("failed :" ,err));
    }, []);

    const filteredProducts = useMemo(() => {
        if (!filterValue) return productData;

        return productData.filter((p) =>
            p.name?.toLowerCase().includes(String(filterValue).toLowerCase())
        );
    }, [filterValue, productData]);

    useEffect(() => {
        console.log("Filtere product : ", filteredProducts);
    },[filteredProducts]);

    return(
        <>
            <Header />
            <FiltLeft filtProps={filteredProducts} setFilterValue={setFilterValue} />
            <Product proProps={filteredProducts} />
            <Footer />
        </>
    )
}
export default Parent

