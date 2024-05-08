const Referral = () => {
  return (
    <div className="flex justify-evenly items-center mt-16 mb-12 mx-4 p-4">
      <div className="flex flex-col justify-center items-center gap-2 p-2">
        <h1 className="text-2xl font-bold">Do you love free books?</h1>
        <p>
          Earn points for every book you buy through our loyalty program. <br />
          Redeem those points for more books which means more points.
        </p>
        <button className="customShadow py-2 px-2 border rounded-md hover:bg-beige-300">
          Join Now
        </button>
      </div>

      <div className="flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center border border-dashed rounded-md gap-2 p-4 ">
          <h1 className="text-xl font-bold">Refer a friend</h1>
          <p>
            Refer your friends and you will both receive $10 in rewards. <br />
            In the end, whats better than bonding over free books?
          </p>
          <button className="customShadow py-2 px-2 border rounded-md bg-white hover:bg-beige-500">
            Refer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Referral;
