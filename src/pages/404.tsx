import Head from "next/head";
import Link from 'next/link'
import { RiFileWarningLine } from 'react-icons/ri'
import { WiDirectionLeft } from 'react-icons/wi'

import { NextPageWithLayout } from 'types'
import Light from 'layouts/Light'
import Container from "components/common/Container";
import Box from 'components/common/Box'

const NotFound: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="page not found" />
      </Head>

      <div className="not-found">
        <Container className="flex justify-center">
          <Box className="bg-primary py-16 px-20 rounded-lg text-center">
            <RiFileWarningLine size={120} className="text-primary m-auto" />
            <p className="text-primary text-xl m-4">Sorry , The page you are looking for cannot be found</p>
            <Link href='/'><span className="text-blue-600 cursor-pointer flex justify-center items-center"><WiDirectionLeft />Go to home page</span></Link>
          </Box>
        </Container>
      </div>
    </>
  );
};

NotFound.layout = Light

export default NotFound;
