import deleteIcon from "../assets/TRASH.png";
import aliabdaal from "../aliabdaal.jpg";
const cartItem = () => {
  return (
    <div>
      <img src={aliabdaal} alt="" />
      <div className="details">
        <h1>Book Title</h1>
        <h1>Author Name</h1>
      </div>
      <div className="price">
        <h1>Price</h1>
        <button>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default cartItem;
