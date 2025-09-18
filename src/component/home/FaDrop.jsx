import { useState, useEffect } from "react";

function FaDrop() {
    const [fashionData, setFashionData] = useState([]);
    const [activeData, setActiveData] = useState(null);

    useEffect(() => {
        fetch('/FashionDrop.json') // Make sure FashionDrop.json is in the public folder
            .then(res => res.json())
            .then(data => setFashionData(data));
    }, []);

    const handleHover = (id) => {
        const item = fashionData.find(f => f.id === id);
        setActiveData(item || null);
    };

    return (
        <div id="faDrop">
            <div className="fashColOne">
                <span onMouseEnter={() => handleHover(1)}>Men's Top Wear</span>
                <span onMouseEnter={() => handleHover(2)}>Men's Bottom Wear</span>
                <span onMouseEnter={() => handleHover(3)}>Women Ethnic</span>
                <span onMouseEnter={() => handleHover(4)}>Men Footwear</span>
                <span onMouseEnter={() => handleHover(5)}>Women Footwear</span>
                <span onMouseEnter={() => handleHover(6)}>Watches and Accessories</span>
                <span onMouseEnter={() => handleHover(7)}>Women Western</span>
                <span onMouseEnter={() => handleHover(8)}>Bags, Suitcases & Luggage</span>
                <span onMouseEnter={() => handleHover(9)}>Kids</span>
                <span onMouseEnter={() => handleHover(10)}>Essentials</span>
                <span onMouseEnter={() => handleHover(11)}>Winter</span>
            </div>

            <div className="fashColTwo">
                {activeData && (
                    <div>
                        <h4>{activeData.fa}</h4>
                        <ul>
                            {Object.entries(activeData)
                                .filter(([key, value]) => key !== "id" && key !== "fa" && value !== "")
                                .map(([key, value]) => (
                                    <li key={key}>{value}</li>
                                ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FaDrop;
