import Header from "./component/header"
import Footer from "./component/footer"
// import data from "./component/data.json"
import { useState } from "react"
import Parent from "./component/filterPage"
import SelectedItem from "./component/selectItem"

function App() {
  // const product = data;

  return (
    <>
      <Header />
      {/* <Parent initialData={data} /> */}
      <SelectedItem />

      <Footer />
    </>
  )
}
export default App


