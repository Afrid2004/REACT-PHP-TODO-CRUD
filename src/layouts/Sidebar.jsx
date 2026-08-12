import React from "react";
import { FiClipboard, FiGrid, FiSliders } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  const Menus = (
    <>
      <NavLink
        to={"/"}
        className=" [&.active]:border-l-4 border-black px-4 py-2 bg-black/7 hover:bg-black/10 duration-75"
      >
        <div className="flex items-center gap-2">
          <FiGrid size={18} /> Dashboard
        </div>
      </NavLink>
      <NavLink
        to={"/todos"}
        className="[&.active]:border-l-4 border-black px-4 py-2 bg-black/7 hover:bg-black/10 duration-75"
      >
        <div className="flex items-center gap-2">
          <FiClipboard /> Todos
        </div>
      </NavLink>
      <NavLink
        to={"/settings"}
        className="[&.active]:border-l-4 border-black px-4 py-2 bg-black/7 hover:bg-black/10 duration-75"
      >
        <div className="flex items-center gap-2">
          <FiSliders /> Settings
        </div>
      </NavLink>
    </>
  );
  return (
    <div className="border-r border-gray-200 bg-white w-full h-full">
      <aside>
        <div>
          <div className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-gray-200 mb-10">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
                T
              </div>

              <span className="hidden text-lg font-semibold tracking-tight text-gray-900 sm:block">
                Todo<span className="text-gray-400">Manage</span>
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-5 px-4 sm:px-6">{Menus}</div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
