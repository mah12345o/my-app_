"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { BsFillChatSquareFill } from "react-icons/bs";
import { FaCalendar, FaFile } from "react-icons/fa";
import { FcOrgUnit } from "react-icons/fc";
import { MdSpaceDashboard } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [accordionValue, setAccordionValue] = useState("");

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
      name: "E-commerce",
      path: "/ecommerce",
      icon: (
        <PiShoppingCartSimpleFill className="size-5 group-hover:text-[#2086BF] text-[#858D9D]" />
      ),
      description: "Manage products, orders, and customers",
      subItems: [
        {
          id: 2.1,
          name: "Product",
          path: "/products",
          description: "View and manage product listings",
        },
        {
          id: 2.2,
          name: "Categories",
          path: "/ecommerce/categories",
          description: "View and manage categories ",
        },
        {
          id: 2.3,
          name: "Orders",
          path: "/ecommerce/orders",
          description: "Track and process customer orders",
        },
        {
          id: 2.4,
          name: "Customer",
          path: "/ecommerce/customers",
          description: "Manage customer information",
        },
      ],
    },
    {
      id: 3,
      name: "Project",
      path: "/project",
      icon: (
        <AiFillProject className="size-5 group-hover:text-[#2086BF] text-[#858D9D]" />
      ),
      description: "Organize and track project progress",
      subItems: [
        {
          id: 3.1,
          name: "Tasks",
          path: "/project/tasks",
          description: "Manage project tasks",
        },
        {
          id: 3.2,
          name: "Timeline",
          path: "/project/timeline",
          description: "View project milestones",
        },
      ],
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
      icon: (
        <RiContactsFill className="size-5 group-hover:text-[#2086BF] text-[#858D9D]" />
      ),
      description: "Manage contacts and communication",
    },
    {
      id: 5,
      name: "File Manager",
      path: "/file-manager",
      icon: (
        <FaFile className="size-5 group-hover:text-[#2086BF] text-[#858D9D]" />
      ),
      description: "Organize and access files",
    },
    {
      id: 6,
      name: "Chat",
      path: "/chat",
      icon: (
        <BsFillChatSquareFill className="size-5 group-hover:text-[#2086BF] text-[#858D9D]" />
      ),
      description: "Real-time messaging with team",
    },
    {
      id: 7,
      name: "Calendar",
      path: "/calendar",
      icon: (
        <FaCalendar className="size-5 group-hover:text-[#2086BF] text-[#858D9D]" />
      ),
      description: "Schedule and track events",
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
              {sideBarContent?.map((el) => (
                <li
                  key={el?.id}
                  className={`${el.subItems?.some((sub) => pathname === sub.path) ? "border-[#2086BF] bg-[#c0e4f992] !text-[#2086BF] hover:border-s-0" : "hover:border-s-3"} py-5 text-[14px] font-semibold  px-0 hover:bg-[#c0e4f992] cursor-pointer group border-[#2086BF] `}
                >
                  {el?.subItems && el?.subItems?.length > 0 ? (
                    <Accordion
                      type="single"
                      collapsible
                      value={accordionValue}
                      onValueChange={setAccordionValue}
                    >
                      <AccordionItem value={`item-${el.id}`}>
                        <div className="flex justify-between items-center px-5">
                          <AccordionTrigger className="text-[#4A4C56] hover:text-[#2086BF] flex items-center gap-2 group-hover:text-[#2086BF]">
                            {el?.icon}
                            <span
                              className={`${el.subItems?.some((sub) => pathname === sub.path) ? " text-[#2086BF]" : ""} px-4`}
                            >
                              {el?.name}
                            </span>
                          </AccordionTrigger>
                          <div>
                            <TiArrowSortedDown
                              className={` ${accordionValue === `item-${el.id}` ? "rotate-180" : ""}`}
                            />
                          </div>
                        </div>
                        <AccordionContent>
                          {el?.subItems && el?.subItems?.length > 0 && (
                            <ul className="ml-0 my-2 bg-white flex group flex-col gap-2">
                              {el?.subItems?.map((subItem) => (
                                <li
                                  key={subItem?.id}
                                  className={`${pathname === subItem?.path ? "border-s-3 !border-[#2086BF] !bg-[#c0e4f992]  text-[#2086BF]" : " !text-[#4A4C56]"} group-hover:text-[#2086BF] py-4 hover:border-s-3 pl-12 px-0 hover:bg-[#c0e4f992] border-[#2086BF] group`}
                                >
                                  <Link
                                    href={subItem?.path || "/"}
                                    className=""
                                  >
                                    {subItem?.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      href={el?.path || "/"}
                      className="text-[#4A4C56]  hover:text-[#2086BF] flex px-5 items-center group-hover:text-[#2086BF]"
                    >
                      {el?.icon}
                      <span className="px-4">{el?.name}</span>
                    </Link>
                  )}
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
