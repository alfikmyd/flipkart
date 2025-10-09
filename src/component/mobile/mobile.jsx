
// import { useEffect, useMemo, useState } from 'react';
// import './mob.css';
// import MobHead from './MobHead';
// import MobItem from './MobItem';
// import Brand from './brands';
// import MobProcess from './MobProcess';
// import Slider from './MobSlider';
// import MobSort from './MobSort';
// import { useLocation } from 'react-router-dom';

// function Mobile({ initailData = [] }) {
//     const [item, setItem] = useState(Array.isArray(initailData) ? initailData : []);
//     const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });
//     const [sortSelect, setSortSelect] = useState("relevance");


//     useEffect(() => {
//         fetch("/data.json")
//             .then((res) => res.json())
//             .then((data) => setItem(Array.isArray(data) ? data : []));
//     }, []);



//     // Filter
//     const filtPro = useMemo(() => {
//         return item.filter((p) => {
//             const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
//             return (
//                 priceNum >= (filterValue.min ?? 0) &&
//                 priceNum <= (filterValue.max ?? Infinity)
//             );
//         });
//     }, [item, filterValue]);

//     const sortedProducts = useMemo(() => {
//     let sorted = [...filtPro];
//     switch (sortSelect) {
//       case "priceLow":
//         sorted.sort((a, b) => parseInt(a.price.replace(/₹|,/g, "")) - parseInt(b.price.replace(/₹|,/g, "")));
//         break;
//       case "priceHigh":
//         sorted.sort((a, b) => parseInt(b.price.replace(/₹|,/g, "")) - parseInt(a.price.replace(/₹|,/g, "")));
//         break;
//       case "popularity":
//         sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
//         break;
//       case "newest":
//         sorted.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
//         break;
//       default:
//         break;
//     }
//     return sorted;
//   }, [filtPro, sortSelect]);

//     const location = useLocation();
//     // const filteredProducts = location.state?.filteredProducts || [];
//     const filteredProducts = Array.isArray(location.state?.filteredProducts)
//         ? location.state.filteredProducts : [];

//     // const finalList = filteredProducts.length > 0 ? filteredProducts : sortedProducts;
//     const finalList = filteredProducts.length > 0 ? filteredProducts : setItem


//     console.log("finalList type: ", typeof finalList, "isArray: ",  Array.isArray(finalList))

//     return (
//         <>
//             <MobHead prod={sortedProducts} sortSelect={sortSelect} setSortSelect={setSortSelect} />

//             <Slider />

//             {/* <div className='mob-items'>
//                 {finalList.slice(0, 4).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div> */}


//             {/* <div className='mob-items'>
//                 {finalList.map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div> */}

//             <div className='mon-items'>
//                 {(filteredProducts.length > 0 ? finalList
//                     : (Array.isArray(finalList) ? finalList.slice(0,4) : [])
//                 ).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>


//             <Brand />

//             <div className='mob-items'>
//                 {finalList.slice(4, 6).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>

//             <div id="mainImage">
//                 <img src="https://rukminim1.flixcart.com/fk-p-ads/1669/742/dp-doc/1758635191032-cmfwlzi0o00r50q8y8thiifsg-ccd2ae75513b7c576c7ce1b8764f445eef3e4fb90c8628e0b32927c5bb1aaf22.jpg?q=80" alt="ad" />
//             </div>

//             <div className='mob-items'>
//                 {finalList.slice(5, 7).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>

//             <MobProcess />

//             <div className='mob-items'>
//                 {finalList.slice(3, 8).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>

//             <div className='adImage'>
//                 <img src="https://rukminim1.flixcart.com/fk-p-image/1669/482/cf-chitrakaar-prod/2456e66563bd17c4c3f0ce34f40ca7fa.jpeg?q=80" alt="ad" />
//             </div>

//             <div className='mob-items'>
//                 {finalList.slice(0, 11).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Mobile;



// import { useEffect, useMemo, useState } from 'react';
// import './mob.css';
// import MobHead from './MobHead';
// import MobItem from './MobItem';
// import Brand from './brands';
// import MobProcess from './MobProcess';
// import Slider from './MobSlider';
// import MobSort from './MobSort';
// import { useLocation } from 'react-router-dom';

// function Mobile({ initailData = [] }) {
//     const [item, setItem] = useState(Array.isArray(initailData) ? initailData : []);
//     const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });
//     const [sortSelect, setSortSelect] = useState("relevance");

//     const location = useLocation();

//     // Fetch data
//     // useEffect(() => {
//     //     fetch("/data.json")
//     //         .then((res) => res.json())
//     //         .then((data) => setItem(Array.isArray(data) ? data : []));
//     // }, []);


//     useEffect(() => {
//         const saved = sessionStorage.getItem("products");
//         if(saved){
//             try{
//                 setItem(JSON.parse(saved));
//             }
//             catch(e){
//                 console.log("failed to parse products ", e);
//                 sessionStorage.removeItem("products");
//             }
//         }
//         else{
//             fetch("/data.json")
//                 .then(res => res.json())
//                 .then(data => {
//                     if(Array.isArray(data)){
//                         setItem(data);
//                         sessionStorage.setItem("products", JSON.stringify(data));
//                     }
//                 });
//         }
//     }, []);


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

//     // const filteredProducts = Array.isArray(location.state?.filteredProducts)
//     //     ? location.state.filteredProducts
//     //     : [];

//     const [filteredProducts, setFilteredProducts] = useState(
//         () => location.state?.filteredProducts || []
//     );

//     const finalList = Array.isArray(filteredProducts) && filteredProducts.length > 0
//         ? filteredProducts
//         : Array.isArray(sortedProducts)
//             ? sortedProducts
//             : [];

//     console.log("finalList type: ", typeof finalList, "isArray: ", Array.isArray(finalList));

//     return (
//         <>
//             <MobHead prod={sortedProducts} sortSelect={sortSelect} setSortSelect={setSortSelect} />
//             <Slider />

//             {/* First 4 products */}
//             <div className='mob-items'>
//                 {finalList.slice(0, 4).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>

//             <Brand />

//             {/* Next 2 products */}
//             <div className='mob-items'>
//                 {finalList.slice(4, 6).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>

//             <div id="mainImage">
//                 <img
//                     src="https://rukminim1.flixcart.com/fk-p-ads/1669/742/dp-doc/1758635191032-cmfwlzi0o00r50q8y8thiifsg-ccd2ae75513b7c576c7ce1b8764f445eef3e4fb90c8628e0b32927c5bb1aaf22.jpg?q=80"
//                     alt="ad"
//                 />
//             </div>

//             {/* Products 5 to 7 */}
//             <div className='mob-items'>
//                 {finalList.slice(5, 7).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>

//             <MobProcess />

//             {/* Products 3 to 8 */}
//             <div className='mob-items'>
//                 {finalList.slice(3, 8).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
//             </div>

//             <div className='adImage'>
//                 <img
//                     src="https://rukminim1.flixcart.com/fk-p-image/1669/482/cf-chitrakaar-prod/2456e66563bd17c4c3f0ce34f40ca7fa.jpeg?q=80"
//                     alt="ad"
//                 />
//             </div>

//             {/* First 11 products */}
//             <div className='mob-items'>
//                 {finalList.slice(0, 11).map((item, index) => (
//                     <MobItem key={index} item={item} />
//                 ))}
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
import MobSort from './MobSort';
import { useLocation } from 'react-router-dom';


function Mobile({ initialData = [] }) {
    const [item, setItem] = useState(Array.isArray(initialData) ? initialData : []);
    const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });
    const [sortSelect, setSortSelect] = useState("relevance");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const location = useLocation();
    useEffect(() => {
        const saved = sessionStorage.getItem("products");
        if (saved) {
            try {
                setItem(JSON.parse(saved));
            }
            catch (e) {
                console.log("failed to parse");
                sessionStorage.removeItem("products");
            }
        }
        else {
            fetch("/data.json")
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setItem(data);
                        sessionStorage.setItem("products", JSON.stringify(data));

                    }
                });
        }
    }, []);
    useEffect(() => {
        if (Array.isArray(location.state?.filteredProducts)) {
            setFilteredProducts(location.state.filteredProducts);
        }
    }, [location.state?.filteredProducts]);

    const filtPro = useMemo(() => {
        return item.filter((p) => {
            const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
            return priceNum >= (filterValue.min ?? 0) && priceNum <= (filterValue.max ?? Infinity);

        });
    }, [item, filterValue]);

    const sortedProducts = useMemo(() => {
        let sorted = [...filtPro];
        switch (sortSelect) {
            case "priceLow":
                sorted.sort((a, b) => parseInt(a.price.replace(/₹|,/g, "")) - parseInt(b.price.replace(/₹|,/g, "")));
                break;
            case "priceHigh":
                sorted.sort((a, b) => parseInt(b.price.replace(/₹|,/g, "")) - parseInt(a.price.replace(/₹|,/g, "")));
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
    const finalList = Array.isArray(filteredProducts) && filteredProducts.length > 0
        ? filteredProducts : sortedProducts;

    return(
        <>
            <MobHead prod={sortedProducts} sortSelect={sortSelect} setSortSelect={setSortSelect} />
            <Slider setFilterValue={setFilterValue} filterValue={filterValue} />

            <div className='mob-items'>
                {finalList.slice(0, 4).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <Brand />

            <div className='mob-items'>
                {finalList.slice(4, 6).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <div id="mainImage">
                <img
                    src="https://rukminim1.flixcart.com/fk-p-ads/1669/742/dp-doc/1758635191032-cmfwlzi0o00r50q8y8thiifsg-ccd2ae75513b7c576c7ce1b8764f445eef3e4fb90c8628e0b32927c5bb1aaf22.jpg?q=80"
                    alt="ad"
                />
            </div>

            <div className='mob-items'>
                {finalList.slice(5, 7).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <MobProcess />

            <div className='mob-items'>
                {finalList.slice(3, 8).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <div className='adImage'>
                <img
                    src="https://rukminim1.flixcart.com/fk-p-image/1669/482/cf-chitrakaar-prod/2456e66563bd17c4c3f0ce34f40ca7fa.jpeg?q=80"
                    alt="ad"
                />
            </div>

            <div className='mob-items'>
                {finalList.slice(0, 11).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>
        </>
    );
}
export default Mobile;
