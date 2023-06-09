import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';

const App = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
      <Hero />
      <SearchForm />
      <List />
      <Hero />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <List />
    </div>
  );
};

export default App;