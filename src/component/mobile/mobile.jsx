import { useEffect, useState } from 'react';
import './mob.css';
import MobHead from './MobHead';
import MobItem from './MobItem';

function Mobile() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, []);

    return(
        <>
            <MobHead/>
            {/* <MobItem /> */}
            <div className='mob-items'>
                {item.slice(0,4).map((item, index) => (
                    <MobItem key={index} item={item} />
                ))}
            </div>
        </>
    )
}
export default Mobile;

