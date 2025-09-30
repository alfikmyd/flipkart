import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./component/header"
import Footer from "./component/footer"
// import data from "./component/data.json"
import { useState,useEffect } from "react"
import Parent from "./component/filterPage"
import SelectedItem from "./component/selectItem"
import Hpage from "./component/home/hPage"
import Mobile from "./component/mobile/mobile";
import Filt from "./component/mobile/MobFilter";


function App() {
  const [data,setData] = useState([]);
  
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((json) =>setData(json))
      .catch((err) => console.error("Failed"));
  }, []);

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Hpage/>}/>
          <Route path="/laptops" element={<Parent initialData={data} />} />
          <Route path="/item" element={<SelectedItem/>} />
        </Routes>
      </Router> */}

      {/* <Mobile /> */}
      <Filt />
      
    </>
  )
}
export default App


