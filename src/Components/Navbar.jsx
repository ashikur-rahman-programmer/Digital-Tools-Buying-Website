import { ShoppingCart } from "lucide-react";
import logo from "../assets/DigiTools.png";

<img src={logo} alt="website logo" />;
const Navbar = () => {
  return (
    <div className="w-full shadow-sm sticky top-0 z-50 ">
      {/* start navbar */}
      <div className="container mx-auto navbar bg-base-100  py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          {/* logo */}
          <a>
            <img src={logo} alt="website logo" />
          </a>

          {/* items */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        {/* btns */}
        <div className="navbar-end gap-4">
          <a className="cursor-pointer">
            <ShoppingCart />
          </a>
          <button className="btn">Login</button>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white ">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
