import Link from "next/link";

export default function ZX7SpeakerSpotlight() {
  return (
    <div
      className="flex flex-col
    bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')]
    rounded-[0.8rem] w-[32.7rem]
    py-[10.1rem] pl-[2.4rem]
    bg-center bg-no-repeat
    bg-contain
    md:w-[68.9rem] transition-all duration-300
    md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')]
    md:pl-[6.2rem]"
    >
      <h2
        className="text-[2.8rem] font-bold
        tracking-[0.2rem] text-[#000]"
      >
        ZX7 SPEAKER
      </h2>
      <Link
        href="#"
        className="border border-[#000]
        w-[16rem] text-center
        px-[2.9rem] py-[1.5rem]
        text-[1.3rem] font-bold
        tracking-[0.1rem]
        mt-[3.2rem]"
      >
        SEE PRODUCT
      </Link>
    </div>
  );
}
