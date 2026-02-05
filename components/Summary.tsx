import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { getDisplayName } from "@/namemodifier/nameModifier";
import ThankYou from "./ThankYou";
import { useEffect } from "react";

export default function Summary({
  onSubmit,
  showThankYou,
  setShowThankYou,
}: {
  onSubmit: () => void;
  showThankYou: boolean;
  setShowThankYou: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { items } = useCartStore();
  const total = items
    .map(({ product, quantity }) => product.price * quantity)
    .reduce((a, b) => a + b, 0);

  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  const summaryArray = [
    { label: "TOTAL", value: total },
    { label: "SHIPPING", value: shipping },
    { label: "VAT(included)", value: vat },
    { label: "GRAND TOTAL", value: grandTotal },
  ];

  useEffect(() => {
    document.body.style.overflow = showThankYou ? "hidden" : "auto";
  }, [showThankYou]);

  return (
    <div
      className="bg-white p-[2.4rem] rounded-[0.8rem]
        mb-[9.7rem] xl:w-[35rem] md:p-[3.2rem]"
    >
      <h2
        className="text-[1.8rem] font-bold text-[#000]
        tracking-[1.14px] leading-[1.13] self-start mb-[3.1rem]"
      >
        SUMMARY
      </h2>
      <div>
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center justify-between mb-[1.6rem]"
          >
            <div className="flex items-center gap-[1.6rem]">
              <Image
                src={product.image.mobile}
                alt={product.name}
                width={64}
                height={64}
                className="rounded-[0.8rem]"
              />
              <div>
                <h3
                  className="text-[1.5rem] font-bold leading-[1.67]
                    text-[#000]"
                >
                  {getDisplayName(product.name.replace("Headphones", ""))}
                </h3>
                <span
                  className="text-[1.4rem] font-bold
                    leading-[1.79] text-[#000] opacity-50"
                >
                  $ {product.price.toLocaleString()}
                </span>
              </div>
            </div>
            <div
              className="text-[1.5rem] font-bold
                leading-[1.67] text-[#000] opacity-50"
            >
              <span>x{quantity}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[0.8rem] mb-[3.2rem]">
        {summaryArray.map((item) => (
          <div
            key={item.label}
            className={`flex items-center justify-between
            ${item.label === "GRAND TOTAL" ? "mt-[1.6rem]" : ""}`}
          >
            <span
              className="text-[1.5rem] font-bold
            leading-[1.67] text-[#000] opacity-50"
            >
              {item.label}
            </span>
            <span
              className={`text-[1.8rem] font-bold
                ${item.label === "GRAND TOTAL" ? "text-[#d87d4a]" : " text-[#000]"}`}
            >
              $ {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <button
        className="py-[1.5rem] text-center w-full
        bg-[#d87d4a] text-white font-bold text-[1.3rem]
        tracking-[0.1rem] cursor-pointer hover:bg-[#fbaf85]
        transition-all duration-300"
        onClick={onSubmit}
      >
        CONTINUE & PAY
      </button>
      {showThankYou && (
        <div
          className="fixed inset-x-0 bottom-0 top-[10.6rem]
            md:top-0 z-50 bg-black/50 min-h-screen"
        >
          <ThankYou />
        </div>
      )}
    </div>
  );
}
