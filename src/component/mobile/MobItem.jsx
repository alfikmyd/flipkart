
function MobItem({ item }) {

    return (
        <>
            <div id="mobItem">
                <div className="mobSngl">
                <div className="mobItemMain">
                    <div className="mobFirst">
                        <img src={item.img} alt="imagee" />

                    </div>
                    <div className="mobSecond">
                        <span className="brandHead">{item.brand}</span>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <div className="rateStar" style={{color:"#008C00"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                    <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                </svg>
                            </div>
                            <span style={{fontSize:"12px", color:"#717478", marginLeft:"2px",marginBottom:"5px"}}>{item.revShort}</span>
                            <img style={{width:"60px",height:"16px",marginLeft:"5px",marginBottom:"5px"}} src={item.assured} alt="assure" />
                        </div>

                        <div>
                            <span style={{color:"#008C00",fontWeight:"bold", fontSize:"17px", marginRight:"0"}}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                            </svg>{item.off}</span>
                            <span style={{fontSize:"17px", color:"#717478", fontWeight:"600", textDecoration:"line-through",marginLeft:"7px"}}>{item.oldPrice}</span>
                            <span style={{fontSize:"17px", color:"black",fontWeight:"bold",marginLeft:"7px"}}>{item.price}</span>
                        </div>

                        <div >
                            <img style={{width:"38px",height:"12px"}} src={item.wow} alt="wow" />
                            <span style={{fontSize:"17px", color:"#1642B9", fontWeight:"600", marginLeft:"7px"}}>{item.bankPrice}</span>
                            <span style={{fontSize:"12px", color:"#1642B9",marginLeft:"7px"}}>{item.withBank}</span>
                        </div>

                        <span style={{fontSize:"11px",marginBottom:"5px"}}>{item.exchange || item.nmbr}</span>
                        <span></span>
                    </div>

                    <div className="mobThird"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#878787" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg></div>
                </div>

                <div className="mobSizes">
                    <span>{item.cm}</span>
                    <span>{item.type}</span>
                    <span>{item.operating}</span>
                </div>

                </div>
            </div>
        </>
    )
}
export default MobItem;