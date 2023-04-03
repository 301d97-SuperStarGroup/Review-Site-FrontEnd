import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer.js';
import GamePage from './pages/GamePage.js';
import About from './pages/About.js';
import UserProfile from './UserProfile.js';
import LoginButton from './LoginButton.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';



class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  render() {
    return (
      <>
      <Auth0Provider>
      <LoginButton/>
      </Auth0Provider>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/games"
              element={<GamePage />}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About />}
            >
            </Route>
            <Route
              exact path="/profile"
              element={<UserProfile />}
            >
              {/* <Route
                exact path="/login"
                element={<LoginButton />}
              >
              </Route> */}
            </Route>
          </Routes>
          <Footer />
        </Router>

      </>
    );
  }
}

export default App;

