import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
// Modules
import { AppProps } from 'next/app';

// import * as gtag from "../lib/gtag";
const isProduction = process.env.NODE_ENV === "production";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;