
import { useState, useEffect } from "react";

function ProductList({ products }) {
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    setDisplayProducts(products || []);
  }, [products]);

  // Conditional rendering after hooks
  if (!displayProducts || displayProducts.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div>
      {displayProducts.map((p, index) => (
        <div key={index}>
          <h4>{p.name}</h4>
          <p>{p.type}</p>
          <p>{p.processor}</p>
          <p>{p.ram}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;



//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,




import { useState, useEffect, useMemo } from "react";
import FiltLeft from "./filtLeft";
import ProductList from './proRight'

function Parent() {
  const [productData, setProductData] = useState([]);
  const [filters, setFilters] = useState({}); // e.g., { type: "Laptop", ram: "16 GB" }

  // Fetch products from JSON
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProductData(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));
  }, []);

  // Compute filtered products
  const filteredProducts = useMemo(() => {
    return productData.filter((p) => {
      return (
        (!filters.type || p.type.toLowerCase().includes(filters.type.toLowerCase())) &&
        (!filters.processor || p.pros?.toLowerCase().includes(filters.processor.toLowerCase())) &&
        (!filters.ram || p.ramCapa?.toLowerCase().includes(filters.ram.toLowerCase()))
      );
    });
  }, [productData, filters]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <FiltLeft filters={filters} setFilters={setFilters} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Parent;



///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





const types = ["Thin and Light Laptop", "Chromebook", "Gaming Laptop"];
const processors = ["Core i3", "Core i5", "Core i7", "Core i9"];
const rams = ["4 GB", "8 GB", "16 GB", "32 GB"];

function FiltLeft({ filters, setFilters }) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value, // toggle filter
    }));
  };

  return (
    <div style={{ minWidth: "200px" }}>
      <h3>Filters</h3>

      <div>
        <h4>Type</h4>
        {types.map((t) => (
          <div key={t}>
            <input
              type="checkbox"
              checked={filters.type === t}
              onChange={() => handleChange("type", t)}
            />
            {t}
          </div>
        ))}
      </div>

      <div>
        <h4>Processor</h4>
        {processors.map((p) => (
          <div key={p}>
            <input
              type="checkbox"
              checked={filters.processor === p}
              onChange={() => handleChange("processor", p)}
            />
            {p}
          </div>
        ))}
      </div>

      <div>
        <h4>RAM</h4>
        {rams.map((r) => (
          <div key={r}>
            <input
              type="checkbox"
              checked={filters.ram === r}
              onChange={() => handleChange("ram", r)}
            />
            {r}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiltLeft;
