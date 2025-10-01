
import { useMemo, useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import '../../src/index.css';
import FiltLeft from "./filtLeft";
import Product from "./proRight";
import Mobile from "./mobile/mobile";

function Parent({ initialData = [] }) {
    const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });
    const [productData, setProductData] = useState(Array.isArray(initialData) ? initialData : []);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1440);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
            {isMobile ? (
                <Mobile />
            ) : (
                <>
                    <Header />
                    <div id="cent">
                        <FiltLeft filterValue={filterValue} setFilterValue={setFilterValue} />
                        <Product products={filteredProducts} />
                    </div></>
            )}
        </>
    );
}

export default Parent;



