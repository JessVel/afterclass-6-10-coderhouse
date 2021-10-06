import { useState } from 'react';
import NavbarComponent from './components/Navbar';
import ListContainer from './components/ListContainer/ListContainer';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  // Estado de theme switch
  const [theme, setTheme] = useState(true);

  //Estado de array de favoritos
  const [favArray, setFavArray] = useState([]);

  //Funcion cambiar de theme
  const handleTheme = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };

  return (
    <>
      <main className={theme ? 'light' : 'dark'}>
        <NavbarComponent
          theme={theme}
          handleTheme={handleTheme}
          favArray={favArray}
        />
        <ListContainer
          theme={theme}
          favArray={favArray}
          setFavArray={setFavArray}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
