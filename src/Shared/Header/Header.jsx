import { Link } from "react-router-dom";

export default function Header() {
  const navOptions = (
    <>
      <Link className="m-4" to="/">
        Home
      </Link>
      <Link className="m-4" to="/">
        Home
      </Link>
      <Link className="m-4" to="/">
        Home
      </Link>
    </>
  );
  return (
    <div>
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
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              <li>
               <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
