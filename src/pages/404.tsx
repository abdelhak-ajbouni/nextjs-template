import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import { RiFileWarningLine } from 'react-icons/ri'
import { WiDirectionLeft } from 'react-icons/wi'

import Container from "components/common/Container";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="not-found">
        <Container className="flex justify-center">
          <div className="bg-primary py-16 px-20 my-20 rounded-lg text-center">
            <RiFileWarningLine size={120} className="text-primary m-auto" />
            <p className="text-primary text-xl m-4">Sorry , The page you are looking for cannot be found</p>
            <Link href='/'><span className="text-blue-600 cursor-pointer flex justify-center items-center"><WiDirectionLeft />Go to home page</span></Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
