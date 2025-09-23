import { useEffect, useState } from "react";


function Top({ dataSource, title }) {
    const [prodct, setPro] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch(dataSource)
            .then((resp) => resp.json())
            .then((data) => setPro(data));
    }, [dataSource]);

    const windowSize = 8;
    const visibleDeals = prodct.slice(index, index + windowSize);;

    const prev = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };
    const next = () => {
        setIndex((prev) => Math.min(prev + 1, prodct.length - windowSize));
    };

    return (
        <>
            <div id="top">
                <span className="dealHead"> {title}</span>

                <div className="topDiv" style={{ display: "flex" }}>
                    {index > 0 && (
                        <button className="prev" onClick={prev} disabled={index === prodct.length - 1} style={{ marginLeft: "-19px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </button>
                    )}

                    <div className="topIt">


                        {visibleDeals.map((item, index) => (
                            <div key={index} className="topItems">

                                <a href="top" style={{ textDecoration: "none", color: "#212121" }}>
                                    <div className="toIt">
                                        <div className="topImage">
                                            <img src={item.topImage} alt="" />
                                        </div>
                                        <div className="topItemName" style={{ display: "flex", flexDirection: "column" }}>
                                            <span className="dealName" style={{ maxWidth: "max-content", minWidth: "max-content" }}>{item.topItem}</span>
                                            <span className="dealPrice">{item.topOff}</span>
                                        </div>
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
                    {index < prodct.length - windowSize && (
                        <button className="next" onClick={next} disabled={index === prodct.length - windowSize}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </>
    )

}
export default Top;
