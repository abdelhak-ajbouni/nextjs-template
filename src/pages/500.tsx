import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import { RiFileWarningLine } from 'react-icons/ri'
import { WiDirectionLeft } from 'react-icons/wi'

import Light from 'layouts/Light'
import Container from "components/common/Container";
import Box from 'components/common/Box'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Server side error</title>
        <meta name="description" content="Server side error" />
      </Head>

      <div className="not-found">
        <Container className="flex justify-center">
          <Box className="bg-primary py-16 px-20 rounded-lg text-center">
            <RiFileWarningLine size={120} className="text-primary m-auto" />
            <p className="text-primary text-xl m-4">Sorry , Server-side error occurred</p>
            <Link href='/'><span className="text-blue-600 cursor-pointer flex justify-center items-center"><WiDirectionLeft />Go to home page</span></Link>
          </Box>
        </Container>
      </div>
    </>
  );
};

NotFound.Layout = Light

export default NotFound;
