import Avatar from "react-avatar";
import Searchbar from "./Searchbar";
import SubscribeCard from "./SubscribeCard";
import Button from "./Button";

const RightSidebar = () => {
  return (
    <div className="text-white hidden md:block mt-4 space-y-4">
      <Searchbar />
      <SubscribeCard />
      <div className="border border-gray-600 p-4 rounded-xl">
        <div className="mb-4 font-extrabold text-2xl">What's happening</div>
        <div className="flex gap-x-2">
          <Avatar className="rounded-2xl " color="gray" />
          <div>
            <p className="font-bold text-lg">Cisco Live 2025</p>
            <p className="text-sm text-gray-400">48 minutes ago</p>
          </div>
        </div>
      </div>

      {/* Third Card - Who to follow - starts*/}
      <div className="border border-gray-600 p-4 rounded-xl">
        <div className="mb-4 font-extrabold text-2xl">Who to follow</div>
        <div className="flex gap-x-2">
          <Avatar round size="48" color="gray" />
          <div className="mr-4">
            <p className="font-bold text-lg">Striver | Building ...</p>
            <p className="text-sm text-gray-400">@striver_79</p>
          </div>
          <button className=" px-4 border-gray-600 border rounded-full ">
            Following
          </button>
        </div>
      </div>
      {/* Third Card - Who to follow - ends*/}

      {/* Third Card - Who to follow - starts*/}
      <div className="border border-gray-600 p-4 rounded-xl">
        <div className="mb-4 font-extrabold text-2xl">Who to follow</div>
        <div className="flex gap-x-2">
          <Avatar round size="48" color="gray" />
          <div className="mr-4">
            <p className="font-bold text-lg">Striver | Building ...</p>
            <p className="text-sm text-gray-400">@striver_79</p>
          </div>
          <button className=" px-4 border-gray-600 border rounded-full ">
            Following
          </button>
        </div>
      </div>
      {/* Third Card - Who to follow - ends*/}

      {/* Third Card - Who to follow - starts*/}
      <div className="border border-gray-600 p-4 rounded-xl">
        <div className="mb-4 font-extrabold text-2xl">Who to follow</div>
        <div className="flex gap-x-2">
          <Avatar round size="48" color="gray" />
          <div className="mr-4">
            <p className="font-bold text-lg">Striver | Building ...</p>
            <p className="text-sm text-gray-400">@striver_79</p>
          </div>
          <button className=" px-4 border-gray-600 border rounded-full ">
            Following
          </button>
        </div>
      </div>
      {/* Third Card - Who to follow - ends*/}

      {/* Third Card - Who to follow - starts*/}
      <div className="border border-gray-600 p-4 rounded-xl">
        <div className="mb-4 font-extrabold text-2xl">Who to follow</div>
        <div className="flex gap-x-2">
          <Avatar round size="48" color="gray" />
          <div className="mr-4">
            <p className="font-bold text-lg">Striver | Building ...</p>
            <p className="text-sm text-gray-400">@striver_79</p>
          </div>
          <button className=" px-4 border-gray-600 border rounded-full ">
            Following
          </button>
        </div>
      </div>
      {/* Third Card - Who to follow - ends*/}

      <div className="text-sm text-gray-400">
        Terms of Service | Privacy Policy | Cookie Policy | More © 2025 X Corp.
      </div>
    </div>
  );
};

export default RightSidebar;
