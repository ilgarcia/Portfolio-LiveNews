import fetchNews from "@/lib/fetchNews";
import NewsList from "@/components/NewsList";

type Props = {
  searchParams: { term: string };
};

async function page({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <section>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </section>
  );
}

export default page;
