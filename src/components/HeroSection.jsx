import bookCover from "../assets/bookCover.jpg";
import "../index.css";
import Search from "./Search";

const HeroSection = () => (
  <div className="flex justify-evenly m-4">
    <div className="textAndSearch flex flex-col justify-evenly items-center bg-blue gap-4">
      <div className="text">
        <h1 className="text-3xl">
          What book is on <br></br>your mind today?
        </h1>
        <p>Explore our library and find your next read. </p>
      </div>
      <div className="search flex flex-col gap-6 justify-start items-start">
        <Search />
        <button className="rounded-full bg-beige-300 hover:bg-beige-500 border border-zinc-950 px-4 py-1">
          explore
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

export default HeroSection;
