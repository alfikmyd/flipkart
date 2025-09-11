import { useEffect, useState } from "react";

function Similar(){
    const [suggest,setSuggest] = useState([]);

    useEffect(() => {
        fetch('/similarProd.json')
            .then((res) => res.json())
            .then((data) => setSuggest(data))
            .catch((err) => console.log("error handling", err));
    },[]);
    return(
        <>
        <div id="similarProduct">
            <span>Similar products</span>
            <div style={{backgroundColor:"white"}}>
                {suggest.map((item,index) =>(
                    <div key={index}>
                        <img src={item.image} alt={item.itemname} />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Similar;


