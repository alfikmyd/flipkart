import { useMemo, useState } from "react";
import FiltLeft from "./filtLeft";
import Product from "./proRight";
// import data from "./data.json";

function Parent() {

    const [filterValue,setFilterValue] =useState ("value");
    return(
        <>
            <FiltLeft filtProps = {filterValue} setFilterValue={setFilterValue} />
            <Product proProps = {filterValue} setFilterValue ={setFilterValue} />
        </>
    )
    
    
}
export default Parent;

// const [filterValue, setFilterValue] = useState("value");

//     return (
//         <>
//             <FiltLeft filtProps={filterValue} setFilterValue={setFilterValue} />
//             <Product proProps={filterValue} /> 
//         </>
//     )