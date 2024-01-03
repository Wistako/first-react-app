import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
// PAGES
import Home from './pages/Home.js';
import About from './pages/About.js';
import Favorite from './pages/Favorite.js';
import NoMatch from './pages/NoMatch.js';
// REACT
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/favorite" element={<Favorite />} />
         <Route path='*' element={<NoMatch />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
