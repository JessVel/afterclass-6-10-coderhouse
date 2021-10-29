import { FaHeart, FaBars } from 'react-icons/fa';
import Button from '../Button/Button';
import Portal from '../../assets/portal.png';
import './styles/navbar.scss';
import UserAuthContext from '../../context/UserAuthContext';
import { useContext } from 'react';

const NavbarComponent = ({ theme, handleTheme, favArray }) => {
  const { logout } = useContext(UserAuthContext);

  return (
    <header className={theme ? 'header header-light' : 'header header-dark'}>
      <nav className='navbar-container'>
        <figure>
          <img src={Portal} alt='logo' className='logo-img' />
        </figure>
        <button className='menu-burger'>
          <FaBars />
        </button>
        <div className='menu'>
          <button className='menu-item menu-item-counter' href='_blank'>
            {favArray
              ? favArray.length === 0
                ? 'Favoritos'
                : favArray.length
              : 'Favoritos'}
            <FaHeart className='fav-heart' />
          </button>
          <Button
            classname={'menu-item'}
            theme={theme}
            handleTheme={handleTheme}
          />
          <button className='btn btn-primary' onClick={logout}>
            Log out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;
