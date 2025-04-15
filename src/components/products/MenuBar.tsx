export function MenuBar() {
  return (
    <div className="flex gap-2 rounded-lg p-1 border border-neutral-300 w-fit">
      <div className="p-1 px-2 bg-[#c6e1f0a4] rounded-lg hover:bg-[#c6e1f0a4] text-[#2086BF]">
        All Products
      </div>
      <div className="p-1 px-2 rounded-lg hover:bg-[#c6e1f0a4] text-[#2086BF]">
        Published
      </div>
      <div className="p-1 px-2 rounded-lg hover:bg-[#c6e1f0a4] text-[#2086BF]">
        Low Stock
      </div>
      <div className="p-1 px-2 rounded-lg hover:bg-[#c6e1f0a4] text-[#2086BF]">
        Draft
      </div>
    </div>
  );
}
