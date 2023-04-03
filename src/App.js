import React from 'react';
import './App.css';
import './Header.js';
import './Footer.js';
import './pages/GamePage.js';
// import '/pages/About.js';
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react';



class App extends React.Component {
  render() {
    return (
      <>
        <h1>hello</h1>
        {/* <Router>
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
        </Router> */}

      </>
    );
  }
}

export default App;

