import bookMark from "../assets/BOOKMARK_SIMPLE.png";
import shoppingCart from "../assets/SHOPPING_CART.png";

// eslint-disable-next-line react/prop-types
const Card = ({ cover, price, title, handleCart }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img
        className="object-cover rounded-lg shadow-xl shadow-gray-900 w-48 h-64 mb-2"
        src={
          cover
            ? "https://covers.openlibrary.org/b/id/" + cover + "-L.jpg"
            : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
        }
        alt=""
      />
      <h1 className="text-md text-center font-bold">{title}</h1>
      <div className="flex justify-center items-center gap-3">
        <div className="border border-slate-900 bg-beige-300 rounded-lg px-8 py-1">
          {`$ ${price}`}
        </div>
        <button className="border border-slate-900 bg-beige-500 rounded-lg px-4 py-1">
          <img src={bookMark} alt="" className="object-cover" />
        </button>
      </div>
      <button className="border border-slate-900 bg-beige-300 rounded-lg px-20 py-1 hover:bg-beige-500" onClick={handleCart}>
        <img src={shoppingCart} alt="" />
      </button>
    </div>
  );
};

export default Card;
