import { useEffect, useState } from "react";
import '../home/header.css';
import FaDrop from "./FaDrop";
import { Link } from "react-router-dom";
import Parent from "../filterPage";



function Category() {
    const [fashion, setFashion] = useState(false)
    const [content, setContent] = useState([]);
    const [activeId, setActiveId] = useState(null);
    const [electro, setElectro] = useState(false);
    const [home, setHome] = useState(false);
    const [food, setFood] = useState(false)


    useEffect(() => {
        fetch("./Fashion.json")
            .then(resp => resp.json())
            .then(data => setContent(data));
    }, []);


    const getCategory = (id) => {
        const found = content.find((cat) => cat.id === id);
        if (!found) return { heading: "", items: [] };

        const { fa, id: _, ...rest } = found;

        return {
            heading: fa,
            items: Object.values(rest).filter(
                (val) => typeof val === "string" && isNaN(val)
            ),
        };
    };


    return (
        <>
            <div id="contain">
                <div className="con" style={{ margin: "0px" }}>
                    <a href="min">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100" alt="minute" />

                        <span>Minutes</span>
                    </a>
                </div>
                <Link to="/laptops">
                <div className="con" style={{ margin: "0px", marginLeft: "46px" }}>
                    <a href="mob">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" alt="mobile" />

                        <span>Mobiles & Tablets</span>
                    </a>
                </div>
                </Link>


                <div className="categoryC"
                    onMouseOver={() => {
                        setFashion(true)

                    }}

                    onMouseOut={() => {
                        setFashion(false);
                        setActiveId(null);

                    }}
                >
                    <div className="con" style={{ cursor: "default", margin: "0px", marginLeft: "42px" }}>
                        <a href="fashion" >
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="fashion" />


                            <span>Fashion <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                            </span>
                        </a>

                        {fashion && (
                            <div className="fashionDrop" style={{ position: "absolute" }}>
                                <div className="fashColOne">
                                    <span onMouseOver={() => setActiveId(1)} >Men's Top Wear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(2)} >Men's Bottom Wear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Women Ethnic<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Men Footwear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Women Footwear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Watches and Accessories<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Women Western<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Bags, Suitcases & Luggage<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Kids<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Essentials<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Winter<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                </div>


                                <div className="fashColTwo" >
                                    {activeId && (
                                        // <ul>
                                        //     {getItems(activeId).map((item,index) => (
                                        //         <li key={index}>{item}</li>
                                        //     ))}
                                        // </ul>
                                        <>
                                            <h4>{getCategory(activeId).heading}</h4>
                                            <ul>
                                                {getCategory(activeId).items.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </>

                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className="catD"
                    onMouseOver={() => setElectro(true)}
                    onMouseOut={() => {
                        setElectro(false);
                        setActiveId(null)
                    }}
                >
                    <div className="con" style={{ margin: "0px", cursor: "default", marginLeft: "42px" }}>
                        <a href="electronics">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100" alt="" />


                            <span>Electronics  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                            </span>
                        </a>

                        {electro && (
                            <div className="electroDrop" style={{ position: "absolute", display: "flex" }}>
                                <div className="fashColOne">
                                    <span onMouseOver={() => setActiveId(1)} >Men's Top Wear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(2)} >Men's Bottom Wear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Women Ethnic<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Men Footwear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Women Footwear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Watches and Accessories<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Women Western<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Bags, Suitcases & Luggage<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Kids<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Essentials<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Winter<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                </div>


                                <div className="fashColTwo" >
                                    {activeId && (
                                        // <ul>
                                        //     {getItems(activeId).map((item,index) => (
                                        //         <li key={index}>{item}</li>
                                        //     ))}
                                        // </ul>
                                        <>
                                            <h4>{getCategory(activeId).heading}</h4>
                                            <ul>
                                                {getCategory(activeId).items.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </>

                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className="catE"
                    onMouseOver={() => setHome(true)}
                    onMouseOut={() => {
                        setHome(false);
                        setActiveId(null)
                    }}
                >
                    <div className="con" style={{ margin: "0px", marginLeft: "31px" }}>
                        <a href="furniture">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100" alt="" />

                            <span>Home & Furniture  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                            </span>
                        </a>

                        {home && (
                            <div className="electroDrop" style={{ position: "absolute", display: "flex" }}>
                                <div className="fashColOne">
                                    <span onMouseOver={() => setActiveId(1)} >Men's Top Wear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(2)} >Men's Bottom Wear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Women Ethnic<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Men Footwear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Women Footwear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Watches and Accessories<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Women Western<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Bags, Suitcases & Luggage<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(3)} >Kids<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(1)} >Essentials<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)} >Winter<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                </div>


                                <div className="fashColTwo" >
                                    {activeId && (
                                        // <ul>
                                        //     {getItems(activeId).map((item,index) => (
                                        //         <li key={index}>{item}</li>
                                        //     ))}
                                        // </ul>
                                        <>
                                            <h4>{getCategory(activeId).heading}</h4>
                                            <ul>
                                                {getCategory(activeId).items.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </>

                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className="con" style={{ margin: "0", marginLeft: "31px" }}>
                    <a href="tvs">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100" alt="" />
                        <span>TVs & Appliances</span>

                    </a>
                </div>
                <div className="con" style={{ margin: "0px", marginLeft: "33px" }}>
                    <a href="flight">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" alt="" />
                        <span>Flight Bookings</span>
                    </a>
                </div>

                <div
                    onMouseOver={() => setFood(true)}
                    onMouseOut={() => {
                        setFood(false);
                        setActiveId(null)
                    }}
                >
                    <div className="con" style={{ margin: "0px", marginLeft: "31px" }}>
                        <a href="beauty">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100" alt="" />
                            <span>Beauty, Food.. <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg></span>
                        </a>
                        {food && (
                            <div className="electroDrop" style={{ position: "absolute", display: "flex" }}>
                                <div className="fashColOne">
                                    <span onMouseOver={() => setActiveId(1)}>Men's Top Wear
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(2)}>Men's Bottom Wear
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(3)}>Women Ethnic
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(1)}>Men Footwear<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)}>Women Footwear
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(3)}>Watches and Accessories
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(1)}>Women Western<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                    <span onMouseOver={() => setActiveId(2)}>Bags, Suitcases & Luggage
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(3)}>Kids
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(1)}>Essentials
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>
                                    <span onMouseOver={() => setActiveId(2)}>Winter
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="currentColor" className="bi bi-chevron-right sv" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </span>

                                </div>

                                <div className="fashColTwo">
                                    {activeId && (
                                        <>
                                            <h4>{getCategory(activeId).heading}</h4>
                                            <ul>
                                                {getCategory(activeId).items.map((item,index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                </div>


                <div className="con" style={{ margin: "0px", marginLeft: "53px" }}>
                    <a href="grocery">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100" alt="" />
                        <span>Grocery</span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Category;



