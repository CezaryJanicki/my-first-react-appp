import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import SearchForm from '../SearchForm/SearchForm';
import Container from '../Container/Container';
import { Navigate, useParams } from 'react-router-dom';

const List = props => {

  const {listId} = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId))

  if (!listData) {
    return <Navigate to="/404" />;
  }

    return (

      <Container>
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <SearchForm />
        <section className={styles.columns}>
          {columns.map(column =>
            <Column
              key={column.id}
              {...column}  />
          )}
        </section>
        <ColumnForm listId={listId}/>
      </div>
    </Container>
    );
  };

  export default List;