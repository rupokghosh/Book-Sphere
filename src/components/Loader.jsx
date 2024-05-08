// eslint-disable-next-line react/prop-types
const Loader = ({ state }) => {
  return (
    <div style={{ display: state ? "block" : "none" }} className=" text-center text-2xl font-bold my-32 text-beige-500">
      Loading...
    </div>
  );
};

export default Loader;
