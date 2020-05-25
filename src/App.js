import React from 'react';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (

    <Router>
      <Header />
      <Routes />
    </Router>
  )
}
export default App;