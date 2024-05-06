import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrendingBooks from "./components/TrendingBooks";
import Categories from "./components/Categories";
import BestSellersThisWeek from "./components/BestSellersThisWeek";
import CallToAction from "./components/CallToAction";
import Cart from "./components/Cart.jsx";
import "./index.css";
import fetchData from "./utils/fetchData.js";
import { useEffect, useState } from "react";

function App() {
  // states
  // Toggling Cart Logic
  const [openCart, setOpenCart] = useState(false);

  function toggleCart() {
    setOpenCart(!openCart);
  }

  // fetchData

  useEffect(() => {
    fetchData("meditations");
  }, []);

  return (
    <div className="main " style={{ fontFamily: "Unica One" }}>
      <Header toggleCart={toggleCart} />
      {openCart && <Cart />}
      <HeroSection />
      <TrendingBooks />
      <Categories />
      <BestSellersThisWeek />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
