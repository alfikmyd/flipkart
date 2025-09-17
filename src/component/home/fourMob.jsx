import { useEffect, useState } from "react";


function FourCol(dataSource) {
     const [mob,setMob] = useState([]);

    // useEffect(() => {
    //     fetch(dataSource)
    //         .then(res => res.json())
    //         .then(data => setMob(data));
    // });

    useEffect(() => {
        fetch('./topMob.json')
            .then(res => res.json())
            .then(data => setMob(data));
    });

    return(
        <>
        <div id="cols">
            <div className="fourCol">
                <div className="fColHead">
                <span>Mobiles To Check Out</span>
                
                </div>
                {mob.map((item,index) => (

                
                <div key={index} className="fCol">
                    
                    <div className="fColItem">
                        <img src={item.mobImage} alt="" />
                        <span>{item.mobText}</span>
                        <span>{item.mobOff}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default FourCol;