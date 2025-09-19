import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

function FaDrop() {
    const [fashionData, setFashionData] = useState([]);
        const [content, setContent] = useState([]);

    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        fetch('/FashionDrop.json') // Make sure FashionDrop.json is in the public folder
            .then(res => res.json())
            .then(data => setFashionData(data));
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
        </>
    );
}

export default FaDrop;
