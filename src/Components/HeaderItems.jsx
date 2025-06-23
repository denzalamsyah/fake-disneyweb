import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HeaderItems({ name, rute, Icon, onClick }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(rute); // Navigasi ke halaman
    if (onClick) onClick(); // Tutup menu
  };

  return (
    <span
      onClick={handleClick}
      className="text-white w-80 p-4 border-2 md:border-none md:p-0 md:w-auto gap-2 md:gap-4 flex items-center text-[18px] font-semibold cursor-pointer hover:underline underline-offset-10 mb-2"
    >
      <Icon />
      <h2 className="text-[18px]">{name}</h2>
    </span>
  );
}

export default HeaderItems;
