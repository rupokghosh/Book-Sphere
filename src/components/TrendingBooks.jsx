import Card from "./Card.jsx";

// eslint-disable-next-line react/prop-types
const TrendingBooks = ({ handleCart }) => {
  const Books = [
    { title: "Meditations", cover: 211529, price: "19.99", author_name: "Marcus Aurelius" },
    {
      title: "It ends with us",
      cover: 14415077,
      price: "12.99",
      author_name: "Colleen Hoover",
    },
    { title: "Atomic Habits", cover: 12539702, price: "5.99", author_name: "James Clear" },
    { title: "Ikigai", cover: 8821052, price: "8.99", author_name: "Hector Garcia" },
    {
      title: "48 Laws of Power",
      cover: 6424160,
      price: "16.99",
      author_name: "Robert Greene",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bold text-2xl m-8">Trending Books</h1>

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

export default TrendingBooks;
