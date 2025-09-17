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

                <div className="dealImageSec" >
                    <span className="dealHead">Top Deals</span>

                    <div id="dealItems">
                        {deals.map((item, index) => (
                            <div key={index} className="dealEachItem">

                                <a href="#" style={{ textDecoration: "none", color: "#212121" }}>
                                    <div className="dealImage">
                                        <img src={item.dealImg} alt="fans" />
                                    </div>
                                    <div className="dealItemName" style={{ display: "flex", flexDirection: "column" }}>
                                        <span className="dealName" style={{ maxWidth: "max_content" }}>{item.dealItem}</span>
                                        <span className="dealPrice">{item.dealPrice}</span>
                                    </div>

                                    <div className="dealSvg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </div>
                                </a>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="dImage">
                    <img src="https://rukminim2.flixcart.com/www/270/310/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80" alt="dealImage" />
                </div>

            </div>
        </>
    )
}
export default DealTrend;



