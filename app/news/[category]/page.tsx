import fetchNews from "@/lib/fetchNews";
import NewsList from "@/components/NewsList";
import { categories } from "@/data/categories";

type Props = {
  params: { category: Category };
};

async function page({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <section>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </section>
  );
}

export default page;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
