
function MobSort({sortSelect, setSortSelect}) {

    return(
        <>
            <div id="mobSort">
                <div className="mSort">
                    <div className="sortHead">
                        <span>SORT BY</span>
                    </div>

                    <div className="mbSortSelect">
                        <div className="sortIt" onClick={() => setSortSelect("relevance")}>
                            <span className="relevance">Relevance</span>
                            <input type="radio" checked={sortSelect === "relevance"}
                                onChange={() =>setSortSelect("relevance")}
                                style={sortSelect === "relevance" ? {accentColor: "blue"} : {}}
                            />
                        </div>

                        <div onClick={() => setSortSelect("popularity")}>
                            <span className="relevance">Popularity</span>
                            <input type="radio" checked={sortSelect === "popularity"} 
                                onChange={() => setSortSelect("popularity")}
                                style={sortSelect === "popularity" ? {accentColor: "blue"} : {}}
                            />
                        </div>
                        <div onClick={() => setSortSelect("priceLow")}>
                            <span className="priceLow">Price -- Low to High</span>
                            <input type="radio" checked={sortSelect === "priceLow"}
                                onChange={() => setSortSelect("priceLow")}
                                style={sortSelect === "priceLow" ? {accentColor: "blue"} : {}}
                            />
                        </div>

                        <div onClick={() => setSortSelect("priceHigh")}>
                            <span className="priceLow">Price -- High to Low</span>
                            <input type="radio" checked={sortSelect === "priceHigh"}
                                onChange={() =>setSortSelect("priceHigh")}
                                style={sortSelect === "priceHigh" ? {accentColor: "blue"} : {}}
                            />
                        </div>

                        <div onClick={() => setSortSelect("newest")}>
                            <span className="new">Newest First</span>
                            <input type="radio" checked={sortSelect === 'newest'}
                                onChange={() => setSortSelect("newest")}
                                style={sortSelect === "newest" ? {accentColor: "blue"} : {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MobSort;