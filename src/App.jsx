import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrendingBooks from "./components/TrendingBooks";
import Referral from "./components/Referral.jsx";
import BestSellersThisWeek from "./components/BestSellersThisWeek";
import CallToAction from "./components/CallToAction";
import Cart from "./components/Cart.jsx";
import "./index.css";
import { useState } from "react";

function App() {
  // states
  // Toggling Cart Logic
  const [openCart, setOpenCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  // add to cart

  function handleCart(title, author, cover_i, price) {
    const newData = { title, price, cover_i, author };
    setCartData([...cartData, newData]);
  }

  function toggleCart() {
    setOpenCart(!openCart);
  }

  return (
    <div className="main " style={{ fontFamily: "Unica One" }}>
      <Header toggleCart={toggleCart} />
      {openCart && <Cart cartData={cartData} />}
      <HeroSection />
      <TrendingBooks handleCart={handleCart} />
      <Referral />
      <BestSellersThisWeek handleCart={handleCart} />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
