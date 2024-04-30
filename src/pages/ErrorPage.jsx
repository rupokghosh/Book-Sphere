import { Link } from "react-router-dom";
import errorGif from "../assets/error-gif.png";

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ fontFamily: "Unica One" }}
    >
      <img src={errorGif} alt="Error Gif" />
      <div className="flex flex-col justify-center items-center gap-2 mb-4">
        <h1 className="text-3xl bold">Something went wrong!</h1>
        <h4 className="text-md">Please refresh the page or try again later</h4>
      </div>

      <Link className="rounded-full bg-beige-300 px-24 py-2 border border-zinc-950 hover:bg-beige-500  ">
        Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
