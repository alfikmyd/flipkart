import { useEffect, useState } from "react";


function Top() {
    const [pro, setPro] = useState([]);

    useEffect(() => {
        fetch("topProduct.json")
            .then(res => res.json())
            .then(data => setPro(data));
    })

    return (
        <>
            <div id="top">
                <span className="dealHead"> Top Products for you</span>
                <div className="topIt">
                {pro.map((item, index) => (
                    <div key={index} className="topItems">
                        
                        <a href="top" style={{ textDecoration: "none", color: "#212121" }}>
                            <div className="topImage">
                                <img src={item.topImage} alt="" />
                            </div>
                            <div className="topItemName" style={{ display: "flex", flexDirection: "column" }}>
                                <span className="dealName" style={{ maxWidth: "max-content",minWidth:"max-content" }}>{item.topItem}</span>
                                <span className="dealPrice">{item.topOff}</span>
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
        </>
    )

}
export default Top;