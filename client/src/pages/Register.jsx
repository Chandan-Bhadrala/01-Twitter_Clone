import { RxCross2 } from "react-icons/rx";
import Avatar from "react-avatar";
import { Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../features/auth/authApi";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { useEffect, useState } from "react";

const Register = () => {
  // 01a. Setting up react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // 01b. Variable to store Image src Url in the preview variable (Avatar-Image).
  const [preview, setPreview] = useState(null);

  // 02. Form submit handler.
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("password", data.password);
      if (data.avatarFile && data.avatarFile[0]) {
        formData.append("avatarFile", data.avatarFile[0]);
      }

      // 02a. Submitting data to the api-endpoint.
      const userData = await registerUser(formData).unwrap();

      // 04b. Submitting data to the redux auth state.
      dispatch(
        userLoggedIn({
          user: registerData?.data,
          accessToken: registerData?.meta?.accessToken,
        })
      );
    } catch (error) {}
  };

  // 02a. Setting up user profile pic.
  const fileWatch = watch("avatarFile");
  useEffect(() => {
    if (fileWatch && fileWatch[0]) {
      // 00a5.Create a local url from the avatarFile parent variable "fileWatch" to be stored in the preview variable. As preview is the variable that is set as src in the avatar image tag.
      const imageUrl = URL.createObjectURL(fileWatch[0]);
      setPreview(imageUrl);
    }
  }, [fileWatch]);

  // 03. RTK POST Query to register user.
  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();

  // 04a. Submitting data to the redux auth state.
  const dispatch = useDispatch();

  return (
    <main className="text-white relative flex justify-center items-center bg-gray-800 min-h-screen">
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
          {/* TODO: Add Avatar placeholder to create an option for user to upload the profile pic. Keep it position absolute right*/}
          <label htmlFor="avatar-upload" className="cursor-pointer">
            <div className="absolute right-12">
              <Avatar round="20px" src={preview || "/profile2.png"} />
            </div>
            <div className="absolute right-8 top-28">
              <Upload size={"20px"} />
            </div>
          </label>
        </div>

        {/* Row 1 - ends */}

        {/* Row 2 (Input) - starts*/}
        <div className="mx-20 mt-8 ">
          <div className="text-4xl font-bold mr-32">Create your account</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-8">
              <input
                type="file"
                className="hidden"
                id="avatar-upload"
                accept="image/*"
                {...register("avatarFile")}
              />

              <input
                type="text"
                placeholder="Username"
                className="text-xl py-4 px-2 border border-gray-500 rounded-lg w-full"
                {...register("username")}
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                placeholder="Name"
                className="text-xl py-4 px-2 border border-gray-500 rounded-lg w-full"
                {...register("fullName")}
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                placeholder="Email"
                className="text-xl py-4 px-2 border border-gray-500 rounded-lg w-full"
                {...register("email")}
              />
            </div>
            <div className="mt-8">
              <input
                type="password"
                placeholder="Password"
                className="text-xl py-4 px-2 border border-gray-500 rounded-lg w-full"
                {...register("password")}
              />
            </div>
            <div className="my-8 ">
              <button
                className="w-full bg-gray-500 rounded-4xl py-4 text-black text-2xl font-semibold cursor-pointer"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        {/* Row 2 - ends */}
      </main>
      {/* Card - ends  */}
      <div className="absolute bottom-2 text-sm text-gray-400">
        About | Get the X app | Get the Grok app | Careers | Terms of Service |
        Privacy Policy | Cookie Policy | Developers | Advertising | Settings |
        2025 X Corp.
      </div>
    </main>
  );
};

export default Register;
