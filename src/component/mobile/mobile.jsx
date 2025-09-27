import { useEffect, useState } from 'react';
import './mob.css';
import MobHead from './MobHead';
import MobItem from './MobItem';
import Brand from './brands';
import MobProcess from './MobProcess';
import Slider from './MobSlider';
import Sort from '../sort';
import MobSort from './MobSort';

function Mobile() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, []);

    return (
        <>
            <MobHead />
            {/* <MobItem /> */}
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

            <MobProcess />

            <div className='mob-items'>
                {item.slice(5, 10).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <Slider />

            <div className='mob-items'>
                {item.slice(3, 10).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

            <div className='adImage'>
                <img src="https://rukminim1.flixcart.com/fk-p-image/1669/482/cf-chitrakaar-prod/2456e66563bd17c4c3f0ce34f40ca7fa.jpeg?q=80" alt="ad" />
            </div>

            <div className='mob-items'>
                {item.slice(0, 5).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>

                <MobSort />
        </>
    )
}
export default Mobile;




