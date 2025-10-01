import { useMemo, useState } from "react";
import Sort from "../sort";
import MobSort from "./MobSort";
import Filt from "./MobFilter";
import { Link } from "react-router-dom";

function MobHead({prod = []}) {
    const [sort, setSort] = useState(false);
    const [sortSelect, setSortSelect] = useState("relevance");

    const sortPro = useMemo(() => {
        const proCopy = [...prod];

        switch (sortSelect){
            case "popularity":
                return proCopy.sort((a,b) => b.popularity - a.popularity);
            case "priceLow":
                return proCopy.sort(
                    (a,b) => parseInt(a.price.replace(/₹|,/g, ""))- parseInt(b.price.replace(/₹|,/g, ""))
                );
            case "priceHigh":
                return proCopy.sort(
                    (a,b) => parseInt(b.price.replace(/₹|,/g, "")) - parseInt(a.price.replace(/₹|,/g, ""))
                );
            case "newest":
                return proCopy.sort(
                    (a,b) => new Date(b.releaseDate) - new Date(a.releaseData)
                );
            default:
                return proCopy;
        }
    }, [prod,sortSelect]);

    if(!sortPro || sortPro.length === 0){
        return <p>No products found</p>;
    }


    return (
        <>
            <div id="mobileHeader">
                <div id="mobHead">
                    <div className="headLeft">
                        <div style={{ marginTop: "-2px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg></div>
                        <div style={{ width: "23px", marginLeft: "-3px" }}>
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png" alt="flipkart" />
                        </div>
                        <div style={{ marginLeft: "-3px" }}><span>laptop</span></div>
                    </div>

                    <div className="headRight">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </div>
                        <div style={{ marginRight: "17px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg></div>
                        <div><span>Login</span></div>
                    </div>

                </div>

                <div className="filtSort">
                    <div className="sortPart" onClick={() => setSort(true)} onBlur={() => setSort(false)}>
                        <div className="mobSort" >
                            <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"></path></svg>
                            <span style={{ marginLeft: "6px" }}>Sort</span>

                        </div>
                        {sort && (
                            <MobSort sortSelect={sortSelect} setSortSelect={setSortSelect} />
                        )}
                    </div>
                    <div style={{width:"100%"}}>
                    <Link to={"/filter" } style={{textDecoration:"none", color:"black"}} >
                    <div className="mobFilt">
                        <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M148 172H40M216 172h-28"></path><circle cx="168" cy="172" r="20" fill="none" stroke="#111112" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></circle><path fill="none" stroke="#111112" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M84 84H40M216 84h-92"></path><circle cx="104" cy="84" r="20" fill="none" stroke="#111112" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></circle></svg>
                        <span style={{ marginLeft: "6px", marginBottom: "-5px" }}>Filter</span>
                    </div>
                    </Link>
                    </div>
                </div>

                <div className="topSale">
                    <div className="topS">
                        <div>
                            <img src="https://rukminim1.flixcart.com/www/64/64/promos/21/09/2025/c5b298ff-4f0f-4b32-93f0-c9b53d9ea20e.jpg?q=60" alt="sale" />
                        </div>
                        <div>
                            <span>Top Sale Discounts</span>
                        </div>
                    </div>

                    <div className="topIntel">
                        <div>
                            <img src="https://rukminim1.flixcart.com/www/64/64/promos/06/09/2022/ecf39e45-c8f0-4976-bbd3-43145e35d030.png?q=60" alt="intel" />
                        </div>
                        <div>
                            <span>Intel</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div id="mainImage">
            <img src="https://rukminim1.flixcart.com/fk-p-ads/1669/742/dp-doc/1758635191032-cmfwlzi0o00r50q8y8thiifsg-ccd2ae75513b7c576c7ce1b8764f445eef3e4fb90c8628e0b32927c5bb1aaf22.jpg?q=80" alt="ad" />
        </div> */}

        </>
    )

}
export default MobHead;