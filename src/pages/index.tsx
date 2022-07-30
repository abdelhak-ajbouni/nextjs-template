import type { NextPage } from "next";
import Head from "next/head";

import Default from 'layouts/Default'
import Banner from "components/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
        <Default>
          <Banner />
        </Default>
      </div>
    </>
  );
};

export default Home;
