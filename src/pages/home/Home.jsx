import React from 'react'
import HeroBanner from "./heroBanner/HeroBanner.jsx"
import "./style.scss"

import Trending from './trending/Trending.jsx'
import Popular from './popular/Popular.jsx'
import TopRated from "./topRated/TopRated.jsx"

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/ >
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
