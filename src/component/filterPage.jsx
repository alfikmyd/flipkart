import { useMemo, useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import '../../src/index.css';
import FiltLeft from "./filtLeft";
import Product from "./proRight";

function Parent() {
    const [filterValue, setFilterValue] = useState({});
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setProductData(Array.isArray(data) ? data : []))
            .catch((err) => console.error("failed :", err));
    }, []);



    const filteredProducts = useMemo(() => {
        return productData.filter((p) =>
            Object.entries(filterValue).every(([key, values]) => {
                if (!Array.isArray(values) || values.length === 0) return true;
                return values.some((val) =>
                    (p[key] || "").toLowerCase().includes(val.toLowerCase())
                );
            })
        );
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
    )
}
export default Parent

