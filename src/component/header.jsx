import { useState } from "react";
import logoPic from "./img/flip-logo.png";
import plusPic from "./img/plus.png";
import zonePic from "./img/plus-blue.png";
import orderPic from './img/order-img.png';
import giftPic from './img/giftCard.png';
import advPic from "./img/advertise.png";
import Links from "./navLinks";

function Header() {
    const [showFocus, setShowFocus] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [moreHover, setMorehover] = useState(false);

    const [navHoverIndex, setNavHoverIndex] = useState(null);
    const [arrowHover, setArrowHover] = useState(null);

    const [childLink, setChildLink] = useState(null);

    const navItems = [
        { label: "Electronics", className: "electronics", style: { marginLeft: "56px" } },
        { label: "TVs & Appliances", className: "tv", style: { marginLeft: "56px" } },
        { label: "Men", className: "men", style: { marginLeft: "56px" } },
        { label: "Women", className: "women", style: { marginLeft: "56px" } },
        { label: "Baby & Kids", className: "baby", style: { marginLeft: "56px" } },
        { label: "Home & Furniture", className: "home", style: { marginLeft: "56px" } },
        { label: "Sports, Books & More", className: "sports", style: { marginLeft: "56px" } },
        { label: "Flights", style: { marginLeft: "56px" } },
        { label: "Offer Zone", style: { marginLeft: "56px" } }
    ];

    return (
        <>
            <header>
                <div className="logo">
                    <img src={logoPic} alt="flip" />
                    <a href="#">
                        <span className="exportLogo">Explore</span>
                        <span className="plusLogo"> Plus <img src={plusPic} alt="plus" /></span>
                    </a>
                </div>

                <div id="search">
                    <div className="searchInput">
                        <input type="text" placeholder="Search for products, brands and more" onFocus={() => setShowFocus(true)} onBlur={() => setShowFocus(false)} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </div>
                    {showFocus && (
                        <div id="headerSearch">
                            <span className="iTrend">Trending</span>
                            <span className="iMobiles"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                                mobiles</span>

                            <span className="iShoes"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg> shoes</span>
                            <span className="iShirt"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg> t shirts</span>

                            <span className="iLap"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg> laptops</span>
                            <span className="iWatch"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg> watches</span>
                        </div>
                    )}

                </div>
                <div id="login">
                    <button onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>Login</button>
                    {hovered && (
                        <div id="loginDrop">
                            <div className="lCustomer" style={{ paddingLeft: "15px", fontWeight: "bold", paddingBottom: "7px", borderBottom: "1px solid #ebe8e8ff" }}>
                                <span>New customer?</span>
                                <a style={{ color: "#2784f0", textDecoration: "none", marginLeft: "45px" }} href="#">Sign Up</a>
                            </div>
                            <div className="lProfile" style={{ paddingLeft: "23px", borderBottom: "1px solid #ebe8e8ff" }}>
                                <svg style={{ color: "#2874f0" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd"
                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                                <span>My Profile</span>
                            </div>
                            <div className="lZone" style={{ paddingLeft: "19px", borderBottom: "1px solid #ebe8e8ff" }}>
                                <img src={zonePic} width="24px"></img>
                                <span>Flipkart Plus Zone</span>
                            </div>
                            <div className="lOrder" style={{ paddingLeft: "23px", borderBottom: "1px solid #ebe8e8ff" }}>
                                <img src={orderPic} width="20px"></img>
                                <span>Orders</span>
                            </div>
                            <div className="lWish" style={{ paddingLeft: "23px", borderBottom: "1px solid #ebe8e8ff" }}>
                                <svg style={{ color: "#2784f0", fontWeight: "bold" }} xmlns="http://www.w3.org/2000/svg" width="13"
                                    height="13" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                </svg>
                                <span>Wishlist</span>
                            </div>
                            <div className="lReward" style={{ paddingLeft: "23px", borderBottom: "1px solid #ebe8e8ff" }}>
                                <svg style={{ color: "#2874f0" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    fill="currentColor" class="bi bi-hdd-stack-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
                                </svg>
                                <span>Rewards</span>
                            </div>
                            <div className="lGift" style={{ paddingLeft: "23px" }}>
                                <img src={giftPic} alt="gift" />
                                <span>Gift Cards</span>
                            </div>
                        </div>
                    )}
                </div>
                <div id="header-links">
                    <div className="sellerLink">Become a Seller</div>

                    <div id="more" onMouseOver={() => { setMorehover(true); setArrowHover(true) }} onMouseOut={() => { setMorehover(false); setArrowHover(null) }}>
                        <div className="moreLink">
                            <span>More <svg
                                style={{ transform: arrowHover === "More" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", }}
                                className="upArrow" xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg></span>
                        </div>
                        {moreHover && (
                            <div className="moreDrop">
                                <div className="mNotificate" style={{ borderBottom: "1px solid #ebe8e8ff" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                        className="bi bi-bell-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                                    </svg>
                                    <span>Notification Preference</span>
                                </div>
                                <div className="mCare" style={{ borderBottom: "1px solid #ebe8e8ff" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                        className="bi bi-question-square-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927" />
                                    </svg>
                                    <span>24x7 Customer Care</span>
                                </div>
                                <div className="mAd" style={{ borderBottom: "1px solid #ebe8e8ff" }}>
                                    <img src={advPic} alt="" style={{ width: "17px", marginLeft: "20px" }} />
                                    <span>Adveritse</span>
                                </div>
                                <div className="mApp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                        class="bi bi-download" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                        <path
                                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                    </svg>
                                    <span>Download App</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div id="cartLink">
                        <svg className="GAbRIN" width="16" height="17" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="cziJ98" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                        <span> Cart</span>
                    </div>
                </div>

            </header>

            <nav>
                <div id="headNav">
                    {navItems.map((item, index) => (
                        <span
                            key={item.label}
                            className={item.className}
                            style={{
                                color: navHoverIndex === index ? "#2784f0" : "#212121",
                                cursor: "pointer",
                                marginLeft: "56px",
                            }}
                            onMouseOver={() => {
                                setNavHoverIndex(index);
                                setArrowHover(index);
                                setChildLink(index <7 ? <Links/> : "")
                            }}
                            onMouseOut={() => {
                                setNavHoverIndex(null);
                                setArrowHover(null);
                                setChildLink(null);
                            }}
                        >
                            <span>{item.label}</span>

                            {index < 7 && (
                                <span>
                                    <svg
                                        className="upArrow"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        style={{
                                            transform: arrowHover === index ? "rotate(180deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s ease"
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                        />
                                    </svg>
                                </span>
                            )}

                        </span>
                    ))}
                </div>

                <section>
                    {childLink && (
                        <div id="child">
                            {childLink}
                        </div>
                    )}


                </section>
            </nav >

        </>
    )
}
export default Header



