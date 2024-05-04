import Footer from "../components/Footer";
import Header from "../components/Header";
import a from "../assets/aliabdaal.jpg";
import bookMark from "../assets/BOOKMARK_SIMPLE.png";
import shoppingCart from "../assets/SHOPPING_CART.png";

const BookDetail = () => {
  return (
    <div style={{ fontFamily: "Unica One" }}>
      <Header />
      <main className="flex justify-center items-center my-32 gap-32 px-32 mx-32">
        <img
          src={a}
          alt=""
          className="object-cover rounded-lg shadow-xl w-64 h-80"
        />
        <div className="details flex flex-col justify-center gap-4">
          <div className="title flex justify-between items-center">
            <h1 className="text-xl">Title</h1>
            <button className="border border-slate-900 bg-beige-300 hover:bg-beige-500 rounded-lg px-4 py-1">
              <img src={bookMark} alt="" className="object-cover" />
            </button>
          </div>
          <div className="author border border-slate-900 rounded-lg customShadow py-3 px-2">
            Author
          </div>
          <div className="description border border-slate-900 rounded-lg customShadow py-3 px-2">
            Make sure you have a BookDetail.jsx file with the implementation of
            the BookDetail component similar to the example I provided earlier.
            With this setup, whenever the path matches /book/:id, it will render
            the BookDetail component. The :id parameter will be passed to the
            component, allowing you to fetch details for the specific book.
          </div>
          <div className="price text-xl text-beige-500">$ 30.00</div>
          <div className="flex justify-between ">
            <button className="border border-slate-900 bg-beige-300 rounded-lg px-16 py-2 hover:bg-beige-500">
              Go Back
            </button>
            <button className="border border-slate-900 bg-beige-300 rounded-lg px-16 py-1 hover:bg-beige-500">
              <img src={shoppingCart} alt="" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
