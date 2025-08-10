
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import TVShows from './pages/TVShowsPage/TVShows';
import Movies from './pages/MoviesPage/Movies'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Details from './pages/DetailsPage/Details';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="movie" element={<Movies/>}/>
        <Route path="tvshows" element={<TVShows/>}/>
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='details' element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
