import { useEffect, useMemo, useState } from 'react';
import './mob.css';
import MobHead from './MobHead';
import MobItem from './MobItem';
import Brand from './brands';
import MobProcess from './MobProcess';
import Slider from './MobSlider';
import Sort from '../sort';
import MobSort from './MobSort';

function Mobile({initailData = []}) {
    // // const [item, setItem] = useState([]);
    // const [item,setItem] = useState(Array.isArray(initailData) ? initailData : []);
    // const [filterValue, setFilterValue]  = useState({min: 0, max: Infinity});

    // useEffect(() => {
    //     fetch("/data.json")
    //         .then((res) => res.json())
    //         // .then((data) => setItem(data));
    //         .then((data) => setItem(Array.isArray(data) ? data: []))
    // }, []);

    // const filtPro = useMemo(() => {
    //     return item.filter((p) => {
    //         const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
    //         return(
    //             priceNum >= (filterValue.min ?? 0) &&
    //             priceNum <= (filterValue.max ?? Infinity) && 
    //             Object.entries(filterValue).every(([key, values]) => {
    //                 if(key === "min" || key === "max") return true;
    //                 if(!Array.isArray(values) || values.length === 0) return true;
    //                 return values.some((val) => 
    //                 (p[key] || "").toString().toLowerCase().includes(val.toLowerCase())
    //                 );
    //             })
    //         );
    //     });
    // }, [item,filterValue]);


    const [item, setItem] = useState(Array.isArray(initailData) ? initailData : []);
    const [filterValue, setFilterValue] = useState({ min: 0, max: Infinity });

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setItem(Array.isArray(data) ? data : []));
    }, []);

    const filtPro = useMemo(() => {
        return item.filter((p) => {
            const priceNum = parseInt((p.price || "0").toString().replace(/[^\d]/g, ""));
            return (
                priceNum >= (filterValue.min ?? 0) &&
                priceNum <= (filterValue.max ?? Infinity) &&
                Object.entries(filterValue).every(([key, values]) => {
                    if (key === "min" || key === "max") return true;
                    if (!Array.isArray(values) || values.length === 0) return true;
                    return values.some((val) =>
                        (p[key] || "").toString().toLowerCase().includes(val.toLowerCase())
                    );
                })
            );
        });
    }, [item, filterValue]);



    return (
        <>
            <MobHead prod = {filtPro} />
            {/* <MobItem /> */}

            <Slider />

            <div className='mob-items'>
                {item.slice(0, 4).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <Brand />

            <div className='mob-items'>
                {item.slice(4, 6).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <div id="mainImage">
                <img src="https://rukminim1.flixcart.com/fk-p-ads/1669/742/dp-doc/1758635191032-cmfwlzi0o00r50q8y8thiifsg-ccd2ae75513b7c576c7ce1b8764f445eef3e4fb90c8628e0b32927c5bb1aaf22.jpg?q=80" alt="ad" />
            </div>

            

            <div className='mob-items'>
                {item.slice(5, 7).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            {/* <Slider /> */}
            <MobProcess />

            <div className='mob-items'>
                {item.slice(3, 8).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <div className='adImage'>
                <img src="https://rukminim1.flixcart.com/fk-p-image/1669/482/cf-chitrakaar-prod/2456e66563bd17c4c3f0ce34f40ca7fa.jpeg?q=80" alt="ad" />
            </div>

            <div className='mob-items'>
                {item.slice(0, 11).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            {/* <MobSort /> */}
        </>
    )
}
export default Mobile;




