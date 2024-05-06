import deleteIcon from "../assets/TRASH.png";
import aliabdaal from "../assets/aliabdaal.jpg";

const CartItem = () => {
  return (
    <div className="flex gap-6 border rounded-lg p-6 border-dashed">
      <img
        className="h-28 w-16 rounded-lg shadow-xl shadow-zinc-950"
        src={aliabdaal}
        alt=""
      />
      <div className="details flex flex-col justify-start gap-2">
        <h1>Book Title</h1>
        <h1>Author Name</h1>
      </div>
      <div className="price flex flex-col justify-between">
        <h1 className="text-beige-500">Price</h1>
        <button>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
