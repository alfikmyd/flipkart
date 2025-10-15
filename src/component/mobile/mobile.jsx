
import { useEffect, useMemo, useState } from 'react';
import './mob.css';
import MobHead from './MobHead';
import MobItem from './MobItem';
import Brand from './brands';
import MobProcess from './MobProcess';
import Slider from './MobSlider';
import { useLocation } from 'react-router-dom';

function Mobile({ initialData = [], filterValue = {}, setFilterValue }) {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]); 
    const [sortSelect, setSortSelect] = useState("relevance");
    const [checkedItems, setCheckedItems] = useState({});
    const location = useLocation();

    useEffect(() => {
        if (location.state?.filteredProducts) {
            console.log("📩 Received from filter page:", location.state.filteredProducts);
            setFilteredItems(location.state.filteredProducts);
            setCheckedItems(location.state.appliedFilters || {});
            if (typeof setFilterValue === "function") {
                setFilterValue(location.state.filterValue || {});
            }
            return; 
        }

        const saved = sessionStorage.getItem("products");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch {
                sessionStorage.removeItem("products");
            }
        } else {
            fetch("/data.json")
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setItems(data);
                        sessionStorage.setItem("products", JSON.stringify(data));
                    }
                })
                .catch(console.error);
        }
    }, [location.state, setFilterValue]);

    const filteredProducts = useMemo(() => {
        if (filteredItems.length > 0) {
            return filteredItems;
        }

        return items.filter(p => {
            const priceNum = parseInt((p.price || "0").replace(/[^\d]/g, ""));
            const minPrice = filterValue?.min ?? 0;
            const maxPrice = filterValue?.max ?? Infinity;

            if (priceNum < minPrice || priceNum > maxPrice) return false;

            for (const [key, values] of Object.entries(checkedItems)) {
                const selected = Object.keys(values || {}).filter(label => values[label]);
                if (selected.length && !selected.includes(p[key])) return false;
            }

            return true;
        });
    }, [items, filterValue, checkedItems, filteredItems]);


    
    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];
        switch (sortSelect) {
            case "priceLow":
                sorted.sort((a, b) =>
                    parseInt(a.price.replace(/₹|,/g, "")) - parseInt(b.price.replace(/₹|,/g, ""))
                );
                break;
            case "priceHigh":
                sorted.sort((a, b) =>
                    parseInt(b.price.replace(/₹|,/g, "")) - parseInt(a.price.replace(/₹|,/g, ""))
                );
                break;
            case "popularity":
                sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
                break;
            case "newest":
                sorted.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
                break;
            default:
                break;
        }
        return sorted;
    }, [filteredProducts, sortSelect]);

    if (!sortedProducts.length) {
        return <p style={{ textAlign: 'center', marginTop: '50px' }}>No products found.</p>;
    }

    
    const componentsAfterChunks = [
        <Brand key="brand" />,
        <MobProcess key="process" />,
        <div key="ad1" className='adImage'>
            <img
                src="https://rukminim1.flixcart.com/fk-p-image/1669/482/cf-chitrakaar-prod/2456e66563bd17c4c3f0ce34f40ca7fa.jpeg?q=80"
                alt="ad"
            />
        </div>
    ];

    const renderItemsWithComponents = () => {
        const elements = [];
        const chunkSize = 4;

        for (let i = 0; i < sortedProducts.length; i += chunkSize) {
            const chunk = sortedProducts.slice(i, i + chunkSize);
            elements.push(
                <div className='mob-items' key={`chunk-${i}`}>
                    {chunk.map((item, idx) => (
                        <MobItem key={`${item.name}-${i + idx}`} item={item} />
                    ))}
                </div>
            );

            const compIndex = Math.floor(i / chunkSize);
            if (componentsAfterChunks[compIndex]) {
                elements.push(componentsAfterChunks[compIndex]);
            }
        }

        return elements;
    };

    return (
        <>
            <MobHead
                prod={sortedProducts}
                sortSelect={sortSelect}
                setSortSelect={setSortSelect}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
                initialData={initialData}
            />

            <Slider setFilterValue={setFilterValue} filterValue={filterValue} />

            {renderItemsWithComponents()}
        </>
    );
}

export default Mobile;
