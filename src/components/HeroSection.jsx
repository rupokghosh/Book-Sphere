import bookCover from "../assets/bookCover.jpg";
import explore from "../assets/Binoculars.png";
import "../index.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  function redirectToCatalog() {
    navigate("/Catalog");
  }
  return (
    <div className="flex justify-evenly m-4">
      <div className="textAndSearch flex flex-col justify-evenly items-center bg-blue gap-4">
        <div className="text flex flex-col gap-4">
          <h1 className="text-3xl">
            What book is on <br></br>your mind today?
          </h1>
          <p>Explore our library and find your next read. </p>
          <button
            className=" flex justify-between rounded-full bg-beige-300 hover:bg-beige-500 border border-zinc-950 px-8 py-2 gap-2 w-3/4"
            onClick={redirectToCatalog}
          >
            <h1>explore</h1>
            <img src={explore} alt="" />
          </button>
        </div>
      </div>
      <div className="bigPicture bg-green flex justify-center align-center">
        <img
          src={bookCover}
          alt="books"
          className="object-cover w-64 h-64 rounded-md customShadow2 m-8"
        />
      </div>
    </div>
  );
};
export default HeroSection;
