import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { MdVerified } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { TbCalendarMonthFilled } from "react-icons/tb";

const Profile = () => {
  return (
    <main className="text-white">
      {/* Top row - starts */}
      <div className="flex gap-x-8 items-center ml-4">
        <Link to={"/"}>
          <FaArrowLeft />
        </Link>
        <div>
          <div className="text-2xl font-bold">Chandan Bhadrala</div>
          <p className="text-gray-400">0 posts</p>
        </div>
      </div>
      {/* Top row - ends */}

      {/* Profile Images - start */}
      <div>
        <div className="relative">
          <img
            src="../public/EssentialHiking.jpg"
            alt="Profile Cover Image"
            className="h-50 w-full object-cover"
          />
        </div>
        <div className="absolute top-48 ml-4">
          <img
            src="../public/profile.jpg"
            alt=""
            className="rounded-full md:w-40 w-20 md:h-40 h-20 border-4 border-black"
          />
        </div>
      </div>
      {/* Profile Images - ends */}

      <div className="flex justify-end mr-4">
        <Button
          label={"Edit profile"}
          className="text-white px-4 border border-gray-500"
        />
      </div>

      {/* Profile details - start */}
      {/* Row 1 - starts */}
      <div className="mt-8 mx-4 flex gap-x-4 items-center">
        <h1 className="font-bold text-2xl">Chandan Bhadrala</h1>
        <button className="flex  items-center gap-x-2  text-white px-2 rounded-full border border-gray-600  font-bold">
          <MdVerified /> Get verified
        </button>
      </div>
      {/* Row 1 - ends */}
      {/* Row 2 - starts */}
      <div className="mx-4">
        <p className="text-gray-400">@ChandanBhadral</p>
        <p className="mt-4">Web Development Aspirant</p>
        <div className="text-gray-400 flex gap-x-4 mt-2 ">
          <p className="flex items-center gap-x-2">
            <PiSuitcaseSimpleBold />
            Professional Services
          </p>
          <p className="flex items-center gap-x-2">
            <TbCalendarMonthFilled />
            Joined September 2021
          </p>
        </div>
        <div className="flex gap-x-8 mt-2">
          <p>
            5 <span className="text-gray-400">Following</span>
          </p>
          <p>
            0 <span className="text-gray-400">Followers</span>
          </p>
        </div>
      </div>
      {/* Row 2 - ends */}
      {/* Profile details - end */}
      
    </main>
  );
};

export default Profile;
