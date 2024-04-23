import { Link } from "react-router-dom";
import logo from "../assets/BookOpen.png";
import favoritesIcon from "../assets/BOOKMARK_SIMPLE.png";
import shoppingCartIcon from "../assets/SHOPPING_CART.png";
import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" bg="tomato" m="0" p="0">
      <Box
        className="logo"
        display="flex"
        justifyContent="space-around"
        gap={2}
      >
        <img src={logo} alt="" />
        <Link to="/">BOOKSPHERE</Link>
      </Box>
      <Box
        className="navLinks"
        display="flex"
        justifyContent="space-around"
        gap={2}
      >
        <Link to="/Favorites">
          <img src={favoritesIcon} alt="" />
        </Link>
        <button>
          <img src={shoppingCartIcon} alt="" />
        </button>
      </Box>
    </Box>
  );
};

export default Header;
