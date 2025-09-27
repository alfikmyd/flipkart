import { useEffect, useState } from "react";

function Brand() {
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        fetch("/brand.json")
            .then(res => res.json())
            .then(data => setBrand(data))
    }, []);

    return (
        <>
            <div id="mobBrands">
                <span>Which Brand are you looking for ?</span>
                <div className="mobB">
                {brand.map((item,index) => (
                    <div key={index} className="mobBrandName">
                        <img src={item.brandImage} alt={item.brandName} />
                        <span>{item.brandName}</span>
                    </div>
                ))}
                </div>

            </div>
        </>
    )
}
export default Brand;