import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div
      className="flex flex-col justify-between items-center"
      style={{ fontFamily: "Unica One" }}
    >
      <div className="text flex flex-col justify-center items-center mt-16 gap-4">
        <h1 className="text-2xl font-bold text-beige-500">
          Welcome to Booksphere!
        </h1>
        <h3 className="text-md font-light">
          Your number one spot to find all the books you need.{" "}
        </h3>
      </div>
      <div className="loginForm customShadow py-2 px-2 border rounded-md w-1/2 my-36 py-8">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col justify-center items-center gap-8"
        >
          <div className="flex justify-evenly items-center gap-10">
            <label className="font-bold">Name</label>
            <input
              type="text"
              name="name"
              className="customShadow py-2 px-2 border rounded-md"
            />
          </div>
          <div className="flex justify-evenly items-center gap-10">
            <label className="font-bold">Email</label>
            <input
              type="email"
              name="email"
              className="customShadow py-2 px-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-2 border rounded-md bg-beige-300 hover:bg-beige-500"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
