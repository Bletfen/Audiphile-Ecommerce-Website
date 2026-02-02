import Link from "next/link";

export default function Bitmap() {
  return (
    <div
      className="pt-[10.8rem] pb-[11.2rem] md:pt-[12.6rem]
      md:pb-[16.7rem]
    bg-[url('/assets/home/mobile/image-header.jpg')]
    text-white text-center  bg-no-repeat bg-cover
    bg-[position:0%_100%]
    md:bg-[url('/assets/home/tablet/image-header.jpg')]
    flex flex-col items-center
    md:bg-[position:0%_100%]
    transition-all duration-300
    "
    >
      <span
        className="text-[1.4rem] opacity-50
        tracking-[1rem] shrink-0 mb-[1.6rem] block
        md:mb-[2.4rem]
        "
      >
        NEW PRODUCT
      </span>
      <h1
        className="text-[3.6rem] font-bold
        leading-[1.11] tracking-[0.12rem]
        mb-[2.4rem] md:text-[5.6rem] md:leading-[1.04]
        md:tracking-[0.2rem]
        "
      >
        XX99 MARK II <br className="hidden md:flex" /> HEADPHONES
      </h1>
      <p
        className="text-[1.5rem] font-[500] opacity-75
        leading-[1.67] max-w-[34.9rem]
        "
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link
        href="#"
        className="px-[3rem] py-[1.5rem] bg-[#d87d4a]
        text-white text-[1.3rem] font-bold
        mt-[3.2rem] inline-block"
      >
        SEE PRODUCT
      </Link>
    </div>
  );
}
