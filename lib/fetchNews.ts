import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        countries: "gb"
        sort: "published_desc"
        categories: $categories
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          total
          offset
        }
      }
    }
  `;

  const res = await fetch(
    "https://butjadingen.stepzen.net/api/foolhardy-manatee/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
};

export default fetchNews;

// // Example import
// // stepzen import curl "http://api.mediastack.com/v1/news?access_key=access_key&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
