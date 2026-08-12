import React from "react";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiUser,
  FiChevronDown,
  FiSidebar,
} from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-sm p-2 text-gray-800 transition cursor-pointer hover:bg-gray-100 border border-gray-100 flex items-center justify-center">
            <FiSidebar size={20} />
          </div>
        </div>

        <div className="mx-6 hidden max-w-md flex-1 md:block">
          <div className="relative">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search todos..."
              className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-100"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
            aria-label="Search"
          >
            <FiSearch size={20} />
          </button>

          <button
            className="relative rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
            aria-label="Notifications"
          >
            <FiBell size={20} />

            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          <div className="mx-1 hidden h-7 w-px bg-gray-200 sm:block" />

          <button className="flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-gray-50">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <FiUser size={18} />
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-gray-900">Admin</p>

              <p className="text-xs text-gray-500">Administrator</p>
            </div>

            <FiChevronDown
              className="hidden text-gray-400 sm:block"
              size={16}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
