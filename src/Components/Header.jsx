import logo from "../assets/Images/anime.png";
import log from "../assets/Images/users.png";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { MdCamera } from "react-icons/md";
import HeaderItems from "./HeaderItems";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: IoHome,
      rute: "/",
    },
    {
      name: "SEARCH",
      icon: FaSearch,
    },
    {
      name: "WATCHLIST",
      icon: MdFilterListAlt,
    },
    {
      name: "ORIGINALS",
      icon: FaStar,
    },
    {
      name: "MOVES",
      icon: MdLocalMovies,
      rute: "/movie",
    },
    {
      name: "SERIES",
      icon: MdCamera,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-20 flex items-center justify-between bg-[#131520] opacity-85 md:px-4 py-0">
      <div className="flex gap-8 items-center md:px-2">
        <Link
          className="w-[80px] hidden md:block md:w-[115px] object-cover"
          to={``}
        >
          <img src={logo} alt="logo website" className="w-full" />
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItems
              key={index}
              name={item.name}
              Icon={item.icon}
              rute={item.rute}
            />
          ))}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center ">
          <button onClick={() => setToggle(true)}>
            <FaBars className="text-white gap-4 bg-transparent text-2xl" />
          </button>
          {/* Search Icon */}
          <button className="bg-none" onClick={() => setShowSearchMenu(true)}>
            <FaSearch className="text-white gap-4 text-xl" />
          </button>
          {/* Fullscreen overlay menu */}
          {toggle && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-95 z-30 flex flex-col items-center justify-center space-y-6 text-white">
              {/* Close button */}
              <button
                className="absolute top-5 right-5 text-3xl text-white"
                onClick={() => setToggle(false)}
              >
                <MdCancel />
              </button>
              <h2 className="text-2xl font-semibold mb-6">My Menus</h2>

              {/* Menu items */}
              {menu.map((item, index) => (
                <HeaderItems
                  key={index}
                  name={item.name}
                  Icon={item.icon}
                  rute={item.rute}
                  toggle={!toggle}
                />
              ))}
            </div>
          )}
          {showSearchMenu && (
            <div className="fixed top-0 left-0 w-full h-full bg-[#1c2833] bg-opacity-95 z-50 text-white px-6 py-8">
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-3xl"
                onClick={() => setShowSearchMenu(false)}
              >
                <FaSearch />
              </button>

              <h2 className="text-2xl font-semibold mb-6">Search Movies</h2>

              <div className="flex flex-col gap-4">
                <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
                  By Genre
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
                  By Country
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
                  By Year
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <img src={log} className="w-[40px] rounded-full m-4" />
    </div>
  );
}

export default Header;
