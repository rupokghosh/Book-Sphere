import CartItem from "./cartItem";

const Cart = () => {
  return (
    <div className="absolute right-0 flex flex-col border-l border-b border-t rounded-l-lg gap-6 p-6 mt-4">
      <h1 className="bold text-2xl">Your Cart</h1>
      <div className="cartItems flex flex-col gap-4">
        <CartItem />
        <CartItem />
      </div>
      <div className="cartFooter flex flex-col gap-4">
        <div className="total flex justify-between gap-4">
          <h1 className="text-xl">Subtotal</h1>
          <div className="border rounded-lg bg-beige-300 text-xl px-2 py-1">
            $60.00
          </div>
        </div>
        <button className="border rounded-lg bg-beige-300 hover:bg-beige-500 py-1">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
