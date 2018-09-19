import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './main.jsx';
import About from './about.jsx';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default App;
