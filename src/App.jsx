import TrendingMovieList from './components/TrendingMovies/TrendingMovieList';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturedTVShowsList from './components/FeaturedTVShows/FeaturedTVShowsList';
import ContentSection from './components/ContentSection/ContentSection';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'
import SignIn from './pages/SignIn/SignIn';
function App() {
  return (
    // <div style={
    //   {
    //     display: "flex",
    //     flexDirection: "column",
    //     alignContent: "center",
    //   }
    // }>
    //   <Navbar/> 
    //   <HeroSection/>
    //   <TrendingMovieList/>
    //   <FeaturedTVShowsList/>
    //   <ContentSection />
    //   <Footer/>

    // </div>

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
