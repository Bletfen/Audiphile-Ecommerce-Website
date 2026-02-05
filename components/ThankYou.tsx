"use client";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { getDisplayName } from "@/namemodifier/nameModifier";
import Link from "next/link";

export default function ThankYou() {
  const { items, clearCart } = useCartStore();
  const firstItem = items[0];
  const totalItems = items.length - 1;
  const total = items
    .map(({ product, quantity }) => product.price * quantity)
    .reduce((a, b) => a + b, 0);

  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  if (!firstItem) {
    return null;
  }

  return (
    <div
      className="flex flex-col items-center justify-center
        min-h-screen
        "
    >
      <div className="bg-white p-[3.2rem] rounded-[0.8rem]">
        <svg
          className="mb-[2.3rem]"
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#D87D4A" cx="32" cy="32" r="32" />
            <path
              stroke="#FFF"
              strokeWidth="4"
              d="m20.754 33.333 6.751 6.751 15.804-15.803"
            />
          </g>
        </svg>
        <h1
          className="text-[2.4rem] font-bold
            leading-[1.17] tracking-[0.86px] text-[#000]"
        >
          THANK YOU <br /> FOR YOUR ORDER
        </h1>
        <p
          className="text-[1.5rem] font-[500] leading-[1.67]
            opacity-50 text-[#000] mt-[1.6rem] mb-[2.4rem]"
        >
          You will receive an email confirmation shortly.
        </p>
        <div>
          <div className="p-[2.4rem] bg-[#F1F1F1] rounded-t-[0.8rem]">
            <div className="flex items-center justify-between mb-[1.6rem]">
              <div className="flex items-center gap-[1.6rem]">
                <Image
                  src={firstItem.product.image.mobile}
                  alt={firstItem.product.name}
                  width={64}
                  height={64}
                  className="rounded-[0.8rem]"
                />
                <div>
                  <h3
                    className="text-[1.5rem] font-bold leading-[1.67]
                            text-[#000]"
                  >
                    {getDisplayName(
                      firstItem.product.name.replace("Headphones", ""),
                    )}
                  </h3>
                  <span
                    className="text-[1.4rem] font-bold
                            leading-[1.79] text-[#000] opacity-50"
                  >
                    $ {firstItem.product.price.toLocaleString()}
                  </span>
                </div>
              </div>
              <div
                className="text-[1.5rem] font-bold
                        leading-[1.67] text-[#000] opacity-50"
              >
                <span>x{firstItem.quantity}</span>
              </div>
            </div>
            {totalItems > 0 && (
              <>
                <div className="h-px w-full opacity-8 bg-[#000]"></div>
                <div className="flex items-center justify-center mt-[1.2rem]">
                  <span className="text-[1.2rem] font-bold tracking-[-0.21px] opacity-50 text-[#000]">
                    and {totalItems} other item(s)
                  </span>
                </div>
              </>
            )}
          </div>
          <div>
            <div
              className="flex flex-col gap-[0.8rem]
                bg-[#000] py-[1.5rem] px-[2.4rem] text-white
                rounded-b-[0.8rem]"
            >
              <span
                className="text-[1.5rem] font-[500] leading-[1.67]
                opacity-50"
              >
                GRAND TOTAL
              </span>
              <span className="text-[1.8rem] font-bold">
                $ {grandTotal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <Link href="/" onClick={clearCart}>
          <button
            className="py-[1.5rem] text-center
            bg-[#D87D4A] text-white font-bold w-full mt-[2.3rem]
            text-[1.3rem] tracking-[0.1rem] cursor-pointer"
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
