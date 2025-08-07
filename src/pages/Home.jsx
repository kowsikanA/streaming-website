import React from 'react'


import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import TrendingMovieList from '../components/TrendingMovies/TrendingMovieList'
import FeaturedTVShowsList from '../components/FeaturedTVShows/FeaturedTVShowsList'
import ContentSection from '../components/ContentSection/ContentSection'
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }
    }>
      {/* <Navbar/> */}
      <HeroSection/>
      <TrendingMovieList/>
      <FeaturedTVShowsList/>
      <ContentSection />
      {/* <Footer/> */}

    </div>
  )
}

export default Home
