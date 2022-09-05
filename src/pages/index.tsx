import type { NextPage } from "next";
import Head from "next/head";

import Banner from "components/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>

      <div className="home">
          <Banner />
      </div>
    </>
  );
};

export default Home;
