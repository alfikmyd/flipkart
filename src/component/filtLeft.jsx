import { useState } from "react";

function FiltLeft() {
    const [constiner, setContainer] = useState(null)


    return (
        <>
            <div id="left">
                <div id="filter">
                    <div className="filtHead">
                        <span>Filters</span>
                        <span className="mainClear">CLEAR ALL</span>
                    </div>
                    <span className="itemSelected"></span>
                </div>

                <div id="category">
                    <span style={{ fontSize: "11px", fontWeight: "600" }}>CATEGORIES</span>
                    <a style={{ fontSize: "13px", color: "#6e6d6dff" }} href="laptop.com"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg> Computers</a>
                    <span style={{ fontSize: "13px", fontWeight: "bold", cursor: "pointer", marginLeft: "13px", marginTop: "2px" }}>Laptops</span>
                </div>

                <div id="price">
                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>PRICE</span>
                    <div className="priceBack" style={{ height: "100%", position: "relative", bottom: "-6px", display: "flex", marginTop: "1px" }}>
                        <div id="ga" style={{ height: "18.75px", width: "39.4px", backgroundColor: "#e0e0e0", marginTop: "7px" }}></div>
                        <div id="gb" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0" }}></div>
                        <div id="gc" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0" }}></div>
                        <div id="gd" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0" }}></div>
                        <div id="ge" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0" }}></div>
                        <div id="gf" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0" }}></div>
                    </div>
                    <div className="priceRange" style={{ paddingRight: "17px" }}>
                        <div className="priceRangeLine">
                            <div id="leftRound"></div>
                            <div id="rightRound"></div>
                            <div id="constLine"></div>
                            <div id="blueLine"></div>
                        </div>
                        <div className="priceDot">
                            <div id="dota" style={{ display: "flex", textAlign: "left", userSelect: "none", color: "#c2c2c2", fontSize: "20px" }}>.</div>
                            <div id="dotb" style={{ display: "flex", textAlign: "left", userSelect: "none", color: "#c2c2c2", fontSize: "20px" }}>.</div>
                            <div id="dotc" style={{ display: "flex", textAlign: "left", userSelect: "none", color: "#c2c2c2", fontSize: "20px" }}>.</div>
                            <div id="dotd" style={{ display: "flex", textAlign: "left", userSelect: "none", color: "#c2c2c2", fontSize: "20px" }}>.</div>
                            <div id="dote" style={{ display: "flex", textAlign: "left", userSelect: "none", color: "#c2c2c2", fontSize: "20px" }}>.</div>
                            <div id="dotf" style={{ display: "flex", textAlign: "left", userSelect: "none", color: "#c2c2c2", fontSize: "20px" }}>.</div>
                            <div id="dotg" style={{ display: "flex", textAlign: "left", userSelect: "none", color: "#c2c2c2", fontSize: "20px" }}>.</div>
                        </div>
                    </div>

                    <div id="priceSelect">
                        <div className="minPrice">
                            <select name="min">
                                <option value="Min">Min</option>
                                <option value="₹20000">₹20000</option>
                                <option value="₹40000">₹40000</option>
                                <option value="₹50000">₹50000</option>
                                <option value="₹60000">₹60000</option>
                                <option value="₹75000">₹75000</option>
                            </select>
                        </div>
                        <div id="to">to</div>
                        <div className="maxPrice">
                            <select name="mac">
                                <option value="₹20000">₹20000</option>
                                <option value="₹40000">₹40000</option>
                                <option value="₹50000">₹50000</option>
                                <option value="₹60000">₹60000</option>
                                <option value="₹75000">₹75000</option>
                                <option value="Max" selected>₹75000+</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div id="brand">
                    <span style={{ fontSize: "12px", fontWeight: "bold", paddingTop: "20px", marginLeft: "18px" }}>BRAND</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
            </div>
        </>
    )
}
export default FiltLeft;




