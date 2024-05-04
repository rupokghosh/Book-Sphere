import bookMark from "../assets/BOOKMARK_SIMPLE.png";
import shoppingCart from "../assets/SHOPPING_CART.png";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img className="object-cover rounded-md shadow-lg" src="" alt="" />
      <div className="flex justify-center items-center gap-3">
        <button className="border border-slate-900 bg-beige-300 rounded-full px-8 py-1">
          30$
        </button>
        <button className="border border-slate-900 bg-beige-300 rounded-full px-4 py-1">
          <img src={bookMark} alt="" />
        </button>
      </div>
      <button className="border border-slate-900 bg-beige-500 rounded-full px-16 py-1">
        <img src={shoppingCart} alt="" />
      </button>
    </div>
  );
};

export default Card;
