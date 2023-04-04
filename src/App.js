import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer.js';
import GamePage from './pages/GamePage.js';
import About from './pages/About.js';
import UserHome from './pages/UserHome.js';
import UserProfile from './UserProfile.js';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js'
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';





class App extends React.Component {


  render() {
    return (
      <>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <UserProfile />
              <LogoutButton />

              <Router>
                <Header />
                <Routes>
                  <Route
                    exact path="/home"
                    element={<UserHome />}
                  >
                  </Route>
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

                </Routes>
                <Footer />
              </Router>
            </>
            :
            <LoginButton />
        }
      </>

    );
  }
}

export default withAuth0(App);

