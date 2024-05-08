import Card from "./Card.jsx";

const TrendingBooks = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bold text-2xl m-8">Trending Books</h1>

      <div className="flex justify-evenly items-center mx-64 gap-6 ">
        <Card cover={211529} price="10.99" title={"Meditations"} />
        <Card cover={14415077} price="12.99" title={"It ends with us"} />
        <Card cover={12539702} price="20.99" title={"Atomic Habits"} />
        <Card cover={8821052} price="15.99" title={"Ikigai"} />
        <Card cover={6424160} price="29.99" title={"48 Laws of Power"} />
      </div>
    </div>
  );
};

export default TrendingBooks;
