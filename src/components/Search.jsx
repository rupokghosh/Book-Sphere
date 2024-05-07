// eslint-disable-next-line react/prop-types
const Search = ({ value, setValue }) => {
  
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className=" customShadow rounded-full border border-zinc-950 px-20 py-1"
        onChange={handleInputChange}
        value={value}
      />
    </div>
  );
};

export default Search;
