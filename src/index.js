import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './assets/style.scss';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
