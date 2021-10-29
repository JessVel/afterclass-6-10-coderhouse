import { useState, useContext, useEffect } from 'react';
import NavbarComponent from './components/Navbar';
import ListContainer from './components/ListContainer/ListContainer';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Singup/Signup';
import UserAuthContext from './context/UserAuthContext';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import 'bootswatch/dist/minty/bootstrap.min.css';
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

  const { isAuthenticated } = useContext(UserAuthContext);

  return (
    <BrowserRouter>
      <main className={theme ? 'light' : 'dark'}>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup' component={Signup} />
        <Switch>
          {isAuthenticated ? (
            <Route exact path='/'>
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
            </Route>
          ) : (
            <Redirect to='/login' />
          )}
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
