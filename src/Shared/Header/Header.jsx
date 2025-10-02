import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();
  const navOptions = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "m-4 text-blue-500 font-bold" : "m-4"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/ProductList"
        className={({ isActive }) =>
          isActive ? "m-4 text-blue-500 font-bold" : "m-4"
        }
      >
        Product List
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "m-4 text-blue-500 font-bold" : "m-4"
        }
      >
        Services
      </NavLink>
    </>
  );

  return (
    <div className="fixed z-10 border-t-0 shadow-sm bg-opacity-30 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">ElectroMart</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {/*  */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                referrerPolicy="no-referrer"
                src={
                  user
                    ? user?.photoURL
                    : "https://i.ibb.co.com/27rSBcKC/download.png"
                }
                alt="Profile"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            {user ? (
              <li>
                <a>Logout</a>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/Register"
                    className={({ isActive }) =>
                      isActive ? " text-blue-500 font-bold" : ""
                    }
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " text-blue-500 font-bold" : ""
                    }
                    to="/Login"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " text-blue-500 font-bold" : ""
                }
                to="/AdminDashboard/AdminPage"
              >
                Admin Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
