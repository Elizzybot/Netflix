import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Row from "../components/Row";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const requests = {
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <Header />
      <main className="pt-16">
        <Banner />
        <Row title="Trending Now" fetchUrl={requests.trending} isLarge />
        <Row title="Top Rated" fetchUrl={requests.topRated} />
        <Row title="Action Movies" fetchUrl={requests.action} />
        <Row title="Comedy Movies" fetchUrl={requests.comedy} />
        <Row title="Horror Movies" fetchUrl={requests.horror} />
        <Row title="Romance Movies" fetchUrl={requests.romance} />
      </main>
    </div>
  );
}