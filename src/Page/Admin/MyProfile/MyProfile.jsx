import { FaIdCard } from "react-icons/fa6";
import useUsers from "../../../hooks/useUsers";
import { PiUsersThreeLight } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";

export default function MyProfile() {
  const [, userOne] = useUsers();
  //   console.log("users",users)
  //   console.log("userOne",userOne)

  return (
    <div>
      <h1>Hi {userOne.name} Welcome Back</h1>
      <div className="gap-5 my-10 lg:flex">
        {/*  */}
        <div className="justify-between w-full border bg-gradient-to-r from-purple-700 to-white stats bg-base-100 border-base-300">
          <div className="flex items-center">
            <FaIdCard className="flex-1 m-10 text-3xl" />
          </div>
          <div className="stat ">
            <h1 className="stat-value">$89,400</h1>
            <div className="stat-title">Revenue</div>
          </div>
        </div>
        {/*  */}
        <div className="justify-between w-full border from-yellow-800 stats bg-base-100 border-base-300 bg-gradient-to-r to-white">
          <div className="flex items-center">
            <PiUsersThreeLight className="flex-1 m-10 text-3xl" />
          </div>
          <div className="stat ">
            <h1 className="stat-value">$89,400</h1>
            <div className="stat-title">Revenue</div>
          </div>
        </div>
        {/*  */}
        <div className="justify-between w-full border from-pink-800 stats bg-base-100 border-base-300 bg-gradient-to-r to-white">
          <div className="flex items-center">
            <MdOutlineProductionQuantityLimits className="flex-1 m-10 text-3xl" />
          </div>
          <div className="stat ">
            <h1 className="stat-value">$89,400</h1>
            <div className="stat-title">Revenue</div>
          </div>
        </div>
        {/*  */}
        <div className="justify-between w-full border from-blue-600 stats bg-base-100 border-base-300 to-white bg-gradient-to-r">
          <div className="flex items-center">
            <FaTruckMoving  className="flex-1 m-10 text-3xl" />
          </div>
          <div className="stat ">
            <h1 className="stat-value">$89,400</h1>
            <div className="stat-title">Revenue</div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover w-full h-56"
          src={userOne.photo}
          alt="avatar"
        />
        <div className="py-5 text-center">
          <a
            className="block text-xl font-bold text-gray-800 dark:text-white"
            role="link"
          >
            {userOne.name}
          </a>
          <span className="block text-sm text-gray-700 dark:text-gray-200">
            {userOne.email}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            {userOne.role}
          </span>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
