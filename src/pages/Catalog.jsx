import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Search from "../components/Search.jsx";
import Card from "../components/Card.jsx";
import "../index.css";
import { useState } from "react";

const Catalog = () => {
  const categories = [
    "Categories",
    "romance",
    "adventure",
    "thriller",
    "philosophy",
    "non-fiction",
    "fiction",
  ];

  // states and fetching

  const [query, setQuery] = useState("");
  const [data, setdata] = useState(null);

  // fetch data on button click

  function handleBtnClick() {
    fetchData();
  }

  // fetchData function

  const fetchData = () => {
    console.log(query);
    fetch(`https://openlibrary.org/search.json?q= ${query} &limit=20 `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  };

  return (
    <div style={{ fontFamily: "Unica One" }}>
      <Header />
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
        <div className="resultAndCategories flex justify-between items-center mx-8 mb-4 mt-12">
          <h1 className="text-xl">RESULTS</h1>
          <select
            name="categories"
            id="categories"
            className="border border-slate-900 rounded-md px-4 py-1 customShadow"
          >
            {categories.map((category) => (
              <option key={category} value={category} className="bg-beige-300">
                {category}
              </option>
            ))}
          </select>
        </div>
        <hr style={{ border: "1.5px dashed black", margin: "34px" }} />
        <div className="allBooks"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
