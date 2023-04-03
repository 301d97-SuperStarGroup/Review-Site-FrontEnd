import React from 'react';
import './App.css';
import './Header.js';
import './GamePage.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <>
        <h1>Test</h1>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
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

