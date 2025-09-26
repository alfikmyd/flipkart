import React from "react";

function Sort({sortOption,setSortOption}) {
    return(
        <>
            <span className="sortBy" style={{fontWeight:"bold"}}>Sort By</span>
            <div className="sortFilt">
                <span
                    style={{marginLeft:"0px", cursor:"pointer", 
                        fontWeight: sortOption === "relevance" ? "bold": "normal", 
                        color: sortOption === "relevance" ? "#2874f0" : "black",
                        borderBottom: sortOption === "relevance" ? "2px solid #2874f0": "none",
                        paddingBottom:"9px"
                    }}
                    onClick={() => setSortOption("relevance")}
                >
                    Relevance
                </span>
                <span style={{marginLeft:"26px", cursor:"pointer", 
                        fontWeight: sortOption === "popularity" ? "bold" : "normal",
                        color: sortOption === "popularity" ? "#2874f0" : "black",
                        borderBottom: sortOption === "popularity" ? "2px solid #2874f0": "none",
                        paddingBottom:"9px"
                    }}
                    onClick={() => setSortOption("popularity")}
                >Popularity</span>

                <span
                    style={{marginLeft:"27px", cursor:"pointer",
                        fontWeight: sortOption === "priceLow" ? "bold" : "normal" ,
                        color: sortOption === "priceLow" ? "#2874f0" : "black",
                        borderBottom: sortOption === "priceLow" ? "2px solid #2874f0": "none",
                        paddingBottom: "9px"
                    }}
                    onClick={() => setSortOption("priceLow")}
                >Price -- Low to High</span>

                <span style={{marginLeft:"31px", cursor:"pointer",
                         fontWeight: sortOption === "priceHigh" ? "bold" : "normal",
                         color: sortOption === "priceHigh" ? "#2874f0" : "black",
                         borderBottom: sortOption === "priceHigh" ? "2px solid #2874f0" : "none",
                         paddingBottom: "9px"
                        }}
                    onClick={() => setSortOption("priceHigh")}
                >Price -- High to Low</span>

                <span
                    style={{marginLeft:"30px", cursor:"pointer", 
                        fontWeight: sortOption === "newest" ? "bold" : "normal", 
                        color: sortOption === "newest" ? "#2874f0" : "black",
                        borderBottom: sortOption === "newest" ? "2px solid #2874f0" : "none",
                        paddingBottom: "9px"
                    }}
                    onClick={() => setSortOption("newest")}
                >Newest First</span>
                
            </div>
        </>
    );
}
export default Sort;