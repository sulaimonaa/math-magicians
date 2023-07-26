import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import QuotesContainer from './components/QuotesContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quotes">
            <QuotesContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
