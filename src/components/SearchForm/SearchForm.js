import styles from './SearchForm.module.scss';

const SearchForm = () => {
    return (
        <form class="searchForm">
            <input type="text" class="input"/>
            <button class="button">Search</button>
        </form>
    );
  };

  export default SearchForm;