import bookMark from "../assets/BOOKMARK_SIMPLE.png";
import shoppingCart from "../assets/SHOPPING_CART.png";

const Card = ({ cover, price }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img
        className="object-cover rounded-lg shadow-xl shadow-gray-900 w-64 h-80"
        src={cover}
        alt=""
      />
      <div className="flex justify-center items-center gap-3">
        <div className="border border-slate-900 bg-beige-300 rounded-full px-8 py-1">
          {`$ ${price}`}
        </div>
        <button className="border border-slate-900 bg-beige-500 rounded-full px-4 py-1">
          <img src={bookMark} alt="" />
        </button>
      </div>
      <button className="border border-slate-900 bg-beige-300 rounded-full px-20 py-1 hover:bg-beige-500">
        <img src={shoppingCart} alt="" />
      </button>
    </div>
  );
};

export default Card;
