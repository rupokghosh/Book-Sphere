import Card from "./Card.jsx";
import meditations from "../assets/meditations.jpg";
import ikigai from "../assets/ikigai.jpg";
import mdw from "../assets/mdw.jpg";
import aliabdaal from "../assets/aliabdaal.jpg";
import itendswithus from "../assets/itendswithus copy.jpg";

const TrendingBooks = () => {
  return (
    <div className="flex justify-evenly items-center gap-6 mt-4 mx-64">
      <Card cover={meditations} price="10.99" />
      <Card cover={ikigai} price="12.99" />
      <Card cover={mdw} price="20.99" />
      <Card cover={aliabdaal} price="15.99" />
      <Card cover={itendswithus} price="29.99" />
    </div>
  );
};

export default TrendingBooks;
