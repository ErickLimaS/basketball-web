import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/theme/Footer';
import Header from './components/theme/Header';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
