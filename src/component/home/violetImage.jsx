import { useEffect, useState } from "react";


function Violet() {
    const [violet,setViolet] = useState([]);

    useEffect(() => {
        fetch("violet.json")
            .then(res => res.json())
            .then(data => setViolet(data));
    })

    return(
        <>
        <div id="violet">
            <div className="viol">
            {violet.map((v,index) => (
                <div key={index} className="violetImage">
                    <img src={v.vOne} alt="violet" />
                </div>
            ))}
            </div>
        </div>
        </>
    )
}
export default Violet;
