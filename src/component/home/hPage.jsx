import HomeHeader from "./HomeHeader";
import Category from "./category";
import DealTrend from "./deal";
import './header.css';
import Scroll from "./offScroll";


function Hpage() {
    return (
        <>
            <HomeHeader />
            <div id="centerPart">
                <Category />
                <Scroll />
                <DealTrend/>
            </div>
        </>
    )
}
export default Hpage;