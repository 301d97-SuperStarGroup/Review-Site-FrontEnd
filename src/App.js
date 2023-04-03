import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer.js';
import GamePage from './pages/GamePage.js';
import About from './pages/About.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  render() {
    return (
      <>
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
          </Routes>
          <Footer />
        </Router>

      </>
    );
  }
}

export default App;

