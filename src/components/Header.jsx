import { Link } from "react-router-dom";
import logo from "../assets/BookOpen.png";
import favoritesIcon from "../assets/BOOKMARK_SIMPLE.png";
import shoppingCartIcon from "../assets/SHOPPING_CART.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-4 mx-6">
      <div className="logo flex flex-row gap-2 justify-evenly items-center">
        <img src={logo} alt="" />
        <Link to="/" className="">
          BOOKSPHERE
        </Link>
      </div>
      <div className="navLinks flex flex-row gap-6 justify-evenly items-center">
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
