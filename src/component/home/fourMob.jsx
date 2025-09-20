import { useEffect, useState } from "react";


function FourCol(dataSource) {
    const [mob, setMob] = useState([]);

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

    return (
        <>
            <div id="cols">
                <div className="fourCol">
                    <div className="fColHead">
                        <span>Mobiles To Check Out</span>
                        <button style={{ cursor: "pointer" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg></button>
                    </div>

                    <div className="fCol">
                        {mob.map((item, index) => (
                            <div className="fColImage" key={index}>

                                <div className="fColItem">
                                    <div className="fcolI">
                                        <img src={item.mobImage} alt="" />
                                    </div>
                                    <div className="fColSpan">
                                        <span>{item.mobText}</span>
                                        <span style={{ color: "#388c3c", fontWeight: "bold" }}>{item.mobOff}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="colImage">
                    <img src="https://rukminim1.flixcart.com/www/1070/720/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80" alt="" />
                </div>
            </div>
        </>
    )
}
export default FourCol;
