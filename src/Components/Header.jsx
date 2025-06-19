import logo from "../assets/Images/anime.png";
import log from "../assets/Images/users.png";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { MdCamera } from "react-icons/md";
import HeaderItems from "./HeaderItems";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
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
    <div className="fixed top-0 left-0 w-full z-20 flex items-center justify-between bg-[#131520] px-4 py-0">
      <div className="flex gap-8 items-center px-2">
        <Link className="w-[80px] md:w-[115px] object-cover" to={`/`}>
          <img src={logo} alt="logo website" className="w-full" />
        </Link>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItems
                  key={index}
                  name={""}
                  Icon={item.icon}
                  rute={item.rute}
                />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems name={""} Icon={FaEllipsisVertical} />
            {toggle ? (
              <div className="absolute mt-2 bg-[#1c2833] border-1 border-gray-600 px-3 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItems
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                        rute={item.rute}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
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
      </div>
      <img src={log} className="w-[40px] rounded-full m-4" />
    </div>
  );
}

export default Header;
