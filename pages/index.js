import Head from 'next/head';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({results}) {
  // console.log(props);
  return (
    // The client App
    <div className="bg-[#06202A] text-gray-300 h-full w-full">
      <Head>
        <title>hulu-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavBar />
      <Results results={results} />
    </div>
  );
};

// The SSR which renders first whenever a user makes request and then get delivered to the client App above
export async function getServerSideProps(context) {
  const genre = context.genre;
  // makes a request to tmdb
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then((res) => res.json());

  return {
    props: {
      results: request.results,
    }
  }
};
