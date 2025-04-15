import { products } from "../data";
import { RevenueTargetHeader } from "../RevenueTargetHeader";
import { ProductItem } from "./ProductItem";

export default function TopProducts({ isProducts }: { isProducts: boolean }) {
  return (
    <div>
      {/* Header */}
      <RevenueTargetHeader
        className="p-0"
        subTitle="Top Product in This Month"
        title="Top Product"
      />

      {/* Product List */}
      <ul className="mt-4">
        {products?.map((el) => (
          <ProductItem key={el?.id} product={el} isProducts={isProducts} />
        ))}
      </ul>
    </div>
  );
}
