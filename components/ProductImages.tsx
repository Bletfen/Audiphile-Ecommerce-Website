import { TGallery } from "@/types/type";
import Image from "next/image";

export default function ProductImages({ images }: { images: TGallery }) {
  return (
    <div className="md:flex md:gap-[1.8rem]">
      <div className="flex flex-col gap-[2rem]">
        <Image
          src={images.first.mobile}
          alt="product image"
          width={327}
          height={174}
          className="rounded-[0.8rem] md:hidden"
        />
        <Image
          src={images.first.tablet}
          alt="product image"
          width={277}
          height={174}
          className="rounded-[0.8rem] md:block hidden"
        />
        <Image
          src={images.second.mobile}
          alt="product image"
          width={327}
          height={174}
          className="rounded-[0.8rem] md:hidden"
        />
        <Image
          src={images.second.tablet}
          alt="product image"
          width={277}
          height={174}
          className="rounded-[0.8rem] md:block hidden"
        />
      </div>
      <div className="mt-[2rem] md:mt-[0]">
        <Image
          src={images.third.mobile}
          alt="product image"
          width={327}
          height={368}
          className="rounded-[0.8rem] md:hidden"
        />
        <Image
          src={images.third.tablet}
          alt="product image"
          width={395}
          height={368}
          className="rounded-[0.8rem] md:block hidden"
        />
      </div>
    </div>
  );
}
