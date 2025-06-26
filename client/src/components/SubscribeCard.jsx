import Button from "./Button";

const SubscribeCard = () => {
  return (
    <div className="border-1 p-4 rounded-xl border-gray-600">
      <div className="font-extrabold mb-2 text-2xl">Subscribe to Premium</div>
      <p className="font-semibold ">
        Subscribe to unlock new features and if eligible, receive a share of
        revenue.
      </p>
      <Button label={"Subscribe"} className="bg-blue-400 text-white px-6" />
    </div>
  );
};

export default SubscribeCard;
