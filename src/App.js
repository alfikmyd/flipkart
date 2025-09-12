import Header from "./component/header"
import Footer from "./component/footer"
// import data from "./component/data.json"
import { useState } from "react"
import Parent from "./component/filterPage"
import SelectedItem from "./component/selectItem"
import HomeHeader from "./component/home/HomeHeader"


function App() {
  // const product = data;

  return (
    <>
      <HomeHeader/>

      {/* <Header /> */}
      {/* <Parent initialData={data} /> */}
      {/* <SelectedItem /> */}

      <Footer />
    </>
  )
}
export default App


