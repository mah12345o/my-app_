import { Product } from "@/src/app/interface";

export const ProductItem = ({
  product,
  isProducts,
}: {
  product: Product;
  isProducts: boolean;
}) => {
  return (
    <li key={product?.id} className="flex items-center justify-between py-2 ">
      <div className="flex items-center space-x-2">
        {isProducts ? (
          <div className="flex gap-3">
            <span className="size-10 rounded-xl bg-gray-200 border-0" />
            <div className="flex flex-col">
              <span className="text-sm text-[#1D1F2C]">{product?.name}</span>
              <span className="sm:text-sm text-[10px] text-gray-500">
                {product?.subCategory}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2">
            {product?.icon}
            <span className="text-sm text-gray-900">{product?.name}</span>
          </div>
        )}
      </div>
      <div className="text-sm text-gray-700 font-medium flex gap-2 items-center">
        {product?.price}
        {!isProducts && <> {product?.percentageChange}</>}
      </div>
    </li>
  );
};
