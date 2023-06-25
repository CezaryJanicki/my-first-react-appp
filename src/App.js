import Container from './components/Container/Container.js'
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js'
import Favourites from './components/Favourites/Favourites.js'
import About from './components/About/About.js'
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound.js'

const App = () => {
  return (
    <main>
    <NavBar />
    <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Container>
    </main>
  );
};

export default App;