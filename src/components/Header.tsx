import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiNotification4Fill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header() {
  const NavContent = [
    {
      navItem: <FaCalendarAlt color="#858D9D" size={18} />,
      route: "/",
    },
    { navItem: <RiNotification4Fill color="#858D9D" size={23} />, route: "/" },
    { navItem: <TbMailFilled color="#858D9D" size={23} />, route: "/" },
  ];

  return (
    <header className="p-4 pb-0 bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex justify-end md:justify-between w-full">
          <div className="hidden md:flex items-center gap-4 w-3/5">
            <IoIosSearch size={25} color="#4A4C56" />
            <input
              type="text"
              placeholder="Search"
              className="w-full focus:outline-0"
            />
          </div>
          <ul className="flex space-x-4 items-center gap-3">
            {NavContent?.map((el, index) => (
              <li key={index}>
                <Link href="/" className="hover:underline">
                  {el?.navItem}
                </Link>
              </li>
            ))}
            <div className="hidden xl:flex size-7 rounded-full bg-gray-200" />
            <Link
              href="/"
              className="flex flex-row items-center border-[#cdd5e39d] border-s pl-5"
            >
              <div className="flex pr-3 flex-row items-center gap-3">
                <div className="relative">
                  <BiUserCircle color="#858D9D" size={32} />
                  <div className="absolute border-2 rounded-full m-2 size-3 -bottom-2 bg-green-500 -right-1 text-white" />
                </div>

                <div className="hidden md:flex md:flex-col font-medium">
                  <div className="whitespace-nowrap text-[#07080B] text-[14px] ">
                    Mahesh
                  </div>
                  <div className="truncate whitespace-nowrap text-[12px] text-[#858D9D]">
                    Manager
                  </div>
                </div>
              </div>
              <TiArrowSortedDown
                className="hidden md:flex"
                color="#858D9D"
                size={20}
              />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
