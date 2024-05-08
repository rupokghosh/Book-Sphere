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

  function toggleCart() {
    setOpenCart(!openCart);
  }

  return (
    <div className="main " style={{ fontFamily: "Unica One" }}>
      <Header toggleCart={toggleCart} />
      {openCart && <Cart />}
      <HeroSection />
      <TrendingBooks />
      <Referral />
      <BestSellersThisWeek />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
