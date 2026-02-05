"use client";
import useCartStore from "@/store/cartStore";
import { TProduct } from "@/types/type";
import { useEffect, useRef, useState } from "react";
import AddedToCartToast from "./AddedToCartToast";
import QuantityManager from "./QuantityManager";

export default function AddToCart({ item }: { item: TProduct }) {
  const { quantity, addItem, items, setQuantity } = useCartStore();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("PRODUCT ADDED TO CART");
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setQuantity(1);
  }, [item.slug, setQuantity]);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const handleAddToCart = () => {
    const existingItem = items.find((i) => i.product.slug === item.slug);
    const existingQuantity = existingItem?.quantity ?? 0;
    const willReachMax = existingQuantity + quantity >= 10;

    addItem(item, quantity);
    setToastMessage(
      willReachMax
        ? "MAX QUANTITY REACHED"
        : `${item.name.toUpperCase()} ADDED`,
    );
    setShowToast(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  return (
    <div
      className="relative flex items-center gap-[1.6rem]
        mt-[3.1rem] lg:mt-[4.7rem]"
    >
      <AddedToCartToast show={showToast} message={toastMessage} />
      <QuantityManager />
      <div
        className="py-[1.5rem] px-[3.4rem] bg-[#d87d4a] cursor-pointer"
        onClick={handleAddToCart}
      >
        <button
          className="text-white font-bold text-[1.3rem]
          tracking-[0.1rem] cursor-pointer"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
