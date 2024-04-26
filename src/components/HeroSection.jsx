import bookCover from "../assets/bookCover.jpg";
const HeroSection = () => {
  return (
    <div className="flex justify-evenly m-4">
      <div className="textAndSearch flex flex-col justify-evenly items-center bg-blue gap-4">
        <div className="text">
          <h1 className="text-3xl">
            What book is on <br></br>your mind today?
          </h1>
          <p>Explore our library and find your next read. </p>
        </div>
        <div className="search flex flex-col gap-4 justify-center">
          <input
            type="text"
            placeholder="search..."
            className="rounded-full shadow-lg shadow-beige-500 w-full"
          />
          <button className="rounded-md bg-beige-300 hover:bg-blue-500 w-1/2">
            Search
          </button>
        </div>
      </div>
      <div className="bigPicture bg-green flex justify-center align-center">
        <img
          src={bookCover}
          alt="books"
          className="object-cover w-64 h-64 rounded-md shadow-lg shadow-beige-500 m-8"
        />
      </div>
    </div>
  );
};

export default HeroSection;
