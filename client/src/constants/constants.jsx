import { GoHome } from "react-icons/go";
import { FaBold, FaSearch } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaHourglassHalf } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { Link } from "react-router-dom";

export const LeftSideMenuBar = [
  { title: "Home", icon: <GoHome size={28} />, path: "/" },
  { title: "Explore", icon: <FaSearch /> },
  { title: "Notifications", icon: <GrNotification /> },
  { title: "Messages", icon: <HiOutlineEnvelope size={22} /> },
  { title: "Grok", icon: <FaHourglassHalf /> },
  // { title: "Bookmarks", icon: <FaRegBookmark /> },
  // { title: "Jobs", icon: <PiSuitcaseSimpleBold /> },
  // { title: "Communities", icon: <IoPeopleOutline size={24} /> },
  {
    title: "Premium",
    icon: (
      <img
        className="w-6"
        src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png?20230728230735"
      />
    ),
  },
  { title: "Verified Orgs", icon: <BsFillLightningFill /> },
  {
    title: "Profile",
    icon: <IoPersonOutline />,
    path: "/profile",
  },
  { title: "More", icon: <CgMoreO /> },
];
