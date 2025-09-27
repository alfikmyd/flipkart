import { useEffect, useState } from "react";

function Slider() {
    const [hp, setHp] = useState([]);

    useEffect(() => {
        fetch("/Hp.json")
            .then(res => res.json())
            .then(data => setHp(data));
    }, []);

    return (
        <>
            <div id="mobScroll">

                <div id="hpImage">
                    <div className="hpImgOne">
                        <span className="hpAd">AD</span>
                        <div className="hpImg">
                            <img src="https://rukminim1.flixcart.com/fk-p-ads/208/208/dp-doc/1758133081606-cmfob1jwmj3fc0qa0f4s3df6s-abc.png?q=60" alt="hp" />
                            <span style={{ fontSize: "14px", fontWeight: "bold" }}>HP Laptops</span>
                            <span style={{ fontSize: "12px" }}>Shop now <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg></span>
                        </div>
                    </div>

                    <div className="hpImgTwo">
                        <span className="hpAd">AD</span>
                        <div className="hpImg">
                            <img src="https://rukminim1.flixcart.com/fk-p-ads/208/208/dp-doc/1758133081606-cmfob1jwmj3fc0qa0f4s3df6s-abc.png?q=60" alt="hp" />
                            <span style={{ fontSize: "14px", fontWeight: "bold" }}>HP Laptops</span>
                            <span style={{ fontSize: "12px" }}>Shop now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg></span>
                        </div>
                    </div>
                </div>


                {/* <div id="hpItems">
                    <div className="hpProducts">
                        {hp.map((item,index) => (
                            <div key={index} className="hpEach">
                                <div style={{display:"flex",flexDirection:"column",marginBottom:'10px',padding:"8px", marginTop:"15px"}}>
                                    <img src={item.hpImage} alt="hp" />
                                    <span className="hpRate">{item.hpRate}</span>
                                </div>
                                <div style={{display:"flex", flexDirection:"column", margin:"4px 6px 6px", lineHeight:"20px"}}>
                                    <span>{item.hpName}</span>
                                    <span style={{color:"black",fontWeight:"bold"}}><span style={{color:"#878787", textDecoration:"line-through", marginRight:"4px"}}>{item.hpOldPrice}</span> {item.hpPrice}</span>
                                    <span style={{color:"#008c00", fontWeight:"bold"}}>{item.hpOff}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div id="hpItems">
                    <div className="hpProducts">
                        {hp.map((item, index) => (
                            <div key={index} className="hpEach">
                                <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                                    <img src={item.hpImage} alt="hp" style={{ height: "120px", objectFit: "contain" }} />
                                    <span className="hpRate">{item.hpRate}</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", lineHeight: "20px" }}>
                                    <span>{item.hpName}</span>
                                    <span style={{ fontWeight: "bold" }}>
                                        <span style={{ color: "#878787", textDecoration: "line-through", marginRight: "4px" }}>
                                            {item.hpOldPrice}
                                        </span>
                                        {item.hpPrice}
                                    </span>
                                    <span style={{ color: "#008c00", fontWeight: "bold" }}>{item.hpOff}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </>
    )
}
export default Slider;