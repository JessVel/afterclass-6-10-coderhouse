import { useState } from 'react';
import NavbarComponent from './components/Navbar';
import ListContainer from './components/ListContainer/ListContainer';
import './App.scss';

function App() {
  const [theme, setTheme] = useState(true);
  const [favArray, setFavArray] = useState([]);

  const handleTheme = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };

  return (
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
  );
}

export default App;
