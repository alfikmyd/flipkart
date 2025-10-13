
import { useEffect, useMemo, useState } from "react";
import Header from "./header";
import FiltLeft from "./filtLeft";
import Product from "./proRight";
import Mobile from "./mobile/mobile";
import '../../src/index.css';
import Footer from "./footer";

function Parent({ initialData = [] }) {
  const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });
  const [productData, setProductData] = useState(Array.isArray(initialData) ? initialData : []);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch products
  useEffect(() => {
    if (productData.length === 0) {
      fetch("/data.json")
        .then(res => res.json())
        .then(data => setProductData(Array.isArray(data) ? data : []))
        .catch(err => console.error("Failed to load data:", err));
    }
  }, [productData]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return productData.filter((p) => {
      const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
      if (priceNum < (filterValue.min ?? 0) || priceNum > (filterValue.max ?? Infinity)) return false;

      // Filter other keys dynamically
      for (const [key, values] of Object.entries(filterValue)) {
        if (key === "min" || key === "max") continue;
        if (Array.isArray(values) && values.length > 0) {
          if (!values.includes(p[key])) return false;
        }
      }

      return true;
    });
  }, [productData, filterValue]);

  return (
    <>
      {isMobile ? (
        <Mobile
          initialData={productData}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      ) : (
        <>
          <Header />
          <div id="cent">
            <FiltLeft
              filterValue={filterValue}
              setFilterValue={setFilterValue} 
            />
            <Product products={filteredProducts} />
            <Footer/>
          </div>
        </>
      )}
    </>
  );
}

export default Parent;


