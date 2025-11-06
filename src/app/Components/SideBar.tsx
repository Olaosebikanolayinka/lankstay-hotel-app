"use client";
import { Home, Users, Hotel, Book, RefreshCw, MessageCircle, HelpCircle, Settings, X } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Users", icon: Users },
    { name: "Hotel Owners", icon: Hotel },
    { name: "Booking Details", icon: Book },
    { name: "Refund", icon: RefreshCw },
    { name: "Message", icon: MessageCircle },
    { name: "Help", icon: HelpCircle },
    { name: "Setting", icon: Settings },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
  className={`fixed md:static top-0 left-0 w-64 bg-white border-r border-gray-200 p-6 flex flex-col z-40 transform transition-transform duration-300
    h-full md:h-full lg:h-screen 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
>
        <div className="flex justify-between items-center mb-8 h-10">
          <h1 className="text-2xl font-semibold text-[#3252DF]">
            Lanka<span className="text-[#152C5B]">Stay.</span>
          </h1>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex-2 space-y-4 ">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href="#"
              className="flex items-center gap-3 text-gray-700 hover:bg-blue-50 px-4 py-2 rounded-md transition"
            >
              <item.icon className="w-5 h-5 text-[#3252DF]" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
