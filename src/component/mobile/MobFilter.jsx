


import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Filt({ setFilterValue }) {
    const location = useLocation();
    const { product = [], initialData = [] } = location.state || {};

    const [checkedItems, setCheckedItems] = useState({});
    const [selectedFilter, setSelectedFilter] = useState("price");

    const navigate = useNavigate();

    const applyFilters = () => {
        let filtered = initialData.length ? initialData : product;

        let minPrice = Infinity;
        let maxPrice = -Infinity;

        Object.keys(checkedItems).forEach(filterType => {
            const selected = Object.keys(checkedItems[filterType] || {}).filter(
                key => checkedItems[filterType][key]
            );
            if (selected.length === 0) return;

            if (filterType === "price") {
                filtered = filtered.filter(p => {
                    const productPrice = Number(p.price.replace(/[^0-9]/g, ""));
                    return selected.some(sel => {
                        if (sel === "Rs. 20000 and Below") { minPrice = Math.min(minPrice, 0); maxPrice = Math.max(maxPrice, 20000); return productPrice <= 20000; }
                        if (sel === "Rs. 20000-Rs. 40000") { minPrice = Math.min(minPrice, 20001); maxPrice = Math.max(maxPrice, 40000); return productPrice > 20000 && productPrice <= 40000; }
                        if (sel === "Rs. 40000-Rs. 50000") { minPrice = Math.min(minPrice, 40001); maxPrice = Math.max(maxPrice, 50000); return productPrice > 40000 && productPrice <= 50000; }
                        if (sel === "Rs. 50000-Rs. 60000") { minPrice = Math.min(minPrice, 50001); maxPrice = Math.max(maxPrice, 60000); return productPrice > 50000 && productPrice <= 60000; }
                        if (sel === "Rs. 60000-Rs. 75000") { minPrice = Math.min(minPrice, 60001); maxPrice = Math.max(maxPrice, 75000); return productPrice > 60000 && productPrice <= 75000; }
                        if (sel === "Rs. 75000 and Above") { minPrice = Math.min(minPrice, 75001); maxPrice = Math.max(maxPrice, Infinity); return productPrice > 75000; }
                        return false;
                    });
                });
            } else {
                filtered = filtered.filter(p =>
                    selected.some(sel => p[filterType]?.includes(sel))
                );
            }
        });

        console.log(" Filter Result to send:", filtered);

        navigate("/product", {
            state: {
                filteredProducts: filtered,
                appliedFilters: checkedItems,
                filterValue: { min: minPrice === Infinity ? 0 : minPrice, max: maxPrice === -Infinity ? Infinity : maxPrice }
            }
        });

};


const handleCheck = (filterType, label, isChecked) => {
    setCheckedItems(prev => ({
        ...prev,
        [filterType]: {
            ...prev[filterType],
            [label]: isChecked
        }
    }));
};

const isChecked = (filterType, label) => checkedItems[filterType]?.[label] || false;

const getCheckedCount = (filterType) =>
    checkedItems[filterType] ? Object.values(checkedItems[filterType]).filter(Boolean).length : 0;

const anyChecked = Object.values(checkedItems).some(group => Object.values(group).some(Boolean));

const clearFilters = () => {
    setCheckedItems({});
    setFilterValue && setFilterValue({});
};



const price = [
    { label: "Rs. 20000 and Below", value: "Rs. 20000 and Below" },
    { label: "Rs. 20000-Rs. 40000", value: "Rs. 20000-Rs. 40000" },
    { label: "Rs. 40000-Rs. 50000", value: "Rs. 40000-Rs. 50000" },
    { label: "Rs. 50000-Rs. 60000", value: "Rs. 50000-Rs. 60000" },
    { label: "Rs. 60000-Rs. 75000", value: "Rs. 60000-Rs. 75000" },
    { label: "Rs. 75000 and Above", value: "Rs. 75000 and Above" }
];

const brand = [
    { label: "HP", value: "HP" }, { label: "ASUS", value: "ASUS" }, { label: "Lenovo", value: "Lenovo" },
    { label: "DELL", value: "DELL" }, { label: 'MSI', value: "MSI" }, { label: "Acer", value: "Acer" }, { label: "Apple", value: "Apple" }
];

const type = [
    { label: "Gaming Laptop", value: "Gaming Laptop" }, { label: 'Thin and Light Laptop', value: "Thin and Light Laptop" },
    { label: "Laptop", value: "Laptop" }, { label: "Chromebook", value: "Chromebook" },
    { label: "Macbook", value: "Macbook" }
];

const processor = [
    { label: "Core i5", value: "Core i5" }, { label: "Core i3", value: "Core i3" }, { label: "Core i7", value: "Core i7" },
    { label: "Core i9", value: "Core i9" }, { label: "Ryzen 7 Quad Core", value: "Ryzen 7 Quad Core" },
    { label: "Ryzen 5 Quad Core", value: "Ryzen 5 Quad Core" }
];

const generation = [
    { label: "13th Gen", value: "13th Gen" }, { label: "12th Gen", value: "12th Gen" }, { label: "11th Gen", value: "11th Gen" },
    { label: "10th Gen", value: "10th Gen" }, { label: "8th Gen", value: "8th Gen" },
    { label: "14th Gen", value: "14th Gen" }, { label: "7th Gen", value: "7th Gen" }
];

const ram = [
    { label: "8 GB", value: "8 GB" }, { label: "16 GB", value: "16 GB" }, { label: "32 GB", value: "32 GB" },
    { label: "6 GB", value: "6 GB" }, { label: "18 GB", value: "18 GB" }, { label: "36 GB", value: "36 GB" }, { label: "64 GB", value: "64 GB" }
];

const ssd = [
    { label: "512 GB", value: "512 GB" }, { label: "256 GB", value: "256 GB" }, { label: "1 TB", value: "1 TB" },
    { label: "128 GB", value: "128 GB" }, { label: "8 GB", value: "8 GB" }
];

const screen = [
    { label: "13 inch - 13.9 inch", value: "13 inch - 13.9 inch" }, { label: "14 inch - 14.9 inch", value: "14 inch - 14.9 inch" },
    { label: "15 inch - 15.9 inch", value: "15 inch - 15.9 inch" }, { label: "16 inch - 17.9 inch", value: "16 inch - 17.9 inch" },

];

const os = [
    { label: "Windows 11 Home", value: "Windows 11 Home" }, { label: "Windows 11", value: "Windows 11" },
    { label: "Chrome", value: "Chrome" }, { label: "Mac OS", value: "Mac OS" },
    { label: "Android", value: "Android" }, { label: "Windows 10", value: "Windows 10" }
];

const discount = [
    { label: "50% or more", value: "50% or more" }, { label: "40% or more", value: "40% or more" },
    { label: "30% or more", value: "30% or more" }, { label: "20% or more", value: "20% or more" },
    { label: "10% or more", value: "10% or more" }
];

const customer = [
    { label: "4★ & above", value: "4★ & above" }, { label: "3★ & above", value: "3★ & above" },
    { label: "2★ & above", value: "2★ & above" }, { label: "1★ & above", value: "1★ & above" }
];

const touch = [
    { label: "Yes", value: "Yes" }, { label: "No", value: "No" }
];

const storage = [
    { label: "SSD", value: "SSD" }, { label: "eMMC", value: "eMMC" }
];

const ramType = [
    { label: "DDR4", value: "DDR4" }, { label: "LPDDR4X", value: "LPDDR4X" },
    { label: "LPDDR4", value: "LPDDR4" }
];

const availability = [
    { label: "Include Out of Stock", value: "Include Out of Stock" }
];


const filterMap = {
    price, brand, type, processor, generation, ram, ssd, screen,
    os, discount, customer, touch, storage, ramType, availability
};

return (
    <div id="smallFilt">
        <div id="filtHead">
            <Link to={"/product"} style={{ textDecoration: "none", color: "black" }}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    <span style={{ marginLeft: "19px" }}>Filters</span>
                </div>
            </Link>

            {anyChecked && (
                <div className="mobClearFilt" onClick={clearFilters}>
                    <span>Clear Filters</span>
                </div>
            )}
        </div>


        <div id="clearPage">
            <div className="clearSelect">
                <div className="clearHead">

                    <span>Clear Filters</span>
                </div>

                <div className="clearOpt">
                    <span>Clear Filters</span>
                    <span>Would you like to clear the following filters?</span>

                    <label>
                        
                        {Object.keys(checkedItems)
                            .filter(key => checkedItems[key])
                            .join("\n" || "None")
                        }
                       
                    </label>
                </div>

                <div className="clearAllItem">
                    <button onClick={() => navigate()}>Cancel</button>
                    <button onClick={clearFilters}>Clear</button>
                </div>
            </div>
        </div>

        <div className="mobFilters">
            <div className="mobFiltHead">
                {Object.keys(filterMap).map(filter => (
                    <div
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        style={selectedFilter === filter ? { backgroundColor: "white", color: "#2874f0" } : {}}
                    >
                        <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                        {getCheckedCount(filter) > 0 && <span className="mobCount">{getCheckedCount(filter)}</span>}
                    </div>
                ))}
            </div>

            <div id="rightFilter">
                <div className="mobPrice">
                    {filterMap[selectedFilter]?.map((item) => (

                        <label key={item.value}>
                            <input
                                type="checkbox"
                                checked={isChecked(selectedFilter, item.value)}
                                onChange={e => handleCheck(selectedFilter, item.value, e.target.checked)}
                            />
                            {item.label}
                        </label>
                    ))}
                </div>
            </div>
        </div>

        <div id="mobFooter">
            <div className="mobFootCount">
                <span style={{ fontSize: "16px" }}>{product.length}</span>
                <span style={{ fontSize: "12px", color: "#878778" }}> products found</span>
            </div>

            <div className="mobFiltApply">
                <button type="button" onClick={applyFilters} disabled={!anyChecked}>
                    Apply
                </button>
            </div>
        </div>
    </div>
);
}
export default Filt;






6hr 28min, 5hr 38min,6hr 35min,4hr 14min  --- cd



5hr 30min,5hr 17min,5hr 51min,3hr 41min ---- act