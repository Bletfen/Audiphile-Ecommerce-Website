import useCartStore from "@/store/cartStore";
import { type ChangeEvent } from "react";

export default function QuantityMangaer({
  itemQuantity,
  itemSlug,
  type,
}: {
  itemQuantity?: number;
  itemSlug?: string;
  type?: "cart";
}) {
  const { increment, decrement, quantity, setQuantity, updateItemQuantity } =
    useCartStore();
  const isCart = type === "cart";
  const displayQuantity =
    isCart && typeof itemQuantity === "number" ? itemQuantity : quantity;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isCart) {
      if (!itemSlug) return;
      const nextValue = Number(event.target.value);
      if (Number.isNaN(nextValue)) return;
      updateItemQuantity(itemSlug, nextValue);
      return;
    }
    const nextValue = Number(event.target.value);
    if (Number.isNaN(nextValue)) return;
    setQuantity(Math.min(10, Math.max(1, nextValue)));
  };

  const handleDecrement = () => {
    if (isCart) {
      if (!itemSlug) return;
      updateItemQuantity(itemSlug, (itemQuantity ?? 1) - 1);
      return;
    }
    decrement();
  };

  const handleIncrement = () => {
    if (isCart) {
      if (!itemSlug) return;
      updateItemQuantity(itemSlug, (itemQuantity ?? 1) + 1);
      return;
    }
    increment();
  };
  return (
    <div>
      <div
        className="flex items-center w-[12rem]
                justify-between p-[1.5rem] 
                bg-[#F1F1F1]"
      >
        <button
          type="button"
          onClick={handleDecrement}
          aria-label="Decrease quantity"
          className="p-1 cursor-pointer"
        >
          <svg
            width="4"
            height="2"
            viewBox="0 0 4 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.25"
              d="M1.2517e-06 1.22889V0.00039047H3.9V1.22889H1.2517e-06Z"
              fill="black"
            />
          </svg>
        </button>
        <input
          type="number"
          min="1"
          max="10"
          value={displayQuantity}
          onChange={handleChange}
          className="text-[1.3rem] font-bold
          tracking-[0.1rem] text-center"
        />
        <button
          type="button"
          onClick={handleIncrement}
          aria-label="Increase quantity"
          className="p-1 cursor-pointer"
        >
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.25"
              d="M2.327 5.87519V3.54819H1.2517e-06V2.31969H2.327V-0.000812829H3.5555V2.31969H5.8695V3.54819H3.5555V5.87519H2.327Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
