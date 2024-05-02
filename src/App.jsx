import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
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
      <Home />
      <Footer />
    </div>
  );
}

export default App;
