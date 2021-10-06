import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import './styles/card.scss';

const Card = ({
  theme,
  name,
  image,
  status,
  species,
  gender,
  favArray,
  setFavArray,
  data,
  id,
}) => {
  //Estado de favorito
  const [fav, setFav] = useState(false);

  // Funcion para agregar a favoritos
  const handleAdd = (id) => {
    const favs = data && data.filter((item) => item.id === id);
    setFavArray([...favArray, favs[0]]);
    setFav(!fav);
  };

  //funcion para eliminar de favoritos
  const handleRemove = (id) => {
    const favs = favArray && favArray.filter((item) => item.id !== id);
    setFavArray(favs);
    setFav(!fav);
  };

  return (
    <div className={theme ? 'card' : 'card--dark'}>
      {!fav ? (
        <button
          className={'card-fav'}
          aria-label='Agregar a favoritos'
          onClick={() => handleAdd(id)}
        >
          <FaHeart />
        </button>
      ) : (
        <button
          className={'card-fav--active'}
          aria-label='Eliminar de favoritos'
          onClick={() => handleRemove(id)}
        >
          <FaHeart />
        </button>
      )}
      <img className='card-img' src={image} alt={name} />
      <h1 className='card-title'>{name}</h1>
      <p className='card-description'>Status:{status}</p>
      <p className='card-description'>Especie:{species}</p>
      <p className='card-description'>Género:{gender}</p>
    </div>
  );
};

export default Card;
