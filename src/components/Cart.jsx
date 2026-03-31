import React from "react";
import emptyCartImg from "../assets/products/cart-shopping-cart.png";
const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, products) => sum + products.price, 0);
  const handlePayment = () => {
    setCart([]);
  };

  const handleDelte = (products) => {
    const filteredArray = cart.filter(product => product.id !== products.id)
    setCart(filteredArray)
  }

  return (
    <div>
      <div className="container mx-auto border border-gray-300 px-14 space-y-7 rounded-xl  mt-20 mb-20 ">
        <h2 className="text-2xl mt-10 font-bold">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center">
            <div className="flex justify-center items-center">
                <img className="h-20 w-20 opacity-10 mb-5" src={emptyCartImg} alt="Empty Cart" />
            </div>
            <p className="text-[#627382] font-semibold mb-20">Your cart is empty!</p>
          </div>
        ) : (
          <>
            {cart.map((products) => (
              <div className="flex tems-center bg-base-200 rounded-2xl py-4"key={products.id}> 
                <div className="flex items-center gap-5 px-5">
                  <div>
                    <img src={products.icon} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{products.name}</h2>
                    <p className="text-[#627382]">${products.price}</p>
                  </div>
                </div>
                <div className="ml-auto px-5 flex font-semibold">
                    <button onClick={() => handleDelte(products)} className="cursor-pointer text-[#FF3980] hover:text-[#e90b5c]">Remove</button> 
                </div>
              </div>
            ))}
            <div className="flex justify-between">
              <p className="text-[#627382]">Total:</p>
              <p className="font-bold text-2xl">${totalPrice}</p>
            </div>
            <button
              onClick={handlePayment}
              className="btn w-full p-6 mb-5 rounded-full border-none bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white hover:opacity-90"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
