import React from "react";

function HeaderItems({ name, rute, Icon }) {
  return (
    <a href={rute}>
      <span className="text-white w-80 p-4 border-2 md:border-none md:p-0 md:w-auto gap-2 md:gap-4 flex items-center text-[18px] font-semibold cursor-pointer hover:underline underline-offset-10 mb-2">
        <Icon />
        <h2 className="text-[18px]">{name}</h2>
      </span>
    </a>
  );
}

export default HeaderItems;
