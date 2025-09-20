import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./component/header"
import Footer from "./component/footer"
// import data from "./component/data.json"
import { useState } from "react"
import Parent from "./component/filterPage"
import SelectedItem from "./component/selectItem"
import HomeHeader from "./component/home/HomeHeader"
import Hpage from "./component/home/hPage"
import data from "./component/data.json"


function App() {
  // const product = data;

  return (
    <>
      {/* <HomeHeader/> */}
      {/* <Hpage /> */}
      {/* <Header /> */}
      {/* <Parent initialData={data} /> */}
      {/* <SelectedItem /> */}

      {/* <Footer /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Hpage/>}/>
          <Route path="/laptops" element={<Parent initialData={data} />} />
        </Routes>
      </Router>
      
    </>
  )
}
export default App


