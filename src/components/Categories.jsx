import CategoryBtn from "./CategoryBtn.jsx";
import file from "../assets/FOLDER_NOTCH_OPEN.png";

const Categories = () => {
  const categories = [
    "romance",
    "adventure",
    "thriller",
    "philosophy",
    "non-fiction",
    "fiction",
  ];
  return (
    <div className="flex flex-col gap-4 mx-8 my-16">
      <div className="flex gap-2 self-center mb-4 ">
        <img src={file} alt="" />
        <div className="text-2xl bold">Categories</div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-8 mx-48">
        {categories.map((category) => (
          <CategoryBtn category={category} key={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
