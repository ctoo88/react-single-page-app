import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Main from './main';
import About from './about';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  </HashRouter>
);

export default App;
