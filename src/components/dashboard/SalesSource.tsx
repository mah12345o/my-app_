export default function SalesSource() {
  const items = [
    { name: "Official Website", price: "$10,000", color: "bg-[#2086BF]" },
    { name: "Offline Store", price: "$10,000", color: "bg-[#2BB2FE]" },
    { name: "Amazon Store", price: "$10,000", color: "bg-[#80D1FE]" },
    { name: "Reseller", price: "$10,000", color: "bg-[#D5F0FF]" },
  ];

  return (
    <div className="flex items-center w-full justify-center">
      {/* List Items */}
      <ul className="w-full flex flex-col gap-5 h-full">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex text-[14px] font-medium items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
              <span className="text-gray-800">{item.name}</span>
            </div>
            <span className="text-gray-800">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
