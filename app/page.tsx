import { categories } from "@/data/categories";

import fetchNews from "@/lib/fetchNews";
import NewsList from "@/components/NewsList";

export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <main>
      <NewsList news={news} />
    </main>
  )
}
