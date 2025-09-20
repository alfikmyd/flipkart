import { useEffect, useState } from "react";


function DealTrend() {
    const [deals, setDeals] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch("deals.json")
            .then(res => res.json())
            .then(data => setDeals(data));
    }, []);

    const windowSize = 8;
    const visibleDeals = deals.slice(index, index + windowSize);

    const prev = () => {
        setIndex((prev) => Math.max(prev - 2, 0));
    };
    const next = () => {
        setIndex((prev) => Math.min(prev + 2, deals.length - windowSize));
    };
    
    return (
        <>
            <div id="dealTrend">

                <div className="dealImageSec" >
                    <span className="dealHead">Top Deals</span>

                    <div style={{ display: "flex" }}>
                        {index > 0 && (
                            <button className="prev" style={{marginLeft:"-19px"}} onClick={prev} disabled={index === deals.length - 1} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                </svg>
                            </button>
                        )}
                        <div id="dealItems">
                            {visibleDeals.map((item,idx) => (
                                <div key={idx} className="dealEachItem">
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

                      
                        {index < deals.length -windowSize && (
                            <button className="next" onClick={next} disabled={index === deals.length - windowSize}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        )}
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



