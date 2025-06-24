import logo from "../assets/Images/anime.png";
import log from "../assets/Images/users.png";
import { BsPeopleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
// import { MdCamera } from "react-icons/md";
import HeaderItems from "./HeaderItems";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [ShowNotification, setShowNotification] = useState(false);
  const [ShowProfile, setShowProfile] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const notifRef = useRef(null);
  const searchRef = useRef(null);

  const menu = [
    {
      name: "HOME",
      icon: GoHomeFill,
      rute: "/",
    },
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

  // menutup komponen ketika klik dimanapun
  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutsideProfile =
        profileRef.current && !profileRef.current.contains(event.target);
      const clickedOutsideNotif =
        notifRef.current && !notifRef.current.contains(event.target);
      const clickOutsideSearch =
        searchRef.current && !searchRef.current.contains(event.target);
      if (ShowProfile && clickedOutsideProfile) {
        setShowProfile(false);
      }

      if (ShowNotification && clickedOutsideNotif) {
        setShowNotification(false);
      }

      if (showSearchMenu && clickOutsideSearch) {
        setShowSearchMenu(false);
      }
    }

    // Tambahkan event listener saat komponen ter-mount
    document.addEventListener("mousedown", handleClickOutside);

    // Hapus event listener saat komponen ter-unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ShowProfile, ShowNotification, showSearchMenu]);

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
                    onClick={() => setToggle(false)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 md:gap-10 text-[18px]">
          <FaSearch
            onClick={() => setShowSearchMenu(!showSearchMenu)}
            className="cursor-pointer"
          />
          <span
            ref={notifRef}
            onClick={() => setShowNotification(!ShowNotification)}
            className="cursor-pointer "
          >
            <IoNotifications className="cursor-pointer text-lg" />
            <div className="absolute top-6 right-23 bg-red-700 rounded-full w-3 h-3 md:top-12 md:right-31">
              <p className=" text-[10px] font-bold text-white text-center">1</p>
            </div>
          </span>
          <img
            src={log}
            className="w-[40px] rounded-full m-4 cursor-pointer"
            onClick={() => setShowProfile(!ShowProfile)}
          />
          {/* tampilkan toggle profile */}
          {ShowProfile && (
            <div
              ref={profileRef}
              className="absolute border border-gray-600 bg-gray-800 rounded-lg top-15 right-2 grid grid-cols-1 text-sm w-40 md:top-25 md:right-5"
            >
              <div className="border-b grid grid-cols-1 gap-1 p-2 px-4 cursor-pointer">
                <a
                  href="#"
                  className="hover:underline underline-offset-4 font-bold"
                >
                  Your Username
                </a>
                <a href="#" className="text-[10px] mt-2 hover:text-gray-500">
                  View Profile
                </a>
              </div>
              <div className="border-b grid grid-cols-1 gap-1 p-2 px-4 cursor-pointer">
                <a href="#" className="hover:underline underline-offset-4">
                  Discussions
                </a>
                <a href="#" className="hover:underline underline-offset-4">
                  List
                </a>
                <a href="#" className="hover:underline underline-offset-4">
                  Rating
                </a>
                <a href="#" className="hover:underline underline-offset-4">
                  Watchlist
                </a>
              </div>
              <div className="border-b grid grid-cols-1 gap-1 p-2 px-4 cursor-pointer">
                <a href="#" className="hover:underline underline-offset-4">
                  Edit Profile
                </a>
                <a href="#" className="hover:underline underline-offset-4">
                  Settings
                </a>
              </div>
              <a
                href="#"
                className="p-2 px-4 cursor-pointer hover:underline underline-offset-4"
              >
                Logout
              </a>
            </div>
          )}
          {/* tampilkan notifikasi */}
          {ShowNotification && (
            <div className="absolute top-12 right-25 left-25 shadow-lg rounded-lg bg-white mx-auto p-2 mdp-4 flex md:top-20 md:right-30 md:left-200 md:p-5">
              <div>
                <div className="text-[10px] md:text-sm pb-2 text-gray-600">
                  Notification Title
                  <span
                    className="float-right cursor-pointer"
                    onClick={() => setShowNotification(!ShowNotification)}
                  >
                    <svg
                      className="fill-current text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                    >
                      <path
                        class="heroicon-ui"
                        d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-[10px] md:text-sm text-gray-600  tracking-tight text-justify">
                  I will never close automatically. This is a purposely very
                  very long description that has many many characters and words.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* tampilkan menu ketika klik burger */}
      {showSearchMenu && (
        <div
          ref={searchRef}
          className="fixed mt-18 md:mt-28 w-full h-10 bg-[#1c2833] opacity-90 z-10"
        >
          {/* Close Button */}
          <div className="w-full h-full flex items-center px-5 gap-5">
            <span
              className="text-sm cursor-pointer"
              onClick={() => {
                if (query.trim() !== "") {
                  navigate(`/search?query=${encodeURIComponent(query)}`);
                  setShowSearchMenu(!showSearchMenu); // Optional: hide search bar
                }
              }}
            >
              <FaSearch />
            </span>
            <input
              className="w-full h-full outline-0 bg-transparent text-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && query.trim() !== "") {
                  navigate(`/search?query=${encodeURIComponent(query)}`);
                  setShowSearchMenu(false); // Optional
                }
              }}
            />
            <span
              className="text-sm cursor-pointer"
              onClick={() => setQuery("")} // Hanya hapus input, tidak tutup menu
            >
              <MdCancel />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
