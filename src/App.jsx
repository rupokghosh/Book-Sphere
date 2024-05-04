import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrendingBooks from "./components/TrendingBooks";
import Categories from "./components/Categories";
import BestSellersThisWeek from "./components/BestSellersThisWeek";
import CallToAction from "./components/CallToAction";
import "./index.css";
import fetchData from "./utils/fetchData.js";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("meditations");
  }, []);
  return (
    <div className="main " style={{ fontFamily: "Unica One" }}>
      <Header />
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
