import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeadphoneInfo from "@/components/HeadphoneInfo";
import HomeInfo from "@/components/HomeInfo";
import data from "@/data/data.json";
import { TProduct } from "@/types/type";

export default async function page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const categoryData = (data as TProduct[])
    .filter((item) => item.category === category)
    .reverse();
  const firstIsNewer = categoryData.sort((a, b) => {
    return Number(b.new) - Number(a.new);
  });
  return (
    <div
      className="flex flex-col items-center
      "
    >
      <header
        className="py-[3.2rem] px-[8.4rem]
        bg-[#000] w-full text-white
        flex justify-center items-center
        md:py-[0] md:pt-[10.5rem] md:pb-[9.7rem]
        lg:py-[9.8rem]"
      >
        <h1
          className="text-[2.8rem] font-bold
          tracking-[0.2rem] md:text-[4rem]
          md:tracking-[1.43px] md:leading-[1.1]"
        >
          {category.toUpperCase()}
        </h1>
      </header>
      <main
        className="px-[2.4rem] mt-[6.4rem]
        md:px-[3.9rem] md:mt-[12rem]"
      >
        <HeadphoneInfo data={firstIsNewer} />
      </main>
      <section className="mt-[12rem]">
        <Category />
      </section>
      <section className="mt-[12rem]">
        <HomeInfo />
      </section>
      <footer
        className="mt-[12rem] md:mt-[9.6rem] bg-[#101010]
        w-full"
      >
        <Footer />
      </footer>
    </div>
  );
}
