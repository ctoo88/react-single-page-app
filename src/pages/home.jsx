import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {

    return (
      <div className="app">
        <header className="app-header">
          <div className="app-logo"></div>
          <h1 className="app-title">Welcome to React</h1>
        </header>

        <p className="app-intro">
          go to <Link to="/about">about</Link> page.
        </p>
      </div>
    );
  }
}

export default Home;
