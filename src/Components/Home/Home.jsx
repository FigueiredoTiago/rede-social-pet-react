import React from 'react'
import Feed from '../Feed/Feed';
import Head from "./../Helper/Head";
function Home() {
  return (
    <section className='container mainContainer'>
      <Head title='Fotos ' />
      <h1>HOME FEED</h1>
      <Feed />
    </section>
  )
}

export default Home