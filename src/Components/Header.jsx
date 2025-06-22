import logo from "../assets/Images/anime.png";
import log from "../assets/Images/users.png";
import { BsPeopleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
// import { MdCamera } from "react-icons/md";
import HeaderItems from "./HeaderItems";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const menu = [
    {
      name: "TV SHOWS",
      icon: FaTv,
      rute: "/tv",
    },
    {
      name: "MOVES",
      icon: MdLocalMovies,
      rute: "/movie",
    },
    {
      name: "PEOPLE",
      icon: BsPeopleFill,
      rute: "/person",
    },
  ];

  return (
    <>
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
          <div className="md:hidden flex items-center">
            <button onClick={() => setToggle(true)}>
              <FaBars className="text-white gap-4 bg-transparent text-2xl" />
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
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 text-[18px]">
          <FaSearch onClick={() => setShowSearchMenu(true)} />
          <IoNotifications />
          <img src={log} className="w-[40px] rounded-full m-4" />
        </div>
      </div>
      {showSearchMenu && (
        <div className="fixed mt-16 md:mt-28 w-full h-10 bg-[#1c2833] opacity-90 z-10">
          {/* Close Button */}
          <div className="w-full h-full flex items-center px-5 gap-5">
            <span className="text-sm" onClick={() => setShowSearchMenu(false)}>
              <FaSearch />
            </span>
            <input
              className="w-full h-full outline-0"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                navigate(`/search?query=${encodeURIComponent(e.target.value)}`);
              }}
            />
            <span className="text-sm" onClick={() => setShowSearchMenu(false)}>
              <MdCancel />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
