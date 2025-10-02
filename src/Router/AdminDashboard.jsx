import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { IoAddCircleOutline, IoHome } from "react-icons/io5";
import { LiaFirstOrderAlt } from "react-icons/lia";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiMyget } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="flex">
      {/*  */}
      <div>
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <a>
            <img className="w-auto rounded-full h-7" src="/icon.png" alt="" />
          </a>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="-mx-3 space-y-3 ">
              {/* Admin section Link */}
              <Link
                to="/AdminDashboard/MyProfile"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <CgProfile />
                <span className="mx-2 text-sm font-medium">
                  My Profile Management
                </span>
              </Link>
              <Link
                to="/AdminDashboard/AdminUsersManage"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <GrUserSettings />
                <span className="mx-2 text-sm font-medium">
                  Users Management
                </span>
              </Link>
              <Link
                to="/AdminDashboard/AdminPage"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <MdOutlineProductionQuantityLimits />
                <span className="mx-2 text-sm font-medium">
                  Products Management
                </span>
              </Link>
              <Link
                to="/AdminDashboard/AdminPage"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <LiaFirstOrderAlt />
                <span className="mx-2 text-sm font-medium">
                  Orders Management
                </span>
              </Link>
              <div className="divider"></div>
              {/* Header section Link */}
              <Link
                to="/"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <IoHome />
                <span className="mx-2 text-sm font-medium">Home</span>
              </Link>
              <Link
                to="/ProductList"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <AiOutlineProduct />
                <span className="mx-2 text-sm font-medium">Produts List</span>
              </Link>
              {/* product managment Link */}
              <Link
                to="/AdminDashboard/AddProduct"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <IoAddCircleOutline />
                <span className="mx-2 text-sm font-medium">Add Product</span>
              </Link>
              <Link
                to="/ProductList"
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
               <SiMyget />
                <span className="mx-2 text-sm font-medium">My Products list</span>
              </Link>
            </nav>
          </div>
        </aside>
      </div>
      {/*  */}
      <div className="ml-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
}