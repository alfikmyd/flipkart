import { useEffect, useRef, useState } from "react";
import assurePic from "./img/assured.png";



function FiltLeft({ setFilterValue, filterValue }) {
    const [container, setContainer] = useState({});
    const [hide, setHide] = useState(false);

    const [selectedPrice, setSelectedPrice] = useState({ min: 0, max: Infinity });

    const priceSteps = [0, 20000, 40000, 50000, 60000, 75000, Infinity]
    const stepWidth = 100 / (priceSteps.length - 1);
    const [sliderPos, setSliderPos] = useState({ minIndex: 0, maxIndex: priceSteps.length - 1 });
    const [dragging, setDragging] = useState(null);

    const sliderRef = useRef(null)
    // useEffect(() => {
    //     setFilterValue(container);
    // }, [container,setFilterValue]);

    useEffect(() => {
        setFilterValue({ ...container, min: selectedPrice.min, max: selectedPrice.max });
    }, [container, selectedPrice, setFilterValue]);


    const [typeHide, setTypeHide] = useState(false);
    const [prosHide, setProsHide] = useState(false);
    const [genHide, setGenHide] = useState(false);
    const [ramHide, setRamHide] = useState(false);
    const [ssdHide, setSsdHide] = useState(false)
    const [sizeHide, setSizeHide] = useState(false);
    const [osHide, setOsHide] = useState(false);
    const [weightHide, setWeightHide] = useState(false);
    const [touchHide, setTouchHide] = useState(false);
    const [proBrandHide, setProbrandHide] = useState(false);
    const [usageHide, setUsageHide] = useState(false);
    const [graphicsHide, setGraphicHide] = useState(false);
    const [featureHide, setFeatureHide] = useState(false);
    const [storageHide, setStorageHide] = useState(false);
    const [memoryHide, setMemoryHide] = useState(false);
    const [proNameHide, setPronameHide] = useState(false);
    const [diskHide, setDiskHide] = useState(false);
    const [rTypeHide, setRtypeHide] = useState(false);
    const [availHide, setAvailHide] = useState(false);
    const [offHide, setOffHide] = useState(false);
    const [rateHide, setRateHide] = useState(false);
    const [gstHide, setGstHide] = useState(false);
    const [offerHide, setOfferHide] = useState(false);


    const handleCheckbox = (section, value) => {
        setContainer((prev) => {
            const current = Array.isArray(prev[section]) ? prev[section] : [];
            if (current.includes(value)) {
                return { ...prev, [section]: current.filter((v) => v !== value) };
            }
            else {
                return { ...prev, [section]: [...current, value] };
            }
        });
    };


    const handleRemoveItem = (section, value) => {
        if (section === "price") {
            selectedPrice({ min: 0, max: Infinity });
        }
        else {
            setContainer((prev) => {
                const updated = { ...prev };
                if (Array.isArray(updated[section])) {
                    updated[section] = updated[section].filter(
                        (item) => (typeof item === "object" ? item.value : item) !== value
                    );
                    if (updated[section].length === 0) {
                        delete updated[section];
                    }
                }
                return updated;
            });
        }
    };

    const clearBtnAll = () => {
        setContainer({});
        setSelectedPrice({ min: 0, max: Infinity });
        setSliderPos({minIndex: 0, maxIndex: priceSteps.length - 1});
    };


    const clearItem = (section) => {
        if (section === "price") {
            setSelectedPrice({ min: 0, max: Infinity });
            setSliderPos({minIndex: 0, maxIndex: priceSteps.length - 1})
        }
        else {
            setContainer((prev) => {
                const selected = { ...prev };
                delete selected[section];
                return selected;
            });
        }
    };

    const findClosestIndex = (num) => {
        let closest = 0;
        let minDiff = Infinity;
        priceSteps.forEach((p, i) => {
            const diff = Math.abs(p - num);
            if(diff < minDiff){
                minDiff = diff;
                closest = i;
            }
        });
        return closest;
    };


    const handlePriceChange = (key, value) => {

        let numValue = value === "Min" ? 0 : value === "Max" ? Infinity : parseInt(value.replace("₹", ""));

        // const closestIndex = priceSteps.reduce((acc, p, i) =>
        //     Math.abs(p - numValue) < Math.abs(priceSteps[acc] - numValue) ? i : acc, 0);
        const index = findClosestIndex(numValue);


        setSelectedPrice((prev) => ({
            ...prev,
            [key]: numValue
        }));

        
        // setSliderPos((prev) => ({
        //     ...prev,
        //     [key + "Index"]: closestIndex
        // }));
        setSliderPos((prev) => ({
            ...prev,
            [key === "min" ? "minIndex" : "maxIndex"] : index
        }));

        // const index = findClosestIndex(numValue);
        // setSliderPos((prev) => ({
        //     ...prev,
        //     [key === "min" ? "minIndex" : "maxIndex"]: index
        // }));
    };


    // const startDragging = (e, type) => {
    //     e.preventDefault();
    //     const sliderRect = sliderRef.current.getBoundingClientRect();
    //     const stepPixelWidth = sliderRect.width / (priceSteps.length - 1);
    //     const maxIndex = 6; // max index allowed
    //     const minIndex = 0

    //     const onMouseMove = (moveEvent) => {
    //         let newIndex = Math.round((moveEvent.clientX - sliderRect.left) / stepPixelWidth);

    //         // Clamp the index
    //         if (newIndex > maxIndex) newIndex = maxIndex;
    //         if(newIndex < minIndex) newIndex = minIndex;
    //         if (type === "min" && newIndex > sliderPos.maxIndex) newIndex = sliderPos.maxIndex;
    //         if (type === "max" && newIndex < sliderPos.minIndex) newIndex = sliderPos.minIndex;

    //         setSliderPos(prev => ({ ...prev, [type + "Index"]: newIndex }));
    //         setSelectedPrice(prev => ({ ...prev, [type]: priceSteps[newIndex] }));
    //     };

    //     const onMouseUp = () => {
    //         window.removeEventListener("mousemove", onMouseMove);
    //         window.removeEventListener("mouseup", onMouseUp);
    //     };

    //     window.addEventListener("mousemove", onMouseMove);
    //     window.addEventListener("mouseup", onMouseUp);
    // };

    const startDragging = (e, type) => {
        e.preventDefault();
        setDragging(type);

    };

    const handleMove =(clientX) => {
        if(!dragging || !sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        let index = Math.round((mouseX / rect.width) * (priceSteps.length - 1));
        index = Math.max(0, Math.min(priceSteps.length - 1, index));

        setSliderPos((prev) => {
            let newPos;
            if(dragging === "min"){
                newPos = {...prev, minIndex: Math.min(index, prev.maxIndex - 1)};
            }
            else{
                newPos = {...prev, maxIndex: Math.max(index, prev.minIndex + 1)};
            }
            setSelectedPrice({
                min: priceSteps[newPos.minIndex],
                max: priceSteps[newPos.maxIndex]
            });
            return newPos;
        });
    };

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    const stopDragging =() => setDragging(null);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", stopDragging);
        window.addEventListener("touchmove",handleTouchMove);
        window.addEventListener("touchend", stopDragging);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup",stopDragging);
            window.removeEventListener("touchmove",handleTouchMove);
            window.removeEventListener("touchend", stopDragging);
        };
    }, [dragging]);


     

    // const handleSliderMove = (type, newIndex) => {
    //     let newIndex = index
    //     if (type === "min" && newIndex >= sliderPos.maxIndex) newIndex = sliderPos.maxIndex -1;
    //     if (type === "max" && newIndex <= sliderPos.minIndex) newIndex = sliderPos.minIndex + 1;

    //     setSliderPos(prev => ({
    //         ...prev,
    //         [type + "Index"]: newIndex
    //     }));
    //     setSelectedPrice(prev => ({
    //         ...prev,
    //         [type]: priceSteps[newIndex]
    //     }));
    // };

    const handleSliderMove = (type, index) => {
    let newIndex = index;

    if (type === "min" && newIndex >= sliderPos.maxIndex) {
        newIndex = sliderPos.maxIndex - 1;
    }
    if (type === "max" && newIndex <= sliderPos.minIndex) {
        newIndex = sliderPos.minIndex + 1;
    }

    setSliderPos((prev) => {
        return type === "min"
            ? { ...prev, minIndex: newIndex }
            : { ...prev, maxIndex: newIndex };
    });

    setSelectedPrice({
        min: priceSteps[type === "min" ? newIndex : sliderPos.minIndex],
        max: priceSteps[type === "max" ? newIndex : sliderPos.maxIndex],
    });

};

    const blueLineStyle = {
        position: "absolute",
        height: "5px",
        background: "#2874f0",
        borderRadius: "1px",
        top: "2px",
        left: `${sliderPos.minIndex * stepWidth}%`,
        width: `${(sliderPos.maxIndex - sliderPos.minIndex) * stepWidth}%`,
        zIndex: 1,
        transition: dragging ? "none" : "left 0.2s, width 0.2s"
    };


    const priceLabel = () => {
        if (selectedPrice.min === 0 && selectedPrice.max === Infinity) return null;
        let minLabel = selectedPrice.min === 0 ? "Min" : `₹${selectedPrice.min}`;
        let maxLabel = selectedPrice.max === Infinity ? "Max" : `₹${selectedPrice.max}`;
        return `${minLabel} - ${maxLabel}`;
    };


    const type = [
        { label: "Gaming Laptop", value: "Gaming Laptop" },
        { label: "2 in 1 Laptop", value: "2 in 1 Laptop" },
        { label: "Laptop", value: "Laptop" },
        { label: "Chromebook", value: "Chromebook" },
        { label: "Creator Laptop", value: "Creator Laptop" }
    ];


    const processor = [
        { label: "Core i5", value: "Core i5" },
        { label: "Core i3", value: "Core i3" },
        { label: "Core i7", value: "Core i7" },
        { label: "Core i9", value: "Core i9" },
    ];
    const generation = [
        { label: "13th Gen", value: "13th Gen" },
        { label: "12th Gen", value: "12th Gen" },
        { label: "11th Gen", value: "11th Gen" },
        { label: "10th Gen", value: "10th Gen" },
    ];
    const ram = [
        { label: "8 GB", value: "8GB" },
        { label: '16 GB', value: "16 GB" },
        { label: '32 GB', value: "32 GB" },
        { label: "6 GB", value: "6 GB" },
    ];
    const ssd = [
        { label: "512 GB", value: "512 GB" },
        { label: "256 GB", value: "256 GB" },
        { label: "1 TB", value: "1 TB" },
        { label: "128 GB", value: "128 GB" }
    ];
    const scrnSize = [
        { label: "Below 12 inch", value: "Below 12 inch" },
        { label: "14 inch - 14.9 inch", value: "14 inch - 14.9 inch" },
        { label: "15 inch - 15.9 inch", value: '15 inch - 15.9 inch' },
        { label: "Above 20 inch", value: "Above 20 inch" }
    ];
    const os = [
        { label: "Windows 11 Home", value: "Windows 11 Home" },

        { label: "Windows 11", value: "Windows 11" },
        { label: "Chrome", value: "Chrome" },
        { label: "Mac OS", value: "Mac OS" }
    ];
    const weight = [
        { label: "1.2 KG or Below", value: "1.2 KG or Below" },
        { label: "1.6 KG to 1.8 KG", value: "1.6 KG to 1.8 KG" },
        { label: "1.9 KG to 2.1 KG", value: "1.9 KG to 2.1 KG" },
        { label: "Above 2.6 KG", value: "Above 2.6 KG" }
    ];
    const proBrand = [
        { label: "Intel", value: "Intel" },
        { label: "Apple", value: "Apple" },
        { label: "Snapdragon", value: "Snapdragon" },
        { label: "MediaTek", value: "MediaTek" }
    ];
    const usage = [
        { label: "Student", value: "Student" },
        { label: "Business", value: "Business" },
        { label: "Gaming", value: "Gaming" },
        { label: "Home/Office", value: "Home/Office" }
    ];
    const graphics = [
        { label: "4 GB", value: "4 GB" },
        { label: "Integrated Graphics Card", value: "Integrated Graphics Card" },
        { label: "6 GB", value: "6 GB" },
        { label: "8 GB", value: "8 GB" }
    ];
    const features = [
        { label: "MS Office", value: "MS Office" },
        { label: "Full HD Display", value: "Full HD Display" },
        { label: "No Optical Disk Drive", value: "No Optical Disk Drive" }
    ];
    const storage = [
        { label: "SSD", value: "SSD" },
        { label: "eMMC", value: "eMMC" },
        { label: "HDD", value: "HDD" }
    ];
    const memory = [
        { label: "GDDR3", value: "GDDR3" },
        { label: "LPDDR5", value: "LPDDR5" },
        { label: "DDR5", value: "DDR5" },
        { label: "DDR4", value: "DDR4" }
    ];
    const proName = [
        { label: "Intel Integrated", value: "Intel Integrate" },
        { label: "AMD Radeon", vlaue: "AMD Radeon" },
        { label: "Intel Graphics", vlaue: "Intel Graphics" },
        { label: "Qualcomm", value: "Qualcomm" }
    ];
    const disk = [
        { label: "1 TB", value: "1 TB" },
        { label: "2 TB", value: "2 TB" },
        { label: "256 GB", value: "256 GB" }
    ];
    const ramType = [
        { label: "DDR4", value: "DDR4" },
        { label: "SDR", value: "SDR" },
        { label: "LPDDR3", value: "LPDDR3" }
    ];
    const discount = [
        { label: "50% or More", value: "50% or More" },
        { label: "40% or More", value: "40% or More" },
        { label: "30% or More", value: "30% or More" },
        { label: "20% or More", value: "20% or More" }
    ];
    const rate = [
        { label: "4★ & above", value: "4★ & above" },
        { label: "3★ & above", vlaue: "3★ & above" },
        { label: "2★ & above", value: "2★ & above" },
        { label: "1★ & above", value: "1★ & above" }
    ];
    const offers = [
        { label: "Special Price", value: "Special Price" },
        { label: "Buy More, Save More", value: "Buy More, Save More" },
        { label: "No Cost EMI", value: "No Cost EMI" }
    ];


    return (
        <>
            <div id="left">
                <div id="filter">
                    <div className="filtHead">
                        <span>Filters</span>
                        {/* {Object.keys(container).length > 0  */}
                        {(
                            Object.keys(container).length > 0 || !(selectedPrice.min === 0 && selectedPrice.max === Infinity)
                        ) && (
                                <span className="mainClear" onClick={clearBtnAll}>CLEAR ALL</span>
                            )}
                    </div>
                    <div className="itemSelected">

                        {priceLabel() && (
                            <span key="price"
                                onClick={() => clearItem("price")}
                                style={{ cursor: "pointer", marginRight: "8px" }}
                            >x {priceLabel()}</span>
                        )}

                        {Object.entries(container).map(([section, value]) =>
                            (Array.isArray(value) ? value : [value]).map((v, i) => (
                                <span
                                    key={section + i}
                                    onClick={() => handleRemoveItem(section, typeof v == "object" ? v.value : v)}
                                    style={{ cursor: "pointer", marginRight: "8px" }}
                                >
                                    x  {typeof v === "object" ? v.value : v}
                                </span>
                            ))
                        )}
                    </div>
                </div>

                <div id="category">
                    <span style={{ fontSize: "11px", fontWeight: "600", marginLeft: "0px" }}>CATEGORIES</span>
                    <a style={{ fontSize: "13px", color: "#6e6d6dff" }} href="laptop.com"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg> Computers</a>
                    <span style={{ fontSize: "13px", fontWeight: "bold", cursor: "pointer", marginLeft: "13px", marginTop: "2px" }}>Laptops</span>
                </div>

                <div id="price">
                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>PRICE</span>
                    <div className="priceBack" style={{ height: "100%", position: "relative", bottom: "-6px", display: "flex", marginTop: "1px", marginLeft: "0px" }}>
                        <div id="ga" style={{ height: "18.75px", width: "39.4px", backgroundColor: "#e0e0e0", marginTop: "7px", marginLeft: "0px", marginRight: "0" }}></div>
                        <div id="gb" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0", marginRight: "0px", marginLeft: "0" }}></div>
                        <div id="gc" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0", marginLeft: "0px", marginRight: "0px" }}></div>
                        <div id="gd" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0", marginLeft: "0px", marginRight: "0px" }}></div>
                        <div id="ge" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0", marginLeft: "0px", marginRight: "0px" }}></div>
                        <div id="gf" style={{ height: "25px", width: "39.4px", backgroundColor: "#e0e0e0", marginLeft: "0px", marginRight: "0px" }}></div>
                    </div>
                    <div className="priceRange" style={{ paddingRight: "17px" }} ref={sliderRef}>
                        <div className="priceRangeLine">
                            <div id="leftRound" style={{ left: `${sliderPos.minIndex * stepWidth}%`, position:"absolute", zIndex: 2, cursor:"pointer" }}
                                onMouseDown={(e) => startDragging(e, "min")}
                                onTouchStart={(e) => {e.preventDefault(); setDragging("min");}}
                            ></div>
                            <div id="rightRound" style={{ left: `${sliderPos.maxIndex * stepWidth}%`, position:"absolute", zIndex:2, cursor: "pointer" }}
                                onMouseDown={(e) => startDragging(e, "max")}
                                onTouchStart={(e) => {e.preventDefault(); setDragging("max");}}
                            ></div>
                            <div id="constLine" style={{zIndex: 0}}></div>
                            <div id="blueLine" style={blueLineStyle} ></div>
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
                            <select name="min" value={selectedPrice.min === undefined || selectedPrice.min === 0
                                ? "Min"
                                : `₹${selectedPrice.min}`} onChange={(e) => handlePriceChange("min", e.target.value)} >
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
                            <select name="max" value={selectedPrice.max === undefined || selectedPrice.max === Infinity
                                ? "Max"
                                : `₹${selectedPrice.max}`} onChange={(e) => handlePriceChange("max", e.target.value)}>
                                <option value="₹20000">₹20000</option>
                                <option value="₹40000">₹40000</option>
                                <option value="₹50000">₹50000</option>
                                <option value="₹60000">₹60000</option>
                                <option value="₹75000">₹75000</option>
                                <option value="Max">₹75000+</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div id="brand">
                    <div className="brandHead" style={{ cursor: "pointer" }} onClick={() => setHide(prev => !prev)}>
                        <span style={{ fontSize: "12px", fontWeight: "bold", marginLeft: "18px" }}>BRAND</span>
                        <svg style={{ marginLeft: "180px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {hide && (


                        <div className="checkBrand">
                            {container.brand && container.brand.length > 0 && (
                                // {container.brand?.length > 0 && ( 
                                <span className="brandClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("brand")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all</span>
                            )}
                            <label id="hp" htmlFor="hp"><input type="checkbox" value="HP" checked={container.brand?.includes("HP") || false}
                                onChange={() => {
                                    handleCheckbox("brand", "HP");

                                }} />
                                HP
                            </label>
                            <label id="asus" htmlFor="asus"><input type="checkbox" value="ASUS" checked={container.brand?.includes("ASUS") || false} onChange={() => handleCheckbox("brand", "ASUS")} /> ASUS</label>
                            <label id="lenovo" htmlFor="lenovo"><input type="checkbox" value="Lenovo" checked={container.brand?.includes("Lenovo") || false} onChange={() => handleCheckbox("brand", "Lenovo")} /> Lenovo</label>
                            <label id="dell" htmlFor="dell"><input type="checkbox" value="DELL" checked={container.brand?.includes("DELL") || false} onChange={() => handleCheckbox("brand", "DELL")} /> DELL</label>
                            <span style={{ fontSize: "12px", color: "#2c7af8ff", marginTop: "10px", fontWeight: "bold", marginLeft: "0px" }}>19 MORE</span>
                        </div>
                    )}
                </div>


                <div id="type">
                    <div className="typeHead" style={{ cursor: "pointer" }} onClick={() => setTypeHide(prev => !prev)}>
                        <span style={{ fontSize: "13px", fontWeight: "bold", marginLeft: "18px", marginTop: "20px" }}>TYPE</span>
                        <svg style={{ marginLeft: "188px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>

                    {typeHide && (
                        <div className="checkType">
                            {container.type && container.type.length > 0 && (
                                <div className="typeClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("type")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all</div>
                            )}
                            {/* {type.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.type?.includes(item.value) || false} onChange={() => handleCheckbox("type", item.value)} />
                                    {item.label}
                                </label>
                            ))} */}
                            {type.map((t) => (
                                <label key={t.value}>
                                    <input type="checkbox" checked={container.type?.includes(t.value) || false}
                                        onChange={() => handleCheckbox("type", t.value)}
                                    />
                                    {t.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="processor">
                    <div className="processHead" onClick={() => setProsHide(prev => !prev)}>
                        <span>PROCESSOR</span>
                        <svg style={{ marginLeft: "140px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>

                    {prosHide && (
                        <div className="checkProcessor">
                            {container.processor && container.processor.length > 0 && (
                                <div className="procesorClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("processor")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}

                            {processor.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.processor?.includes(item.value) || false} onChange={() => handleCheckbox("processor", item.value)} />
                                    {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>


                <div id="ramCap">
                    <div className="ramHead" onClick={() => setRamHide(prev => !prev)}>
                        <span>RAM CAPACITY</span>
                        <svg style={{ marginLeft: "127px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>

                    {ramHide && (
                        <div className="checkRam">
                            {container.ram && container.ram.length > 0 && (
                                <div className="ramClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("ram")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {ram.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.ram?.includes(item.value) || false} onChange={() => handleCheckbox("ram", item.value)} /> {item.value}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="ssd">
                    <div className="ssdHead" onClick={() => setSsdHide(prev => !prev)}>
                        <span>SSD CAPACITY</span>
                        <svg style={{ marginLeft: "130px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>

                    {ssdHide && (
                        <div className="checkSsd">
                            {container.ssd && container.ssd.length > 0 && (
                                <div className="ssdClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("ssd")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {ssd.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.ssd?.includes(item.value) || false} onChange={() => handleCheckbox("ssd", item.value)} /> {item.value}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="scrnSize">
                    <div className="sizeHead" onClick={() => setSizeHide(prev => !prev)}>
                        <span>SCREEN SIZE</span>
                        <svg style={{ marginLeft: "140px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>

                    {sizeHide && (
                        <div className="checkSize">
                            {container.scrnSize && container.scrnSize.length > 0 && (
                                <div className="sizeClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("scrnSize")}>
                                    <span style={{ backgroundColor: '#dddd', color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {scrnSize.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.scrnSize?.includes(item.value) || false} onChange={() => handleCheckbox("scrnSize", item.value)} /> {item.value}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="os">
                    <div className="osHead" onClick={() => setOsHide(prev => !prev)}>
                        <span>OPERATING SYSTEM</span>
                        <svg style={{ marginLeft: "92px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>

                    {osHide && (
                        <div className="checkOs">
                            {container.os && container.os.length > 0 && (
                                <div className="osClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("os")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {os.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.os?.includes(item.value) || false} onChange={() => handleCheckbox("os", item.value)} /> {item.value}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setOffHide(prev => !prev)}>
                        <span>DISCOUNT</span>
                        <svg style={{ marginLeft: "156px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {offHide && (
                        <div className="checkUsage">
                            {container.discount && container.discount.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("discount")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {discount.map((item) => (
                                <label key={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.discount?.includes(item.value) || false} onChange={() => handleCheckbox("discount", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setRateHide(prev => !prev)}>
                        <span>CUSTOMER RATING</span>
                        <svg style={{ marginLeft: "98px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {rateHide && (
                        <div className="checkUsage">
                            {container.rate && container.rate.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("rate")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {rate.map((item) => (
                                <label key={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.rate?.includes(item.value) || false} onChange={() => handleCheckbox("rate", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>


                <div id="weight">
                    <div className="weightHead" onClick={() => setWeightHide(prev => !prev)}>
                        <span>WEIGHT</span>
                        <svg style={{ marginLeft: "173px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {weightHide && (
                        <div className="checkWeight">
                            {container.weight && container.weight.length > 0 && (
                                <div className="weightClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("weight")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {weight.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.weight?.includes(item.value) || false} onChange={() => handleCheckbox("weight", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}

                </div>

                <div id="generation">
                    <div className="genHead" onClick={() => setGenHide(prev => !prev)}>
                        <span>PROCESSOR GENERATION</span>
                        <svg style={{ marginLeft: "52px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>

                    </div>
                    {genHide && (
                        <div className="checkGen">
                            {container.generation && container.generation.length > 0 && (
                                <div className="genClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("generation")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {generation.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.generation?.includes(item.value) || false} onChange={() => handleCheckbox("generation", item.value)} /> {item.value}
                                </label>
                            ))}
                        </div>
                    )}
                </div>


                <div id="touch">
                    <div className="touchHead" onClick={() => setTouchHide(prev => !prev)}>
                        <span>TOUCH SCREEN</span>
                        <svg style={{ marginLeft: "121px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {touchHide && (
                        <div className="checkTouch">
                            {container.touch && container.touch.length > 0 && (
                                <div className="touchClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("touch")}>
                                    <span style={{ backgroundColor: "#dddd", color: 'black', padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            <label className="yes"><input type="checkbox" value="Yes" checked={container.touch?.includes("Yes") || false} onChange={() => handleCheckbox("touch", "Yes")} />Yes</label>
                            <label className="no"><input type="checkbox" value="No" checked={container.touch?.includes("No") || false} onChange={() => handleCheckbox("touch", "NO")} />No</label>
                        </div>
                    )}
                </div>

                <div id="proBrand">
                    <div className="proBrandHead" onClick={() => setProbrandHide(prev => !prev)}>
                        <span>PROCESSOR BRAND</span>
                        <svg style={{ marginLeft: "90px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {proBrandHide && (
                        <div className="checkProbrand">
                            {container.proBrand && container.proBrand.length > 0 && (
                                <div className="proBrandClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("proBrand")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {proBrand.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.proBrand?.includes(item.value) || false} onChange={() => handleCheckbox("proBrand", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}

                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setUsageHide(prev => !prev)}>
                        <span>USAGE</span>
                        <svg style={{ marginLeft: "177px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {usageHide && (
                        <div className="checkUsage">
                            {container.usage && container.usage.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("usage")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {usage.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.usage?.includes(item.value) || false} onChange={() => handleCheckbox("usage", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="graphics">
                    <div className="graphicsHead" onClick={() => setGraphicHide(prev => !prev)}>
                        <span>DEDICATED GRAPHICS MEMORY</span>
                        <svg style={{ marginLeft: "17px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {graphicsHide && (
                        <div className="checkGraphics">
                            {container.graphics && container.graphics.length > 0 && (
                                <div className="graphicsClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("graphics")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {graphics.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.graphics?.includes(item.value) || false} onChange={() => handleCheckbox("graphics", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setFeatureHide(prev => !prev)}>
                        <span>FEATURES</span>
                        <svg style={{ marginLeft: "155px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {featureHide && (
                        <div className="checkUsage">
                            {container.features && container.features.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("features")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {features.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.features?.includes(item.value) || false} onChange={() => handleCheckbox("features", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setStorageHide(prev => !prev)}>
                        <span>STORAGE TYPE</span>
                        <svg style={{ marginLeft: "123px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {storageHide && (
                        <div className="checkUsage">
                            {container.storage && container.storage.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("storage")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {storage.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.storage?.includes(item.value) || false} onChange={() => handleCheckbox("storage", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setMemoryHide(prev => !prev)}>
                        <span>GRAPHICS MEMORY TYPE</span>
                        <svg style={{ marginLeft: "56px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {memoryHide && (
                        <div className="checkUsage">
                            {container.memory && container.memory.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("memory")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {memory.map((item) => (
                                <label key={item.label} className={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.memory?.includes(item.value) || false} onChange={() => handleCheckbox("memory", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setPronameHide(prev => !prev)}>
                        <span>GRAPHICS PROCESSOR NAME</span>
                        <svg style={{ marginLeft: "27px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {proNameHide && (
                        <div className="checkUsage">
                            {container.proName && container.proName.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("proName")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {proName.map((item) => (
                                <label key={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.proName?.includes(item.value) || false} onChange={() => handleCheckbox("proName", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setDiskHide(prev => !prev)}>
                        <span>HARD DISK CAPACITY</span>
                        <svg style={{ marginLeft: "83px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {diskHide && (
                        <div className="checkUsage">
                            {container.disk && container.disk.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("disk")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {disk.map((item) => (
                                <label key={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.disk?.includes(item.value) || false} onChange={() => handleCheckbox("disk", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setRtypeHide(prev => !prev)}>
                        <span>RAM TYPE</span>
                        <svg style={{ marginLeft: "157px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {rTypeHide && (
                        <div className="checkUsage">
                            {container.ramType && container.ramType.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("ramType")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {ramType.map((item) => (
                                <label key={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.ramType?.includes(item.value) || false} onClick={() => handleCheckbox("ramType", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setAvailHide(prev => !prev)}>
                        <span>AVAILABILITY</span>
                        <svg style={{ marginLeft: "137px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {availHide && (
                        <div className="checkUsage">
                            {container.available && container.available.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("available")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            <label>
                                <input type="checkbox" value="Include Out of Stock" checked={container.available?.includes("Include Out of Stock") || false} onClick={() => handleCheckbox("available", "Include Out of Stock")} /> Include Out of Stock
                            </label>
                        </div>
                    )}
                </div>



                <div id="assure">
                    <div className="assureCheck" style={{ display: "flex", flexDirection: "row" }}>
                        <label style={{ cursor: "pointer", display: "flex", alignItems: "center", marginLeft: "18px" }}>
                            <input
                                type="checkbox"
                                value="F-assured"
                                checked={container.assure?.includes("F-assured")}
                                onChange={() => handleCheckbox("assure", "F-assured")}
                            // style={{ display: "none" }} // hide default checkbox
                            />
                            <img
                                src={assurePic}
                                alt="F-assured"
                                style={{
                                    width: "75px",
                                    marginLeft: "5px"
                                }}
                            />

                            <span>?</span>
                        </label>

                    </div>
                </div>


                <div id="usage">
                    <div className="usageHead" onClick={() => setGstHide(prev => !prev)}>
                        <span>GST INVOICE AVAILABLE</span>
                        <svg style={{ marginLeft: "65px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {gstHide && (
                        <div className="checkUsage">
                            {container.gst && container.gst.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("gst")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            <label>
                                <input type="checkbox" value="GST Invoice Available" checked={container.gst?.includes("GST Invoice Available")} onChange={() => handleCheckbox("gst", "GST Invoice Available")} />
                                GST Invoice Available
                            </label>
                        </div>
                    )}
                </div>

                <div id="usage">
                    <div className="usageHead" onClick={() => setOfferHide(prev => !prev)}>
                        <span>OFFERS</span>
                        <svg style={{ marginLeft: "170px" }} xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    {offerHide && (
                        <div className="checkUsage">
                            {container.offers && container.offers.length > 0 && (
                                <div className="usageClear iClear" style={{ color: "#878787", cursor: "pointer" }} onClick={() => clearItem("offers")}>
                                    <span style={{ backgroundColor: "#dddd", color: "black", padding: "1px", paddingLeft: "3px", paddingRight: "3px" }}>x</span> Clear all
                                </div>
                            )}
                            {offers.map((item) => (
                                <label key={item.label}>
                                    <input type="checkbox" value={item.value} checked={container.offers?.includes(item.value) || false} onChange={() => handleCheckbox("offers", item.value)} /> {item.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

            </div>




        </>
    )
}

export default FiltLeft;



