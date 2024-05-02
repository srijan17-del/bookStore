import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="">
        <input type="checkbox" id="my_modal_6" className="modal-toggle " />
        <div className="flex justify-center items-center mt-16 " role="dialog">
          <div className="modal-box ">
            <h3 className="font-bold text-xl">Signup</h3>
            <form
              method="dialog"
              className=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mt-4 space-y-1 w-72">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    {...register("text", { required: true })}
                  />
                </label>
                {errors.text && (
                  <span className="text-red-500 ">This field is required</span>
                )}
              </div>
              <div className="mt-4 space-y-1 w-72">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    className="grow"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </label>
                {errors.email && (
                  <span className="text-red-500 ">This field is required</span>
                )}
              </div>
              <div className="mt-4 space-y-1 w-72">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </label>
                {errors.password && (
                  <span className="text-red-500 ">This field is required</span>
                )}
              </div>
              <div className="flex items-center justify-around">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-orange-200 hover:bg-orange-500 duration-200 text-center mt-4 text-black/75"
                >
                  Signup
                </button>

                <p className="mt-4 ">
                  Already registered?{" "}
                  <label
                    htmlFor="my_modal_6"
                    className=" underline text-blue-400 cursor-pointer hover:text-blue-700 duration-100"
                  >
                    Log In
                  </label>
                </p>
              </div>
            </form>

            <div className="modal-action">
              <Link to={"/"}>
                <button className="btn">Close!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
