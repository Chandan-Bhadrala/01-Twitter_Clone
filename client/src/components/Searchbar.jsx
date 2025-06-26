import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="border border-gray-600 rounded-full py-2 px-4 w-90 flex gap-2 items-center ">
      <FaSearch />
      <input
        type="text"
        placeholder="Search"
        className="border-none outline-none text-white placeholder-white "
      />
    </div>
  );
};

export default Searchbar;
