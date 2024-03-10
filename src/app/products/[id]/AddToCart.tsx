"use client";
import { useState } from "react";
import { useTransition } from "react";
import { Product } from "@prisma/client";
interface AddToCartProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCart({
  productId,
  incrementProductQuantity,
}: AddToCartProps) {
  const [isPending, startTranstition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn-primary btn"
        onClick={() => {
          setSuccess(false);
          startTranstition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
      </button>
      {isPending && <span className="loading loading-ring loading-md"/>}
      {!isPending && success && <span className="text-success ">Added to Cart.</span>}
    </div>
  );
}
