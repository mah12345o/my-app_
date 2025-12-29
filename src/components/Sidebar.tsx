"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { FcOrgUnit } from "react-icons/fc";

import { IoCloseCircleOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

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
  ];

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-[257px] bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out z-30`}
      >
        <div className="">
          <div className="flex items-center justify-between gap-2 px-4 py-4">
            <div className="flex items-center">
              <FcOrgUnit size={30} />
              <h2 className="text-[24px] font-semibold">Digi Dash</h2>
            </div>
            <IoCloseCircleOutline
              onClick={onClose}
              className="text-black flex lg:hidden cursor-pointer"
              size={24}
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
                    onClick={onClose}
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
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
