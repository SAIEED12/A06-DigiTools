import React from "react";

const Cart = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((sum, products) => sum + products.price,0) 
    const handlePayment = () => {
        setCart([]);
    }
  return (
    <div>
      <div className="container mx-auto border border-gray-300 px-14 space-y-7 rounded-xl mb-20 ">
        <h2 className="text-2xl font-bold mt-10">Your Cart</h2>
        {cart.map((products) => (
          <div className="flex justify-between items-center bg-base-200 rounded-2xl py-4" key={products.id}>
            <div className="flex items-center gap-10 px-10">
              <div>
                <img
                  src={products.icon}
                  alt=""
                  className=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">{products.name}</h2>
                <p className="text-[#627382]">${products.price}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
            <p className="text-[#627382]">Total:</p>
            <p className="font-bold text-2xl">${totalPrice}</p>
        </div>
        <button onClick={handlePayment} className="btn w-full p-6 mb-5 rounded-full border-none bg-linear-to-r from-[#6223f3] to-[#A020F0] text-white hover:opacity-90">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
