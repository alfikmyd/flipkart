import HomeHeader from "./HomeHeader";
import Category from "./category";
import DealTrend from "./deal";
import './header.css';
import Scroll from "./offScroll";
import Top from "./topProdct";
import Violet from "./violetImage";
import FourCol from "./fourMob";
import Footer from "../footer";

function Hpage() {


    return (
        <>
            <div id="root">
            <HomeHeader />
            <div id="centerPart">
                <Category />
                <Scroll />
                <DealTrend />
                <Violet dataSource={'./violet1.json'} />
                <Top dataSource={'./topProduct.json'} title={"Top Products for you"} />
                <Violet dataSource={'./Violet2.json'} />
                <FourCol />
                <Top dataSource={'./TopDeal.json'} title={"Top Deals on Home Essentials"} />
                <div className="flight"> 
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/350/image/0fe9beb2ae819314.jpg?q=80" alt="flight" />

                </div>
                <Violet dataSource={'./Violet3.json'} />
                <Footer  />
            </div>
            </div>
        </>
    );
}
export default Hpage;


