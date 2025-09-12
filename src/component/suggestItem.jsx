import { useEffect, useState } from "react";

function Similar() {
    const [similar, setSimilar] = useState([]);
    const [suggest, setSuggest] = useState([]);

    useEffect(() => {
        fetch('/similarProd.json')
            .then((res) => res.json())
            .then((data) => setSimilar(data))
    }, []);

    useEffect(() => {
        fetch('/suggestedItem.json')
            .then((res) => res.json())
            .then((data) => setSuggest(data))
    }, []);
    return (
        <>
            <div>

                <div id="similarProduct">
                    <span className="similarHead">Similar products</span>
                    <div className="similarItems">
                        {similar.map((item, index) => (
                            <div key={index}>

                                <div className="similarPro">
                                    <a style={{ textDecoration: "none", color: "black" }} href="chuwi">
                                        <div className="similarImage">
                                            <img src={item.image} alt={item.itemName} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                            </svg>
                                        </div>

                                        <div className="similar-itemName">
                                            <span>{item.itemName}</span>
                                        </div>
                                    </a>
                                    <div className="similarRate">
                                        <span className="rateBtn">{item.itemRate}</span>
                                        <span style={{ color: "#878787", marginLeft: "10px" }}>{item.rateCount}</span>
                                        <span>{item.assured}</span>
                                    </div>
                                    <div className="similarPrice">
                                        <span style={{ fontSize: "16px" }}>{item.newPrice}</span>
                                        <span style={{ color: "#878787", textDecoration: "line-through", fontWeight: "500px", marginLeft: "5px" }}> {item.oldPrice} </span>
                                        <span style={{ color: "#388e3c", marginLeft: "5px" }}>{item.priceOff} </span>
                                    </div>
                                    <div>
                                        <span style={{ color: "#a8a6a6ff", fontSize: "12px", marginTop: "8px" }}>{item.sponser}</span>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="suggested">
                    <div className="suggestHead">
                        <span className="suggestBought">Bought together</span>
                        <div className="suggestFilter">
                            <span>All Categories</span>
                            <span>Keyboards</span>
                            <span>Keyboard Skins</span>
                            <span>Webcams</span>
                            <span>Laptop Bags</span>
                            <span>Mouse</span>
                        </div>
                    </div>

                    <div className="suggestItems">
                        {suggest.map((data, index) => (
                            <div key={index}>
                                <a style={{ textDecoration: "none", color: "black" }} href="chuwi">
                                    <div className="suggestPic">
                                        <img src={data.pic} alt={data.pName} />

                                        <svg style={{ color: "#878787" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg>
                                    </div>

                                    <div className="sugItemName">
                                        <span>{data.pName}</span>
                                    </div>
                                </a>
                                <div className="sugRate">
                                    <span className="rateBtn">{data.pRate}</span>
                                    <span style={{ color: "#878787", marginLeft: "10px" }}>({data.pRateCount})</span>
                                </div>
                                <div className="sugPrice">
                                    <span style={{ fontSize: "16px" }}>{data.pNewPrice}</span>
                                    <span style={{ color: "#878787", textDecoration: "line-through", marginLeft: "5px" }}>{data.pOldPrice}</span>
                                    <span style={{ color: "#388e3c" }}>{data.pOff}</span>
                                </div>

                            </div>

                        ))}
                    </div>
                </div>


                <div className="viewed">
                    <div className="viewHead" style={{ display: "flex" }}>
                        <span>Recently Viewed</span>
                        <button>VIEW ALL</button>
                    </div>

                    <div className="similarItems">
                        {similar.map((item, index) => (
                            <div key={index}>

                                <div className="similarPro">
                                    <a style={{ textDecoration: "none", color: "black" }} href="chuwi">
                                        <div className="similarImage">
                                            <img src={item.image} alt={item.itemName} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                            </svg>
                                        </div>

                                        <div className="similar-itemName">
                                            <span>{item.itemName}</span>
                                        </div>
                                    </a>
                                    <div className="similarRate">
                                        <span className="rateBtn">{item.itemRate}</span>
                                        <span style={{ color: "#878787", marginLeft: "10px" }}>{item.rateCount}</span>
                                    </div>
                                    <div className="similarPrice">
                                        <span style={{ fontSize: "16px" }}>{item.newPrice}</span>
                                        <span style={{ color: "#878787", textDecoration: "line-through", fontWeight: "500px", marginLeft: "5px" }}> {item.oldPrice} </span>
                                        <span style={{ color: "#388e3c", marginLeft: "5px" }}>{item.priceOff} </span>
                                    </div>
                                    <div>
                                        <span style={{ color: "#a8a6a6ff", fontSize: "12px", marginTop: "8px" }}>{item.sponser}</span>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>

                </div>


                <div id="lastPart">
                    <div className="lastHead">
                        <span style={{color:"#878787"}}>Top Stories: </span>
                        <span style={{color:"#555555ff",marginLeft:"3px",cursor:"pointer"}}>Brand Directory</span>
                    </div>

                    <div className="lastListItems">
                        <span className="accessHed">MOST SEARCHED IN COMPUTERS & ACCESSORIES: </span>
                        <a href="chuwi">
                            <span>AIRTEL 3G WIFI DONGLE PRICE | MOTHERBOARD | DELL PC PRICE | AOC LED MONITOR | SAMSUNG PRINTERS | 8GB PEN DRIVE | D-LINK DSL-2750U | DELL INSPIRON 3521 |
                                HP LASERJET 1020 | HP INKJET PRINTER | HUAWEI POWER-FI E8221 | HUWEI DONGLE | 17 PROCESSOR PRICE | LENOVO LAPTOP CHARGER | UPS FOR COMPUTERS | ACER LAPTOPS PRICE | MACBOOK PRICE IN INDIA | BEST DELL LAPTOP | 
                                HP LAPTOPS PRICES | LENOVO LAPTOPS | LENOVO 13 LAPTOP | LENOVO G50 | MICRO SD CARD 16GB | TRANSCEND MEMORY CARD | MODEM WITH WIFI | 1 TB | LAPTOP COOLER
                            </span>
                        </a>
                    </div>
                </div>

            </div >
        </>
    )
}
export default Similar;


