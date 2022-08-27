import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import { WiDirectionLeft } from 'react-icons/wi'

import Container from "components/common/Container";

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="description" content="admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="admin">
        <Container className="flex justify-center">
          <div className="bg-primary py-16 px-20 my-20 rounded-lg text-center">
            <p className="text-primary text-xl m-4">Admin Page</p>
            <Link href='/'><span className="text-blue-600 cursor-pointer flex justify-center items-center"><WiDirectionLeft />Go to home page</span></Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Admin;