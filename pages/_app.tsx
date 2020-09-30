import React from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root">
       <Head>
        <title>Root app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
