import { Link } from "react-router-dom";
import { LeftSideMenuBar } from "../constants/constants";
import Button from "./Button";

const LeftSidebar = () => {
  return (
    <div className="mt-4 flex flex-col justify-start items-start text-white space-y-4 text-xl font-sans">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png?20230728230735"
          alt=""
          className="w-8 mb-4"
        />
      </div>
      {LeftSideMenuBar.map((item) => (
        <Link key={item.title}
          to={item.path}
          className="flex items-center font-semibold gap-4 mb-5 cursor-pointer"
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
      <Button label={"Post"} className=" bg-white px-20 " />
    </div>
  );
};

export default LeftSidebar;
