// function Sort() {
//     return(
//         <>
//             <span className="sortBy" style={{fontWeight:"bold"}}>Sort By</span>
//             <div className="sortFilt">
//                 <span>Relevance</span>
//                 <span style={{marginLeft:"26px"}}>Popularity</span>
//                 <span style={{marginLeft:"27px"}}>Price -- Low to High</span>
//                 <span style={{marginLeft:"31px"}}>Price -- High to Low</span>
//                 <span style={{marginLeft:"30px"}}>Newest First</span>
//             </div>
//         </>
//     )
// }
// export default Sort;



function Sort(sortOption, setSortOption) {
    return(
        <>
            <span className="sortBy" style={{fontWeight:"bold"}}>Sort By</span>
            <div className="sortFilt">
                <span
                    style={{marginLeft:"0px", cursor:"pointer", fontWeight: sortOption === "relevance" ? "bold": "normal"}}
                    onClick={() => setSortOption("relevance")}
                >
                    Relevance
                </span>
                <span style={{marginLeft:"26px", cursor:"pointer", fontWeight: sortOption === "popularity" ? "bold" : "normal"}}
                    onClick={() => setSortOption("popularity")}
                >Popularity</span>

                <span
                    style={{marginLeft:"27px", cursor:"pointer", fontWeight: sortOption === "priceLow" ? "bold" : "normal"}}
                    onClick={() => setSortOption("priceLow")}
                >Price -- Low to High</span>

                <span style={{marginLeft:"31px", cursor:"pointer", fontWeight: sortOption === "priceHigh" ? "bold" : "normal"}}
                    onClick={() => setSortOption("priceHigh")}
                >Price -- High to Low</span>

                <span
                    style={{marginLeft:"30px", cursor:"pointer", fontWeight: sortOption === "newest" ? "bold" : "normal"}}
                    onClick={() => setSortOption("newest")}
                >Newest First</span>
                
            </div>
        </>
    );
}
export default Sort;