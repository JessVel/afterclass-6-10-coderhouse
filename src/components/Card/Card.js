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
  const [fav, setFav] = useState(false);

  const handleAdd = (id) => {
    const favs = data && data.filter((item) => item.id === id);
    setFavArray([...favArray, favs[0]]);
    setFav(!fav);
  };

  const handleRemove = (id) => {
    const favs = favArray && favArray.filter((item) => item.id !== id);
    setFavArray(favs);
    setFav(!fav);
  };

  return (
    <div className={theme ? 'card' : 'card--dark'}>
      {!fav ? (
        <button className={'card-fav'} onClick={() => handleAdd(id)}>
          <FaHeart />
        </button>
      ) : (
        <button className={'card-fav--active'} onClick={() => handleRemove(id)}>
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
