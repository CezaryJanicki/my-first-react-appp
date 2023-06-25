import Container from './components/Container/Container.js'
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js'
import Favourites from './components/Favourites/Favourites.js'
import About from './components/About/About.js'

const App = () => {
  return (
    <main>
    <NavBar />
    <Container>
      <Home />
      <Favourites />
      <About />
    </Container>
    </main>
  );
};

export default App;