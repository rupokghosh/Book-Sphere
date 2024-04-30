import { Link } from "react-router-dom";
import successAnimation from "../assets/success-anim.png";
const PurchaseDone = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ fontFamily: "Unica One" }}
    >
      <img src={successAnimation} alt="" />
      <div className="flex flex-col justify-center items-center gap-2 mb-2 ">
        <h3 className="text-2xl bold">Thank you for your order!</h3>
        <h4 className="text-md text-beige-500">
          Please check your email for order details and receipt!
        </h4>
      </div>

      <Link
        to="/"
        className="rounded-full bg-beige-300 px-24 py-2 border border-zinc-950 hover:bg-beige-500 mt-2"
      >
        continue shopping
      </Link>
    </div>
  );
};

export default PurchaseDone;
