import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Search from "../components/Search.jsx";
import Card from "../components/Card.jsx";
import "../index.css";
import { useState, useEffect } from "react";
import Loader from "../components/Loader.jsx";
import Cart from "../components/Cart.jsx";

const Catalog = () => {
  // states and fetching

  const [query, setQuery] = useState("");
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [randomPrices, setRandomPrices] = useState({});

  useEffect(() => {
    if (data) {
      const prices = {};
      data.docs.forEach((d) => {
        prices[d.key] = (
          Math.floor((Math.random() * (20 - 5) + 5) * 10) / 10 +
          0.99
        ).toFixed(2);
      });
      setRandomPrices(prices);
    }
  }, [data]);

  // add to cart

  function handleCart(title, author, cover_i, price) {
    const newData = { title, price, cover_i, author };
    setCartData([...cartData, newData]);
  }
  // toggling cart
  function toggleCart() {
    setOpenCart(!openCart);
  }

  // fetch data on button click

  function handleBtnClick() {
    fetchData();
  }

  // fetchData function

  const fetchData = () => {
    setLoading(true);
    console.log(query);
    fetch(`https://openlibrary.org/search.json?q= ${query} &limit=24`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
        setLoading(false);
      });
  };

  return (
    <div style={{ fontFamily: "Unica One" }}>
      <Header toggleCart={toggleCart} />
      {openCart && <Cart cartData={cartData} />}
      <main>
        <div className="flex justify-center items-center self-center gap-4 mt-6">
          <Search setValue={setQuery} value={query} />
          <button
            className="rounded-full bg-beige-300 hover:bg-beige-500 border border-zinc-950 px-4 py-1"
            onClick={handleBtnClick}
          >
            search
          </button>
        </div>
        <h1 className="text-xl mx-8 mb-2 mt-8 font-bold">RESULTS</h1>
        <hr style={{ border: "1.5px beige-500", margin: "34px" }} />
        <Loader state={loading} />
        {(query === "" || (data && data.docs.length === 0)) && (
          <p className="text-center text-2xl font-bold mt-32 text-beige-500">
            Search for your favorite book to display results
          </p>
        )}
        <div className="allBooks grid grid-cols-6 p-2 gap-y-8 mx-2 my-4 min-h-[36rem]">
          {data &&
            data.docs.map((d, i) => (
              <Card
                handleCart={() =>
                  handleCart(
                    d.title,
                    d.author_name,
                    d.cover_i,
                    randomPrices[d.key]
                  )
                }
                cover={d.cover_i}
                key={i}
                price={randomPrices[d.key]} // generate random prices
                title={d.title}
              />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
