import Avatar from "react-avatar";
import { AiOutlinePicture } from "react-icons/ai";
import Border from "../components/Border";
import Button from "../components/Button";
import Feed from "../components/Feed";

const HeroSection = () => {
  return (
    <div className="">
      <div className="flex justify-around font-bold text-lg  ">
        <div>For you</div>
        <div>Following</div>
      </div>
      <Border />

      {/* Second row - starts */}
      <div className="pt-4 px-4">
        <div className="space-x-2 flex">
          <Avatar size="48" round color="gray" />
          <input
            type="text"
            placeholder="What's happening?"
            className="text-2xl outline-none"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <AiOutlinePicture size={20} />
          <Button label={"Post"} className="bg-gray-500 text-black px-6 " />
        </div>
        {/* May render below border conditionally on input focus on */}
        {/* <div className="flex justify-center">
          <div className="border-b w-[80%]  border-gray-600 mt-4"></div>
        </div> */}
      </div>
      {/* Second row - ends */}
      <Border />

      {/* Third row - starts*/}
      <Feed />

      {/* Third row - ends*/}
    </div>
  );
};

export default HeroSection;
