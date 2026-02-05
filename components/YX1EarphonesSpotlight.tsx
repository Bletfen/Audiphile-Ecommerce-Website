import Link from "next/link";

export default function YX1EarphonesSpotlight() {
  return (
    <div
      className="flex flex-col gap-[2.4rem]
        md:flex-row md:gap-[1.1rem]
        transition-all duration-300
        xl:gap-[3rem]"
    >
      <div
        className="bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]
        w-[32.7rem] h-[20rem]
        bg-no-repeat bg-cover rounded-[0.8rem]
        md:w-[35rem] md:h-[32rem]
        md:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')]
        xl:w-[54rem] xl:h-[32rem]
        xl:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]
        "
      ></div>
      <div
        className="flex flex-col bg-[#f1f1f1]
        rounded-[0.8rem] px-[2.4rem] h-[20rem]
        justify-center md:px-[4.1rem] md:h-[32rem]
        xl:px-[9.5rem] xl:h-[32rem] xl:w-[54rem]
        "
      >
        <h2
          className="text-[2.8rem] text-[#000] font-bold
            tracking-[0.2rem]"
        >
          YX1 EARPHONES
        </h2>

        <Link
          href="/earphones/yx1-earphones"
          className="border border-[#000]
            w-[16rem] text-center
            px-[2.9rem] py-[1.5rem]
            text-[1.3rem] font-bold
            tracking-[0.1rem]
            mt-[3.2rem]
            cursor-pointer
            hover:bg-[#000] hover:text-white
            transition-all duration-300"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}
