import { TProduct } from "@/types/type";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCart from "./AddToCart";
import ProductImages from "./ProductImages";
import OtherOffers from "./OtherOffers";
import Category from "./Category";
import HomeInfo from "./HomeInfo";
import Footer from "./Footer";

export default function ProductInfo({ data }: { data: TProduct | undefined }) {
  if (!data) {
    return notFound();
  }
  return (
    <div
      className="mt-[2.4rem] flex flex-col
      items-center
        "
    >
      <div
        className="px-[2.4rem] md:px-[3.9rem]
        md:flex md:items-center md:gap-[6.9rem]
        xl:w-[111rem] mx-auto xl:gap-[12.5rem]
        xl:px-[0]"
      >
        <Image
          src={data.image.mobile}
          alt={data.name}
          width={327}
          height={327}
          className="rounded-[0.8rem] md:hidden"
        />
        <Image
          src={data.image.tablet}
          alt={data.name}
          width={281}
          height={480}
          className="hidden rounded-[0.8rem] md:block xl:hidden"
        />
        <Image
          src={data.image.desktop}
          alt={data.name}
          width={540}
          height={560}
          className="hidden rounded-[0.8rem] hidden xl:block"
        />
        <div
          className="flex flex-col mt-[3.2rem]
            md:mt-[0]"
        >
          {data.new && (
            <span
              className="text-[1.4rem] tracking-[1rem]
                text-[#d87d4a] mb-[2.4rem]
                md:mb-[1.7rem] md:text-[1.2rem]
                md:tracking-[8.57px] xl:tracking-[1rem]
                xl:mb-[1.6rem]"
            >
              NEW PRODUCT
            </span>
          )}
          <h2
            className="mb-[2.4rem] text-[2.8rem]
            font-bold tracking-[0.1rem] text-[#000]
            md:mb-[3.2rem] md:leading-[1.14]
            xl:text-[4rem] xl:tracking-[1.43px]
            xl:leading-[1.1] xl:mb-[3.2rem]"
          >
            {data.name.toUpperCase()}
          </h2>
          <p
            className="mb-[2.4rem] text-[1.5rem] font-[500]
            leading-[1.67] text-[#000] opacity-50
            md:mb-[3.2rem] md:w-[33.9rem]"
          >
            {data.description}
          </p>
          <span className="text-[1.8rem] font-bold tracking-[1.29px] text-[#000]">
            $ {data.price.toLocaleString()}
          </span>
          <div>
            <AddToCart item={data} />
          </div>
        </div>
      </div>
      <section
        className="xl:flex xl:w-[111rem]
        xl:justify-between xl:mx-auto
        xl:mt-[16rem] gap-[12.5rem]"
      >
        <section
          className="flex flex-col gap-[2.4rem]
            px-[2.4rem] md:px-[3.9rem] xl:px-[0]"
        >
          <h3
            className="text-[2.4rem] font-bold leading-[1.5]
            tracking-[0.86px] text-[#000] mt-[8.8rem]
            md:text-[3.2rem] md:leading-[1.13] md:tracking-[1.14px]
            xl:mt-[0]"
          >
            FEATURES
          </h3>
          <p
            className="mb-[2.4rem] text-[1.5rem] font-[500]
              leading-[1.67] text-[#000] opacity-50 whitespace-pre-line"
          >
            {data.features}
          </p>
        </section>
        <section
          className="self-start
        px-[2.4rem] md:px-[0] md:pl-[3.9rem]
        md:flex md:justify-between md:w-[54.9rem]
        md:mt-[12rem] xl:shrink-0
        xl:flex-col xl:w-[35rem] xl:gap-[3.2rem]
        xl:mt-[0]"
        >
          <h3
            className="text-[2.4rem] font-bold leading-[1.5]
            tracking-[0.86px] text-[#000] mt-[8.8rem]
            md:text-[3.2rem] md:leading-[1.13] md:tracking-[1.14px]
            md:mt-[0]"
          >
            IN THE BOX
          </h3>
          <ul className="mt-[2.4rem] md:mt-[0]">
            {data.includes.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-[2.4rem] mt-[0.8rem]
                md:mt-[0] md:mb-[0.8rem]"
              >
                <span
                  className="text-[#d87d4a] font-bold text-[1.5rem]
                leading-[1.67] "
                >
                  {item.quantity}x
                </span>
                <span
                  className="text-[1.5rem] font-[500] text-[#000]
                opacity-50 leading-[1.67]"
                >
                  {item.item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="mt-[8.8rem] xl:mt-[16rem]">
        <ProductImages images={data.gallery} />
      </section>
      <section
        className="flex items-center justify-center
        mt-[12rem] xl:mt-[16rem]"
      >
        <OtherOffers otherItems={data.others} />
      </section>
      <section className="mt-[5.8rem]">
        <Category />
      </section>
      <section className="mt-[12rem]">
        <HomeInfo />
      </section>
      <footer className="mt-[12rem] md:mt-[9.6rem] bg-[#101010] w-full">
        <Footer />
      </footer>
    </div>
  );
}
