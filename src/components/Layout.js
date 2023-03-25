// components/layout.js

import Head from "next/head";


export default function Layout({ children , title = 'Hackathon' , description = 'Hackathon Project', keywords = 'Hackathon ', author = 'Corridor' }) {
  return (
    <>
        {/* Create Seo  */}
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="theme-color" content="#000000" />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>

      <main>{children}</main>
    </>
  )
}