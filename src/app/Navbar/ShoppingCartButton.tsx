"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {

  function closeDropdown() {
    const elem = document.activeElement as HTMLElement
    if(elem) {
      elem.blur();
    }
  }

  return (


    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle btn ">
        <div className="indicator">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" stroke="currentColor">
            <path d="m28.76 11.35a1 1 0 0 0 -.76-.35h-6v-4a3 3 0 0 0 -3-3h-6a3 3 0 0 0 -3 3v4h-6a1 1 0 0 0 -1 1.15l1.88 12.15a2 2 0 0 0 2 1.7h18.26a2 2 0 0 0 2-1.7l1.86-12.15a1 1 0 0 0 -.24-.8zm-16.76-4.35a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4h-8zm13.14 17h-18.28l-1.69-11h21.66z" />
            <path d="m0 0h32v32h-32z" fill="none" />
          </svg>
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div tabIndex={0} className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30">
        <div className="card-body">
            <span className="text-lg font-bold">{cart?.size || 0} Items</span>
            <span className="text-info">Subtotal: {formatPrice(cart?.subtotal || 0)}</span>
            <div className="card-actions">
              <Link href="/cart" className="btn btn-primary btn-block" onClick={closeDropdown}>View Cart</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
