/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

// eslint-disable-next-line react/prop-types
const Cart = ({ cartData }) => {
  const navigate = useNavigate();
  //handleCheckout
  function handleCheckout() {
    if (cartData.length > 0) {
      navigate("/PurchaseDone");
    }
  }

  //Calculate subtotal
  let subtotal = useMemo(() => {
    return cartData.reduce((total, item) => total + item.price, 0);
  }, [cartData]);
  subtotal = subtotal.toFixed(2);
  return (
    <div className="absolute right-0 flex flex-col border-l border-b border-t rounded-l-lg gap-6 p-6 mt-4 bg-beige-100">
      <h1 className="bold text-2xl">Your Cart</h1>
      <div className="cartItems flex flex-col gap-4">
        {cartData.map((c, i) => (
          <CartItem
            key={i}
            title={c.title}
            price={c.price}
            author={c.author}
            cover={c.cover_i}
          />
        ))}
      </div>
      <div className="cartFooter flex flex-col gap-4">
        <div className="total flex justify-between gap-4">
          <h1 className="text-xl">Subtotal</h1>
          <div className="border rounded-lg bg-beige-300 text-xl px-2 py-1">
            {subtotal}
          </div>
        </div>
        <button
          className="border rounded-lg bg-beige-300 hover:bg-beige-500 py-1"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
