/* eslint-disable react/prop-types */
import Card from "./Card";

const BestSellersThisWeek = ({ handleCart }) => {
  const Books = [
    {
      title: "Elon Musk: Enterpreneur",
      cover: 13825519,
      price: "9.99",
      author_name: "Elon Musk",
    },
    {
      title: "Crime and Punishment",
      cover: 11227994,
      price: "12.99",
      author_name: "Fyodor Dostoevsky",
    },
    {
      title: "Sapiens",
      cover: 8634250,
      price: "15.99",
      author_name: "Yuval Noah",
    },
    {
      title: "Feel Good Productivity",
      cover: 14557462,
      price: "18.99",
      author_name: "Ali Abdaal",
    },
    {
      title: "The Outsider",
      cover: 8315581,
      price: "6.99",
      author_name: "Stephen King",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl bold m-8">Our best sellers this week</h2>
      <div className="flex justify-evenly items-center mx-64 gap-6 ">
        {Books.map((book) => (
          <Card
            handleCart={() =>
              handleCart(book.title, book.author_name, book.cover, book.price)
            }
            cover={book.cover}
            price={book.price}
            key={book.cover}
            title={book.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellersThisWeek;
