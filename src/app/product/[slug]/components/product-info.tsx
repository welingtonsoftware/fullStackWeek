"use client";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badg";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({product }: ProductInfoProps) => {
  const [quantity, setQuantily] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantilyClick = () => {
    setQuantily((prev) => (prev == 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantilyClick = () => {
    setQuantily((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({...product, quantity});
  }

    return (
      <div className="flex flex-col px-5">
        <h2 className="text-lg">{product.name}</h2>

        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">
            R$ {product.totalPrice.toFixed(2)}
          </h1>
          {product.discountPercent > 0 && (
            <DiscountBadge>{product.discountPercent}</DiscountBadge>
          )}
        </div>
        {product.discountPercent > 0 && (
          <p className="text-sm line-through opacity-75">
            R$ {Number(product.basePrice).toFixed(0)}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={handleDecreaseQuantilyClick}
          >
            <ArrowLeftIcon size={16} />
          </Button>
          <span> {quantity}</span>
          <Button
            size="icon"
            variant="outline"
            onClick={handleIncreaseQuantilyClick}
          >
            <ArrowRightIcon size={16} />
          </Button>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <h3 className="font-bold"> Descrição </h3>
          <p className="text-justify text-sm opacity-60">
            {product.description}
          </p>
        </div>

        <Button
          className="mt-8 font-bold uppercase"
          onClick={handleAddToCartClick}
        >
          Adicionar ao carrinho
        </Button>

        <div className="mt-5 rounded-lg bg-accent flex items-center px-5 py-2 justify-between">
          <div className="flex items-center gap-2">
            <TruckIcon />
            <div className="flex flex-col">
              <p className="text-xs">
                Entrega via<span className="font-bold">FSPacket</span>
              </p>
              <p className="text-[#8162FF] text-xs">
                Envio para <span className="font-bold">todo Brasil</span>
              </p>
            </div>
          </div>

          <p className="text-xs font-bold"> Frete grátis </p>
        </div>
      </div>
    );
  };


export default ProductInfo;
