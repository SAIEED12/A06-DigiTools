import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Navbar from './components/Navbar'

function App() {
  const [activeTab, setActiveTab] = useState("Products")

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Cards></Cards>

        <div className="tabs tabs-box justify-center bg-transparent mt-10 mb-10">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-30 font-semibold ${activeTab === "Products" ? "btn rounded-full border-none bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white" : ""}`}
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("Products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-30 font-semibold ${activeTab === "Cart" ? "btn rounded-full border-none bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white" : ""}`}
          aria-label={`Cart()`}
          onClick={() => setActiveTab("Cart")}
        />
      </div>
    </>
  )
}

export default App
