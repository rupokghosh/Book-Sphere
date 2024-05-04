import "../index.css";
// eslint-disable-next-line react/prop-types
const CategoryBtn = ({ category }) => {
  return (
    <button className="customShadow py-2 border rounded-md hover:bg-beige-300">
      {category}
    </button>
  );
};

export default CategoryBtn;
