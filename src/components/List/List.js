import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import {getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnsRedux';
import SearchForm from '../SearchForm/SearchForm.js';
import Container from '../Container/Container.js';
import { Navigate, useParams } from 'react-router-dom';

const List = props => {
  const {listId} = useParams();
  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));
  if(!listData) return <Navigate to="/404" />

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