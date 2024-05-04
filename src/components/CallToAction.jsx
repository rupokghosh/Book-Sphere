const CallToAction = () => {
  return (
    <div className="flex justify-evenly items-center my-24">
      <div className="text">
        <h1 className="bold text-2xl">Never miss any new releases</h1>
        <h1 className="bold text-2xl text-beige-500">
          Subscribe to our newsletter
        </h1>
      </div>
      <div className="subscribe flex gap-4 ">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-slate-900 rounded-lg px-20 py-1"
        />
        <button className="border border-slate-900 bg-beige-300 rounded-lg  px-4 hover:bg-beige-500">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
