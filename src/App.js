import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/theme/Footer';
import Header from './components/theme/Header';
import Game from './pages/Game';
import Home from './pages/Home';
import Player from './pages/Player';
import SearchPlayer from './pages/Search/Player';
import Team from './pages/Team';
import SearchTeam from './pages/Search/Team';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/search/team' element={<SearchTeam />} />
          <Route path='/search/player' element={<SearchPlayer />} />
          <Route path='/player/:id' element={<Player />} />
          <Route path='/game/:id' element={<Game />} />
          <Route path='/team/:id' element={<Team />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
