import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages';
import ContactPage from './Pages/contact';
import OverviewPage from './Pages/overview';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/overview" component={OverviewPage} />
      </Switch>
    </Router>
  );
}

export default App;
