//  import {useMemo, useState} from "react";
//  import FiltLeft from "./filtLeft";
//  import Product from "./proRight";

//  function Parent ({initialData}){
//     const [filterValue,setFilterValue] = useState("");
//     // const [products,setProducts] = useState(initialData);
//     const [products,setProducts] = useState(Array.isArray(initialData) ? initialData : []);

//     const filteredProducts = useMemo(() =>{
//         return products.filter(p => p.name.includes(filterValue));
//     }, [products, filterValue]);

//     return(
//         <>
//             <FiltLeft filtProps={filteredProducts} setFilterValue={setFilterValue} />
//             <Product proProps={filteredProducts} setFilterValue={setFilterValue} />
//         </>
//     );
// }
// export default Parent;