import Image from "next/image";
export default function HomeInfo() {
  return (
    <div>
      <Image
        src={
          "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
        }
        width={327}
        height={300}
        alt="XX99 Mark Two Headphones"
        className="rounded-[0.8rem] mb-[4rem]
        md:hidden transition-all duration-300"
      />
      <Image
        src={
          "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
        }
        width={689}
        height={300}
        alt="XX99 Mark Two Headphones"
        className="rounded-[0.8rem] mb-[4rem]
        hidden md:flex transition-all duration-300"
      />
      <div
        className="flex flex-col text-center items-center
        justify-center w-[32.7rem] mx-auto
        gap-[3.2rem] md:w-[57.3rem]"
      >
        <h2
          className="text-[2.8rem] font-bold tracking-[0.1rem]
        text-[#000] uppercase
        md:text-[4rem] leading-[1.1] tracking-[1.43px]"
        >
          Bringing you the <span className="text-[#d87d4a]">BEST</span> audio
          gear
        </h2>
        <p
          className="text-[1.5rem] font-[500] leading-[1.67]
        text-[#000] opacity-50"
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
