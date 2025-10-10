
// import { useEffect, useMemo, useState } from 'react';
// import './mob.css';
// import MobHead from './MobHead';
// import MobItem from './MobItem';
// import Brand from './brands';
// import MobProcess from './MobProcess';
// import Slider from './MobSlider';
// import MobSort from './MobSort';
// import { useLocation } from 'react-router-dom';


// // function Mobile({ initialData = [] }) {
// function Mobile({initialData, filterValue, setFilterValue}){

//     const [item, setItem] = useState(Array.isArray(initialData) ? initialData : []);
//     const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });
//     const [sortSelect, setSortSelect] = useState("relevance");
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [checkedItems, setCheckedItems] = useState({});

//     const location = useLocation();
//     useEffect(() => {
//         const saved = sessionStorage.getItem("products");
//         if (saved) {
//             try {
//                 setItem(JSON.parse(saved));
//             }
//             catch (e) {
//                 console.log("failed to parse", e);
//                 sessionStorage.removeItem("products");
//             }
//         }
//         else {
//             fetch("/data.json")
//                 .then(res => res.json())
//                 .then(data => {
//                     if (Array.isArray(data)) {
//                         setItem(data);
//                         sessionStorage.setItem("products", JSON.stringify(data));

//                     }
//                 });
//         }
//     }, []);
//     useEffect(() => {
//         if (Array.isArray(location.state?.filteredProducts)) {
//             setFilteredProducts(location.state.filteredProducts);
//         }
//     }, [location.state?.filteredProducts]);

//     const filtPro = useMemo(() => {
//         return item.filter((p) => {
//             const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
//             return priceNum >= (filterValue.min ?? 0) && priceNum <= (filterValue.max ?? Infinity);

//         });
//     }, [item, filterValue]);

//     const sortedProducts = useMemo(() => {
//         let sorted = [...filtPro];
//         switch (sortSelect) {
//             case "priceLow":
//                 sorted.sort((a, b) => parseInt(a.price.replace(/₹|,/g, "")) - parseInt(b.price.replace(/₹|,/g, "")));
//                 break;
//             case "priceHigh":
//                 sorted.sort((a, b) => parseInt(b.price.replace(/₹|,/g, "")) - parseInt(a.price.replace(/₹|,/g, "")));
//                 break;
//             case "popularity":
//                 sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
//                 break;
//             case "newest":
//                 sorted.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
//                 break;
//             default:
//                 break;
//         }
//         return sorted;
//     }, [filtPro, sortSelect]);
//     // const finalList = Array.isArray(filteredProducts) && filteredProducts.length > 0
//     //     ? filteredProducts : sortedProducts;

//     const finalList = filteredProducts.length > 0 ? filteredProducts : sortedProducts;

//     return(
//         <>
//             <MobHead prod={sortedProducts} sortSelect={sortSelect} setSortSelect={setSortSelect} 
//                 filterValue={filterValue}
//                 setFilterValue={setFilterValue}
//                 checkedItems={checkedItems} 
//                 setCheckedItems={setCheckedItems}
//                 initialData={initialData}
//             />
//             <Slider setFilterValue={setFilterValue} filterValue={filterValue} />


//             <div className='mob-items'>
//                 {finalList.map((item, index) => {
//                     if(index < 4) return <MobItem key={index} item={item} />;
//                     return null;
//                 })}
//             </div>

//             <Brand />

//             <div className='mob-items'>
//                 {finalList.map((item, index) => {
//                     if(index >= 4 && index < 6) return <MobItem key={index} item={item} />;
//                     return null;
//                 })}
//             </div>

//             <div id="mainImage">
//                 <img
//                     src="https://rukminim1.flixcart.com/fk-p-ads/1669/742/dp-doc/1758635191032-cmfwlzi0o00r50q8y8thiifsg-ccd2ae75513b7c576c7ce1b8764f445eef3e4fb90c8628e0b32927c5bb1aaf22.jpg?q=80"
//                     alt="ad"
//                 />
//             </div>

//             <div className='mob-items'>
//                 {finalList.map((item, index) => {
//                     if(index >=5 && index < 7) return <MobItem key={index} item={item} />;
//                     return null;
//                 })}
//             </div>

//             <MobProcess />

            
//             <div className='mob-items'>
//                 {finalList.map((item, index) => {
//                     if(index >=3 && index < 8) return <MobItem key={index} item={item} />
//                     return null;
//                 })}
//             </div>

//             <div className='adImage'>
//                 <img
//                     src="https://rukminim1.flixcart.com/fk-p-image/1669/482/cf-chitrakaar-prod/2456e66563bd17c4c3f0ce34f40ca7fa.jpeg?q=80"
//                     alt="ad"
//                 />
//             </div>

//             <div className='mob-items'>
//                 {finalList.map((item, index) => {
//                     if(index >=0 && index < 11) return <MobItem key={index} item={item} />;
//                     return null;
//                 })}
//             </div>
//         </>
//     );
// }
// export default Mobile;


import { useEffect, useMemo, useState } from 'react';
import './mob.css';
import MobHead from './MobHead';
import MobItem from './MobItem';
import Brand from './brands';
import MobProcess from './MobProcess';
import Slider from './MobSlider';
import { useLocation } from 'react-router-dom';

function Mobile({ initialData = [], filterValue = {}, setFilterValue }) {
    const [item, setItem] = useState(Array.isArray(initialData) ? initialData : []);
    const [sortSelect, setSortSelect] = useState("relevance");
    const [checkedItems, setCheckedItems] = useState({});
    const location = useLocation();

    // Load data from sessionStorage or fetch
    useEffect(() => {
        const saved = sessionStorage.getItem("products");
        if (saved) {
            try {
                setItem(JSON.parse(saved));
            } catch (e) {
                console.log("Failed to parse", e);
                sessionStorage.removeItem("products");
            }
        } else {
            fetch("/data.json")
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setItem(data);
                        sessionStorage.setItem("products", JSON.stringify(data));
                    }
                })
                .catch(err => console.error("Failed to load data:", err));
        }
    }, []);

    // Apply filtered products if navigated from filter page
    useEffect(() => {
        if (Array.isArray(location.state?.filteredProducts)) {
            setFilterValue({ ...filterValue, products: location.state.filteredProducts });
        }
    }, [location.state?.filteredProducts]);

    // Filtered products based on checkedItems and price range
    const filtPro = useMemo(() => {
        return item.filter(p => {
            // Price filter
            const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
            const minPrice = filterValue.min ?? 0;
            const maxPrice = filterValue.max ?? Infinity;
            if (priceNum < minPrice || priceNum > maxPrice) return false;

            // Dynamic filters from checkedItems
            for (const [key, values] of Object.entries(checkedItems)) {
                const selected = Object.keys(values || {}).filter(label => values[label]);
                if (selected.length > 0) {
                    if (!selected.includes(p[key])) return false;
                }
            }

            return true;
        });
    }, [item, filterValue, checkedItems]);

    // Sorting
    const sortedProducts = useMemo(() => {
        const sorted = [...filtPro];
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
    }, [filtPro, sortSelect]);

    // Function to render product slices safely
    const renderProducts = (start, end) => {
        return sortedProducts.slice(start, end).map((p, idx) => (
            <MobItem key={`${start}-${idx}`} item={p} />
        ));
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

            <div className='mob-items'>{renderProducts(0, 4)}</div>

            <Brand />

            <div className='mob-items'>{renderProducts(4, 6)}</div>

            <div id="mainImage">
                <img
                    src="https://rukminim1.flixcart.com/fk-p-ads/1669/742/dp-doc/1758635191032-cmfwlzi0o00r50q8y8thiifsg-ccd2ae75513b7c576c7ce1b8764f445eef3e4fb90c8628e0b32927c5bb1aaf22.jpg?q=80"
                    alt="ad"
                />
            </div>

            <div className='mob-items'>{renderProducts(6, 8)}</div>

            <MobProcess />

            <div className='mob-items'>{renderProducts(8, 12)}</div>

            <div className='adImage'>
                <img
                    src="https://rukminim1.flixcart.com/fk-p-image/1669/482/cf-chitrakaar-prod/2456e66563bd17c4c3f0ce34f40ca7fa.jpeg?q=80"
                    alt="ad"
                />
            </div>

            <div className='mob-items'>{renderProducts(12, sortedProducts.length)}</div>
        </>
    );
}

export default Mobile;
