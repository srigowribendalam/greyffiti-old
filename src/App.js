import React from 'react';
import './App.css';
import Routes from './Components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
        <ScrollToTop />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
