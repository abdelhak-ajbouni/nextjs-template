import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import { WiDirectionLeft } from 'react-icons/wi'

import { trpc } from 'utils/trpc';
import Container from "components/common/Container";

const Me: NextPage = () => {
  const { data } = trpc.useQuery(['users.getMe']);

  return (
    <>
      <Head>
        <title>Me</title>
        <meta name="description" content="me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="me">
        <Container className="flex justify-center">
          <div className="bg-primary py-16 px-20 my-20 rounded-lg text-center">
            <p className="text-primary text-xl m-4">Me Page</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <Link href='/'><span className="text-blue-600 cursor-pointer flex justify-center items-center"><WiDirectionLeft />Go to home page</span></Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Me;