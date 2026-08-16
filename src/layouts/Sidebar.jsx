import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiClipboard, FiGrid, FiSliders } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  const Menus = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
            isActive
              ? "bg-gray-900 text-white"
              : "text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900"
          }`
        }
      >
        <FiGrid size={18} className="shrink-0" />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/todos"
        end
        className={({ isActive }) =>
          `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
            isActive
              ? "bg-gray-900 text-white"
              : "text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900"
          }`
        }
      >
        <FiClipboard size={18} className="shrink-0" />
        <span>Todos</span>
      </NavLink>

      <NavLink
        to="/todos/create"
        end
        className={({ isActive }) =>
          `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
            isActive
              ? "bg-gray-900 text-white"
              : "text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900"
          }`
        }
      >
        <FaPlus size={14} className="shrink-0" />
        <span>Create Todo</span>
      </NavLink>

      {/* Others */}
      <div className="my-5 border-t border-gray-100" />

      <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
        Others
      </p>

      <NavLink
        to="/settings"
        end
        className={({ isActive }) =>
          `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
            isActive
              ? "bg-gray-900 text-white"
              : "text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900"
          }`
        }
      >
        <FiSliders size={18} className="shrink-0" />
        <span>Settings</span>
      </NavLink>
    </>
  );
  return (
    <div className="border-r border-gray-200 bg-white w-full h-full">
      <aside>
        <div>
          <div className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-gray-200 mb-10">
            <Link to="/" className="flex items-center gap-2">
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
