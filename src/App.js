import React from 'react';
import './styles/style.css';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        {/* exact 代表一定要符合 path */}
        <Route path="/React-API/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
