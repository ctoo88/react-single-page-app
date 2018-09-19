import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
  <div className={`home ${!props.active && 'hide'}`}>
    <div className="banner">
      <div className="logo"></div>
      <h1>Welcome to React</h1>
    </div>

    <p className="block-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime deserunt ducimus veritatis, error iure perspiciatis sint velit fugit! Officia laborum tempora expedita earum totam tempore quaerat atque laudantium aperiam voluptate!</p>
    <p className="block-title">Navigation</p>
    <Link to="/about" className="list-item">About<span>&gt;</span></Link>
  </div>
);

export default Home;
