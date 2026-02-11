"use client";
import Image from "next/image";
import data from "@/data/data.json";
import Link from "next/link";

const listOfCategories = [
  {
    category: "headphones",
    images: data
      .filter((item) => item.slug.includes("mark-one"))
      .map((item) => item.categoryImage),
  },
  {
    category: "speakers",
    images: data
      .filter((item) => item.slug.includes("zx9"))
      .map((item) => item.categoryImage),
  },
  {
    category: "earphones",
    images: data
      .filter((item) => item.category === "earphones")
      .map((item) => item.categoryImage),
  },
];

export default function Category({
  type,
  setIsOpen,
}: {
  type?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section
      className={`px-[2.4rem] flex
      flex-col items-center md:flex-row
      transition-all duration-300
      md:gap-[1rem] md:justify-center
      lg:gap-[3rem]
      ${type === "menu" ? "w-full absolute left-1/2 -translate-x-1/2 w-[calc(100%-4.8rem)] max-w-[1110px] bg-white z-50 pb-[3.5rem] md:pb-[6.5rem] rounded-b-[0.8rem] justify-between max-h-[70vh] lg:max-h-[80vh] overflow-y-auto overscroll-contain" : ""}`}
    >
      {listOfCategories.map((item, i) => (
        <div key={i}>
          <div
            className="flex flex-col items-center
            relative mt-[9.2rem] transition-all duration-300
            w-[32.7rem]
            md:w-[22.3rem] 
            lg:max-w-[35rem] xl:w-[35rem]"
          >
            <Image
              src={item.images[0].desktop}
              alt={item.category}
              width={147}
              height={133}
              className="absolute top-[-71]"
            />
            <div
              className="absolute top-17"
              style={{
                width: "94.9px",
                height: "14px",
                margin: "0 0 32px",
                filter: "blur(18px)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            />
            <div></div>
            <Link
              href={"/" + item.category}
              className="bg-[#f1f1f1] rounded-[0.8rem]
                w-full pt-[8.8rem] pb-[2.2rem]
                flex flex-col items-center
                group"
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              <h2
                className="text-[1.5rem] font-bold
                text-[#000] tracking-[1.07px]
                mb-[1.3rem]
                lg:text-[1.8rem] tracking-[1.29px]"
              >
                {item.category.toUpperCase()}
              </h2>
              <div
                className="cursor-pointer 
                  flex items-center
                    gap-[1.3rem] justify-center"
              >
                <p
                  className="text-[1.3rem] font-bold
                    tracking-[0.1rem] text-[#000] opacity-50
                    group-hover:text-[#d87d4a] group-hover:opacity-100
                    transition-all duration-300
                    "
                >
                  SHOP
                </p>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Path 2"
                    d="M0.707031 0.707031L5.70703 5.70703L0.707031 10.707"
                    stroke="#D87D4A"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
