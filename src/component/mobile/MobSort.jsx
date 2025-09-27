
function MobSort() {

    return(
        <>
            <div id="mobSort">
                <div className="mSort">
                    <div>
                        <span>SORT BY</span>
                    </div>

                    <div className="mbSortSelect">
                        <div>
                            <span>Relevance</span>
                            <label><input type="radio" /></label>
                        </div>

                        <div>
                            <span>Popularity</span>
                            <input type="radio" />
                        </div>
                        <div>
                            <span>Price -- Low to High</span>
                            <input type="radio" />
                        </div>

                        <div>
                            <span>Price -- High to Low</span>
                            <input type="radio" />
                        </div>

                        <div>
                            <span>Newest First</span>
                            <input type="radio" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MobSort;