import { TProduct } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export default function CategoryInfo({ data }: { data: TProduct[] }) {
  return (
    <div
      className="flex flex-col items-center
        gap-[12rem] max-w-[1110px] mx-auto"
    >
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`lg:flex
            items-center gap-[12.5rem]
            `}
        >
          <div
            className={`flex flex-col
              items-center
              ${(index + 1) % 2 === 0 && "lg:order-2"}`}
          >
            <Image
              src={item.image.mobile}
              alt={item.name}
              width={220}
              height={240}
              className="flex md:hidden rounded-[0.8rem]"
            />
            <div
              className="hidden md:flex lg:hidden rounded-[0.8rem]
              w-[689px] h-[352px] bg-[#f1f1f1]
              flex items-center justify-center"
            >
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={220}
                height={243}
                className="hidden md:flex lg:hidden rounded-[0.8rem]"
              />
            </div>
            <Image
              src={item.image.desktop}
              alt={item.name}
              width={540}
              height={560}
              className="hidden lg:flex rounded-[0.8rem]"
            />
          </div>
          <div
            className="flex flex-col
              items-center text-center
              gap-[2.4rem] mt-[3.2rem]
              md:gap-[0] md:mt-[5.2rem]
              lg:mt-[0] lg:items-start lg:text-start"
          >
            {item.new && (
              <span
                className="text-[1.4rem]
                  tracking-[1rem] text-[#d87d4a]
                  md:mb-[1.6rem]
                  "
              >
                NEW PRODUCT
              </span>
            )}
            <h2
              className="text-[2.8rem] font-bold
                text-[#000] tracking-[0.1rem]
                max-w-[32.7rem] md:mb-[3.2rem]
                md:text-[4rem] md:leading-[1.1]
                md:tracking-[1.43px]"
            >
              {item.name.toUpperCase()}
            </h2>
            <p
              className="text-[1.5rem] font-[500]
                leading-[1.67] text-[#000] opacity-50
                md:mb-[2.4rem] max-w-[57.2rem]
                lg:max-w-[44.5rem]
                "
            >
              {item.description}
            </p>
            <Link
              href={`/${item.category}/${item.slug}`}
              className="px-[3rem] py-[1.5rem] bg-[#d87d4a]
                text-white text-[1.3rem] font-bold
                inline-block cursor-pointer
                hover:bg-[#fbaf85] transition-all duration-300
                "
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
