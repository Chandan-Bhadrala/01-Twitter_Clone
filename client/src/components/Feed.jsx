import Avatar from "react-avatar";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import Border from "./Border";

const Feed = () => {
  return (
    <div>
      <div className="flex gap-x-2 items-start mt-4 ml-4">
        <Avatar round size="48" color="gray" />
        <div>
          <div className="flex items-center gap-x-2">
            <p className="font-bold text-lg">Striver</p>
            <span>.</span>
            <p className="text-sm text-gray-400">@striver_79</p>
            <p> 1m ago</p>
          </div>
          <div className="flex">
            <p>Hello developers lets connect and grow together.</p>
          </div>
        </div>
      </div>

      {/* Bottom icons div - starts */}

      <div className="flex items-center justify-around mt-8">
        <div className="flex items-center gap-x-2">
          <IoChatbubbleOutline /> <span>0</span>
        </div>
        <div className="flex items-center gap-x-2">
          <CiHeart size={20} />
          <span>0</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaRegBookmark /> <span>0</span>
        </div>
      </div>
      {/* Bottom icons div - ends */}

      <Border />
    </div>
  );
};

export default Feed;
