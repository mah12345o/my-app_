import { AiFillUsb } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { FaHeadphones, FaTablet } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { IoMdLaptop } from "react-icons/io";
import { MdMouse } from "react-icons/md";
import { RevenueTargetHeader } from "../RevenueTargetHeader";
import { ProductItem } from "./ProductItem";
import { Product } from "@/src/app/interface";

const topCategory: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    price: "$1,240",
    isTop: true,
    percentageChange: (
      <span className="px-2 py-1 bg-[#c2e2f55c] rounded-lg text-sm font-medium">
        <span className="text-[#2086BF]">+7%</span>
      </span>
    ),
    icon: (
      <div className="bg-[#c2e2f55c] rounded-full size-10 flex justify-center items-center">
        <BsPhoneFill className="text-[#2086BF]" />
      </div>
    ),
  },
  {
    id: 2,
    name: "Tablet",
    price: "$1,189",
    isTop: false,
    percentageChange: (
      <span className="px-2 py-1 bg-[#f6d5c587] rounded-lg text-sm font-medium">
        <span className="text-[#F86624]">+12%</span>
      </span>
    ),
    icon: (
      <div className="bg-[#f6d5c587] rounded-full size-10 flex justify-center items-center">
        <FaTablet className="text-[#F86624]" />
      </div>
    ),
  },
  {
    id: 3,
    name: "Earphone",
    price: "$1,100",
    isTop: false,
    percentageChange: (
      <span className="px-2 py-1 bg-[#c4f1eaa7] rounded-lg text-sm font-medium">
        <span className="text-[#22CAAD]">-2%</span>
      </span>
    ),
    icon: (
      <div className="bg-[#c4f1eaa7] rounded-full size-10 flex justify-center items-center">
        <FaHeadphones className="text-[#22CAAD]" />
      </div>
    ),
  },
  {
    id: 4,
    name: "Laptop & PC",
    price: "$908",
    isTop: false,
    percentageChange: (
      <span className="px-2 py-1 bg-[#f9c9cda8] rounded-lg text-sm font-medium">
        <span className="text-[#EB3D4D]">+18%</span>
      </span>
    ),
    icon: (
      <div className="bg-[#f9c9cda8] rounded-full size-10 flex justify-center items-center">
        <IoMdLaptop className="text-[#EB3D4D]" />
      </div>
    ),
  },
  {
    id: 5,
    name: "Mouse",
    price: "$900",
    isTop: false,
    percentageChange: (
      <span className="px-2 py-1 bg-[#cfe9f9a9] rounded-lg text-sm font-medium">
        <span className="text-[#2BB2FE]">+5%</span>
      </span>
    ),
    icon: (
      <div className="bg-[#cfe9f9a9] rounded-full size-10 flex justify-center items-center">
        <MdMouse className="text-[#2BB2FE]" />
      </div>
    ),
  },
  {
    id: 6,
    name: "Harddisk & USB Drive",
    price: "$870",
    isTop: false,
    percentageChange: (
      <span className="px-2 py-1 bg-[#f5eccaab] rounded-lg text-sm font-medium">
        <span className="text-[#F9C80E]">+9%</span>
      </span>
    ),
    icon: (
      <div className="bg-[#f5eccaab] rounded-full size-10 flex justify-center items-center">
        <AiFillUsb className="text-[#F9C80E]" />
      </div>
    ),
  },
  {
    id: 7,
    name: "Camera",
    price: "$870",
    isTop: false,
    percentageChange: (
      <span className="px-2 py-1 bg-[#c5cceeae] rounded-lg text-sm font-medium">
        <span className="text-[#4A4C56]">+22%</span>
      </span>
    ),
    icon: (
      <div className="bg-[#c5cceeae] rounded-full size-10 flex justify-center items-center">
        <FaCamera className="text-[#4A4C56]" />
      </div>
    ),
  },
];
export default function TopCategory({ isProducts }: { isProducts: boolean }) {
  return (
    <div>
      <RevenueTargetHeader
        className="p-0"
        subTitle="Top Categories in This Month"
        title="Top Categories"
      />

      <ul className="mt-4">
        {topCategory?.map((el) => (
          <ProductItem key={el?.id} product={el} isProducts={isProducts} />
        ))}
      </ul>
    </div>
  );
}
