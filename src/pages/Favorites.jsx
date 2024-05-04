import Header from "../components/Header";
import Footer from "../components/Footer";

const Favorites = () => {
  const categories = [
    "Categories",
    "romance",
    "adventure",
    "thriller",
    "philosophy",
    "non-fiction",
    "fiction",
  ];
  return (
    <div style={{ fontFamily: "Unica One" }}>
      <Header />
      <main>
        <div className="flex flex-col justify-center items-center mt-6 bold text-3xl">
          Your Favorites
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

export default Favorites;
