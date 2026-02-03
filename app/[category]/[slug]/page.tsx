import ProductInfo from "@/components/ProductInfo";
import data from "@/data/data.json";
import Link from "next/link";
import type { TProduct } from "@/types/type";
export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const itemInfo = (data as TProduct[]).find((item) => item.slug === slug);
  return (
    <div className="flex flex-col mt-[1.6rem]">
      <Link
        href={`/${itemInfo?.category}`}
        className="text-[1.5rem] text-[#000] opacity-50
        leading-[1.67] font-[500] px-[2.4rem]
        md:px-[3.9rem]"
      >
        Go Back
      </Link>
      <ProductInfo data={itemInfo} />
    </div>
  );
}
