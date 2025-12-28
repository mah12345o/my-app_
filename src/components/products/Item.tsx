"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowDropright } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { RiSaveFill } from "react-icons/ri";
import { CommonBtn } from "../dashboard/CommonBtn";


export const Item = () => {
  const router = useRouter();
  console.log("router:", router);
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
        <div>
          <h1 className="text-[28px] font-medium">Products</h1>
          <div className="flex text-[14px] gap-2 items-center">
            <div className="text-[#2086BF]">Dashboard</div>
            <IoMdArrowDropright color="#667085" />
            <div className="text-[#667085]">Products List</div>
          </div>
        </div>
        <div className="flex gap-3">
          <CommonBtn
            className="!bg-[#bee3f8c8] border-0 text-[#2086BF]"
            text="Cancel"
          >
            <MdClose className="text-[#2086BF] text-lg" />
          </CommonBtn>
          <CommonBtn
            className="!bg-[#2086BF] border-0 text-white"
            text="Save Product"
          >
            <RiSaveFill className="text-white text-lg" />
          </CommonBtn>
        </div>
      </div>
      <div>Product form placeholder</div>
    </div>
  );
};
