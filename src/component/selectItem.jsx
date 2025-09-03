

function SelectedItem() {
    return (
        <div id="select" style={{marginTop:"70px"}}>
            {data.map((item) => (
                <div id="proDetail">
                    <div className="proPic">
                        <img src={item.img} alt={item.name} />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default SelectedItem;