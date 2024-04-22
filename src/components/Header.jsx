import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src="./assets/BookOpen.png" alt="" />
        <Link to="/">BOOKSPHERE</Link>
      </div>
      <div>
        <Link to="/favorites">
          <img src="./assets/BOOKMARK_SIMPLE.png" alt="" />
        </Link>
        <button>
          <img src="./assets/SHOPPING_CART.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
