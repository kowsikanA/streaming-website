import TrendingMovieList from './TrendingMovieList';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedTVShowsList from './FeaturedTVShowsList';
import ContentSection from './ContentSection';
import Footer from './Footer';
function App() {
  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }
    }>
      <Navbar/> 
      <HeroSection/>
      <TrendingMovieList/>
      <FeaturedTVShowsList/>
      <ContentSection />
      <Footer/>

    </div>
  );
}

export default App;
