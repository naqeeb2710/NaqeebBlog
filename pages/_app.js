import React, { useState, useEffect } from 'react';
import { Layout } from '../Components';
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
   </Layout>
  )
}

export default MyApp
