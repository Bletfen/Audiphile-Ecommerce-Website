"use client";
import CartProductInfo from "./CartProductInfo";
import useCartStore from "@/store/cartStore";

export default function Cart() {
  const { items, clearCart, setIsCartOpen } = useCartStore();
  return (
    <div
      className="max-w-[1110px] mx-auto px-[2.4rem]
      md:px-[3.9rem] xl:px-[0] overflow-auto"
    >
      <div
        className="ml-auto mt-[2.4rem] md:mt-[3.2rem] w-full max-w-[37.7rem]
          bg-white rounded-[0.8rem] p-[2.4rem] md:p-[3.2rem]
          max-h-[70vh] xl:max-h-[80vh] overflow-y-auto overscroll-contain"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2
            className="text-[1.8rem] font-bold tracking-[0.13rem]
              text-[#000]"
          >
            CART ({items.length})
          </h2>
          {items.length > 0 && (
            <button
              className="text-[1.5rem] font-[500] text-[#000]
                opacity-50 underline cursor-pointer text-underline
                transition-all duration-300
                hover:text-[#d87d4a] hover:opacity-100"
              onClick={clearCart}
            >
              Remove all
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div
            className="flex flex-col items-center text-center
              py-[3.2rem]"
          >
            <p className="text-[1.5rem] font-[500] text-[#000] opacity-50">
              Your cart is empty
            </p>
          </div>
        ) : (
          <div className="mt-[3.2rem]">
            <CartProductInfo items={items} setIsCartOpen={setIsCartOpen} />
          </div>
        )}
      </div>
    </div>
  );
}
