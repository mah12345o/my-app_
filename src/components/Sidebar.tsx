"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { FcOrgUnit } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const toggleSidebar = () => setIsOpen(!isOpen);


  const sideBarContent = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <MdSpaceDashboard className="size-5 group-hover:text-[#2086BF] text-[#858D9D]" />
      ),
      description: "Overview of key metrics and analytics",
    },
    {
      id: 2,
      name: "Campaign",
      path: "/campaign",
      icon: (
        <MdSpaceDashboard className="size-5 group-hover:text-[#2086BF] text-[#858D9D]" />
      ),
      description: "Overview of key metrics and analytics",
    },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute top-0 p-5 focus:outline-none"
        onClick={toggleSidebar}
      >
        <HiMenu size={30} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-[257px] bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out z-30`}
      >
        <div className="">
          <div className="flex items-center justify-between gap-2 px-4 py-4">
            <div className="flex items-center">
              <FcOrgUnit size={30} />
              <h2 className="text-[24px] font-semibold">MyTech</h2>
            </div>
            <IoCloseCircleOutline
              onClick={() => setIsOpen(false)}
              className="text-black flex md:hidden"
            />
          </div>
          <nav className="mt-6">
            <ul>
              {sideBarContent.map((el, index) => (
                <li
                  key={index}
                  className={`${pathname === el.path ? "border-s-3 border-[#2086BF] bg-[#c0e4f992] !text-[#2086BF]" : "hover:border-s-3"} py-5 text-[14px] font-semibold px-0 hover:bg-[#c0e4f992] cursor-pointer group border-[#2086BF]`}
                >
                  <Link
                    href={el.path || "/"}
                    className="text-[#4A4C56] hover:text-[#2086BF] flex px-5 items-center group-hover:text-[#2086BF]"
                  >
                    {el.icon}
                    <span className="px-4">{el.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 !bg-white w-fit md:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
