import { RxCross2 } from "react-icons/rx";
const Register = () => {
  return (
    <main className="text-white relative flex justify-center items-center bg-gray-800 h-screen">
      {/* Card - starts  */}
      <main className="bg-black rounded-2xl relative">
        {/* Row 1 - starts */}
        <div className="flex mt-4 mx-4 justify-center">
          <div className="absolute left-4">
            <RxCross2 size={20} />
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png?20230728230735"
              alt=""
              className="w-12 "
            />
          </div>
        </div>
        {/* Row 1 - ends */}

        {/* Row 2 - starts*/}
        <div className="mx-20 mt-8 ">
          <div className="text-4xl font-bold mr-32">Create your account</div>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Username"
              className="text-xl py-4 px-2 border border-gray-500 rounded-lg w-full"
            />
          </div>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Name"
              className="text-xl py-4 px-2 border border-gray-500 rounded-lg w-full"
            />
          </div>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Email"
              className="text-xl py-4 px-2 border border-gray-500 rounded-lg w-full"
            />
          </div>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Password"
              className="text-xl py-4 px-2 border border-gray-500 rounded-lg w-full"
            />
          </div>
          <div className="my-8 ">
            <button className="w-full bg-gray-500 rounded-4xl py-4 text-black text-2xl font-semibold">
              Register
            </button>
          </div>
        </div>
        {/* Row 2 - ends */}
      </main>
      {/* Card - ends  */}
      <div className="absolute bottom-2 text-sm text-gray-400">About | Get the X app | Get the Grok app | Careers | Terms of Service | Privacy Policy | Cookie Policy | Developers | Advertising | Settings | 2025 X Corp.</div>
    </main>
  );
};

export default Register;
