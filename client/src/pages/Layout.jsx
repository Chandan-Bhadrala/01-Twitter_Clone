import { Outlet } from "react-router-dom";

import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const Layout = () => {
  return (
    <div className="flex justify-between mx-12">
      <div className="basis-[20%] sticky top-0 h-screen ">
        <LeftSidebar />
      </div>
      <div className="basis-[50%] mr-8 ml-4 border text-white border-x  border-gray-600 pt-4">
        <Outlet />
      </div>
      <div className="basis-[30%]  pb-8 h-screen overflow-y-auto sticky top-0 scrollbar-hide">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
