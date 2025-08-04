import TrendingMovieList from './TrendingMovieList';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedTVShowsList from './FeaturedTVShowsList';
import ContentSection from './ContentSection';
function App() {
  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        alignContent: "center"
      }
    }>
      <Navbar/> 
      <HeroSection/>
      <TrendingMovieList/>
      <FeaturedTVShowsList/>
      <ContentSection />

    </div>
  );
}

export default App;
