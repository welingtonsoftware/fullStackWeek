import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";
import Link from "next/link";
import DiscountBadge from "./discount-badg";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4 ">
        <div className="relative flex h-[170px] w-full bg-accent rounded-lg items-center justify-center">
          <Image
            src={product.imageURLs[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
            alt={product.name}
          />
          {product.discountPercent > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercent}
            </DiscountBadge>
          )}
        </div>

        <div className="flex felx-col gap-1">
          <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
                R$ {Number(product.totalPrice).toFixed(2)}
              </p>
              <p className="overflow-hidden whitespace-nowrap text-ellipsis text-xs opacity-75 line-through">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
              {Number(product.basePrice)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
