import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import apiCall from '../helper';
import Spinner from '../Spinner/Spinner';
import './ListContainer/listContainer.scss';

const ListContainer = ({ theme, handleFav, favArray, setFavArray }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Request api real
  // useEffect(() => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //     .then((response) => response.json())
  //     .then((result) => setData(result.results))
  //      .catch((err) => throw err)
  //      .finally(console.log('Fin del llamado!));
  // }, []);

  //request api ficticia

  useEffect(() => {
    apiCall()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className='list-container'>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.map((item) => (
          <Card
            key={item.id}
            theme={theme}
            handleFav={handleFav}
            favArray={favArray}
            setFavArray={setFavArray}
            data={data}
            {...item}
          />
        ))
      )}
    </section>
  );
};

export default ListContainer;
