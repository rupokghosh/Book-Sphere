import { Link } from "react-router-dom";
import logo from "../assets/BookOpen.png";
import favoritesIcon from "../assets/BOOKMARK_SIMPLE.png";
import shoppingCartIcon from "../assets/SHOPPING_CART.png";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
        <Link to="/">BOOKSPHERE</Link>
      </div>
      <div>
        <Link to="/Favorites">
          <img src={favoritesIcon} alt="" />
        </Link>
        <button>
          <img src={shoppingCartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
