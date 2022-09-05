import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import { WiDirectionLeft } from 'react-icons/wi'

import Container from "components/common/Container";

const Settings: NextPage = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="settings" />
      </Head>

      <div className="settings">
        <Container className="flex justify-center">
          <div className="bg-primary py-16 px-20 my-20 rounded-lg text-center">
            <p className="text-primary text-xl m-4">Settings Page</p>
            <Link href='/'><span className="text-blue-600 cursor-pointer flex justify-center items-center"><WiDirectionLeft />Go to home page</span></Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Settings;
