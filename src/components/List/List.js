import styles from './List.module.scss';

const List = () => {
    return (
      <div class="list">
          <header class="header">
              <h2 class="title">Things to do<span>soon!</span></h2>
          </header>
          <p class="description">Interesting things I want to check out</p>
          <section class="columns">
              <article>
                  <h2>Books</h2>
              </article>
              <article>
                  <h2>Movies</h2>
              </article>
              <article>
                  <h2>Games</h2>
              </article>
          </section>
      </div>
    );
  };

  export default List;