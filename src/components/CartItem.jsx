import deleteIcon from "../assets/TRASH.png";

const cartItem = ({ title, author, price, cover }) => {
  // Splitting the author's name by commas to separate multiple authors
  const authors = author.toString().split(",");
  // Extracting the first author from the list
  const firstAuthor = authors[0].trim();
  return (
    <div className="flex gap-6 m-2 p-6 border border-dashed rounded-lg">
      <img
        className="w-24 h-36 object-cover border rounded-md shadow-xl "
        src={
          cover
            ? "https://covers.openlibrary.org/b/id/" + cover + "-L.jpg"
            : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
        }
        alt=""
      />
      <div className="details flex flex-col justify-between p-2 ">
        <h1 className="font-bold">{title}</h1>
        <h1>{`By ${firstAuthor}`}</h1>
      </div>
      <div className="price flex flex-col justify-between p-2 ">
        <h1 className="text-beige-500"> $ {price}</h1>
        <button>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default cartItem;
