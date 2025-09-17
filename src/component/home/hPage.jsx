import HomeHeader from "./HomeHeader";
import Category from "./category";
import DealTrend from "./deal";
import './header.css';
import Scroll from "./offScroll";
import Top from "./topProdct";
import Violet from "./violetImage";
import FourCol from "./fourMob";

function Hpage() {
    

    return (
        <>
            <HomeHeader />
            <div id="centerPart">
                <Category />
                <Scroll />
                <DealTrend/>
                <Violet/>
                <Top/>
                <Violet/>
                <FourCol />
            </div>
        </>
    );
}
export default Hpage;




