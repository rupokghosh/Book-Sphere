import Card from "./Card";
import portlands from "../assets/portlands.jpg";
import debt from "../assets/debt.jpg";
import elon from "../assets/elon.jpg";
import fiction from "../assets/fiction.jpg";
import sapiens from "../assets/sapiens.jpg";

const BestSellersThisWeek = () => {
  const Books = [
    { cover: portlands, price: "9.99" },
    { cover: debt, price: "12.99" },
    { cover: elon, price: "15.99" },
    { cover: sapiens, price: "18.99" },
    { cover: fiction, price: "6.99" },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl bold m-8">Our best sellers this week</h2>
      <div className="flex justify-evenly items-center mx-64 gap-6 ">
        {Books.map((book) => (
          <Card cover={book.cover} price={book.price} key={book.cover} />
        ))}
      </div>
    </div>
  );
};

export default BestSellersThisWeek;
