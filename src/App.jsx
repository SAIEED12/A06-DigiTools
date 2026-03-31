import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

const getCards = async ()=> {
  const res = await fetch("/cards.json")
  return res.json()
  
}

const cardsPromise = getCards();

function App() {
  const [activeTab, setActiveTab] = useState("Products")
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-5xl mb-4">Premium Digital Tools</h2>
        <p className="text-[#627382] mb-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        
      </div>


        <div className="tabs tabs-box justify-center bg-transparent mt-10 ">
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
          aria-label={`Cart(${cart.length})`}
          onClick={() => setActiveTab("Cart")}
        />
      </div>

      {activeTab === "Products" && <Cards cardsPromise={cardsPromise} cart={cart} setCart={setCart}></Cards>}
      {activeTab === "Cart" && <Cart cart={cart} setCart={setCart}></Cart>}
    </>
  )
}

export default App
