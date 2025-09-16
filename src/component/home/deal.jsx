import { useEffect, useState } from "react";


function DealTrend() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch("deals.json")
            .then(res => res.json())
            .then(data => setDeals(data));
    })
    return (
        <>
            <div id="dealTrend">
                <span className="dealHead">Top Deals</span>
                <div id="dealItems">
                    {deals.map((item, index) => (
                        <div key={index}>

                            <a href="#">
                                <div className="dealImage">
                                    <img src={item.dealImg} alt="fans" />
                                </div>
                                <div className="dealItemName" style={{ display: "flex", flexDirection: "column" }}>
                                    <span className="dealName">{item.dealItem}</span>
                                    <span className="dealPrice">{item.dealPrice}</span>
                                </div>
                            </a>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
export default DealTrend;





