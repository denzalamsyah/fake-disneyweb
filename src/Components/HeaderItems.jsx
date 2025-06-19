import React from "react";

function HeaderItems({ name, rute, Icon }) {
  return (
    <a href={rute}>
      <span className="text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-10 mb-2">
        <Icon />
        <h2 className="">{name}</h2>
      </span>
    </a>
  );
}

export default HeaderItems;
