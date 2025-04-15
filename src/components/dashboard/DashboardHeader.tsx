import { SelectDate } from "./SelectDate";
export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-start items-end flex-col sm:flex-row gap-2">
      <div>
        <h1 className="text-[28px] font-medium">WelCome back Jenil</h1>
        <p className="text-[#777980] text-[18px] font-normal">
          this is dashborad
        </p>
      </div>
      <SelectDate />
    </div>
  );
};
