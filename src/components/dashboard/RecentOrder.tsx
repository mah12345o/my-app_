import { FiList } from "react-icons/fi";
import { CommonCardLayout } from "../CommonCardLayout";

import { Label } from "./Label";
import { SelectDate } from "./SelectDate";
import DataTable from "./DataTable";

export const RecentOrder = () => {
  return (
    <CommonCardLayout className="flex-col flex p-0">
      <div className="flex w-full items-start overflow-y-auto flex-col gap-2 md:flex-row justify-between md:items-center p-4">
        <div className="flex items-center gap-2">
          <div>Recent Order</div>
          <Label text="+2 order" />
        </div>
        <div className="flex flex-row items-center gap-3 overflow-x-auto">
          <SelectDate />
          <div className="flex bg-white text-gray-400 h-fit py-2 rounded-lg px-3 border-gray-300 justify-center items-center border gap-2">
            <FiList /> <span>Fliter</span>
          </div>
          <Label className="!h-full" text="Sell all" />
        </div>
      </div>
      <DataTable />
    </CommonCardLayout>
  );
};
