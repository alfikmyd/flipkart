import { useMemo,useState } from "react";
import FiltLeft from "./filtLeft";
import Product from "./proRight";

function Parent({initialData = []}){
    const [filterValue, setFilterValue] = useState("");

    const products = useMemo(
        () => (Array.isArray(initialData) ? initialData : []),
        [initialData]
    );
    const filteredProducts = useMemo(() => {
        if(!filterValue) return products;
        return products.filter(
            (p) =>
            (p.name && p.name.toLowerCase().includes(filterValue.toLowerCase())) || 
            (p.value && p.value.toLowerCase().includes(filterValue.toLowerCase()))
        );
    }, [products, filterValue]);

    return(
        <>
            <FiltLeft filtProps={filteredProducts} setFilterValue={setFilterValue} />
            <Product proProps={filteredProducts} setFilterValue={setFilterValue} />
        </>
    );
}
export default Parent;




// import { useMemo, useState } from "react";
// import FiltLeft from "./filtLeft";
// import Product from "./proRight";

// function Parent({ initialData = [] }) {
//     const [filterValue, setFilterValue] = useState("");
//     const [products] = useState(Array.isArray(initialData) ? initialData : [])

//     const filteredProducts = useMemo(() => {
//         if (!filterValue) return products;
//         return products.filter(
//             (p) =>
//                 (p.name && p.name.toLowerCase().includes(filterValue.toLowerCase())) ||
//                 (p.value && p.value.toLowerCase().includes(filterValue.toLowerCase()))
//         );
//     }, [products, filterValue]);

//     return (
//         <>
//             <FiltLeft filtProps={filteredProducts} setFilterValue={setFilterValue} />
//             <Product proProps={filteredProducts} setFilterValue={setFilterValue} />
//         </>
//     );
// }
// export default Parent;

