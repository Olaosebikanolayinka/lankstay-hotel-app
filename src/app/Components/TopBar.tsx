"use client";
import { Bell, Menu } from "lucide-react";

interface TopbarProps {
  toggleSidebar: () => void;
}

const TopBar = ({ toggleSidebar }: TopbarProps) => {
  return (
    <header className="flex justify-between items-center  border-b border-gray-200 px-4 md:px-8 py-4 sticky top-0 z-30">
      {/* Left: Menu + Greeting */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <div>
          <h2 className="text-sm text-gray-600">Hello, Salman</h2>
          <p className="text-lg font-semibold text-gray-900">Have a nice day</p>
        </div>
      </div>

      {/* Right: Profile */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-2 px-4">
         <img src="./saleem.png" alt="" />
          <div className="text-sm">
            <p className="font-medium text-gray-800">Salman Faris</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
