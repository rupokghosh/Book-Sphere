import Card from "./Card";

const BestSellersThisWeek = () => {
  const Books = [
    { title: "Elon Musk: Enterpreneur", cover: 13825519, price: "9.99" },
    { title: "Crime and Punishment", cover: 11227994, price: "12.99" },
    { title: "Sapiens", cover: 8634250, price: "15.99" },
    { title: "Feel Good Productivity", cover: 14557462, price: "18.99" },
    { title: "The Outsider", cover: 8315581, price: "6.99" },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl bold m-8">Our best sellers this week</h2>
      <div className="flex justify-evenly items-center mx-64 gap-6 ">
        {Books.map((book) => (
          <Card
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
