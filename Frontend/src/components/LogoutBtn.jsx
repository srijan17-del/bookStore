import toast, { Toaster } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");

    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2000);

    toast.success("logged out successfully");
  };

  return (
    <div>
      <Toaster />
      <div
        onClick={handleLogout}
        className=" bg-red-600 text-white text-center px-4 py-2 rounded-lg cursor-pointer
  hover:bg-slate-700 duration-300 shadow-md"
      >
        Logout
      </div>
    </div>
  );
};

export default LogoutBtn;
