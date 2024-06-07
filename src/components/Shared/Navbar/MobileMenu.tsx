"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItemsData } from "./navItems";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Mobile Menu Button (visible on small screens) */}
      <div className=" flex md:hidden lg:hidden px-2 relative justify-center items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className=" text-slate-700  rounded"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? (
            <div className="p-1 border border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white">
              <X className="size-8" />
            </div>
          ) : (
            <div className="p-1 flex justify-center items-center gap-2">
              <MenuIcon className="size-8" />
            </div>
          )}
          {isOpen && (
            <div className=" mt-3 w-[250px] top-8 right-0 shadow-lg rounded-lg absolute transition-all duration-500 z-50 bg-gray-200 border border-red-400 pt-4 pb-8">
              <nav className="w-full flex flex-col rounded-lg mb-7">
                {navItemsData.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className=" text-md font-semibold  py-2 px-4 hover:text-[#FF5555] active:text-[#FF5555] rounded-md"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              <Link
                href="/"
                className=" text-md font-semibold  py-4 px-10 text-white bg-black hover:bg-gray-700 rounded-md mt-10"
              >
                Download
              </Link>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
