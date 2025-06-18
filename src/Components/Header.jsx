import logo from "../assets/Images/anime.png";
import log from "../assets/Images/log.png";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { MdCamera } from "react-icons/md";
import HeaderItems from "./HeaderItems";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: IoHome,
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
    },
    {
      name: "SERIES",
      icon: MdCamera,
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-8 items-center p-2">
        <img
          src={logo}
          alt="logo website"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItems key={index} name={""} Icon={item.icon} />
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
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItems key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>
      <img src={log} className="w-[40px] rounded-full m-4" />
    </div>
  );
}

export default Header;
