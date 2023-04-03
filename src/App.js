import React from 'react';
import './App.css';
import './Header.js';
import './pages/GamePage.js';
// import '/pages/About.js';
// import ReactDOM from "react-dom/client";
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

        <Router>
          <Header />
          <Routes>
            <Route
              exact path=""
              element={<GamePage />}
            >
            </Route>
            <Route
              exact path=""
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

