import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about animated slideInRight">
    <div className="nav-bar">
      <div className="left" onClick={() => history.back()}>&lt;</div>
      <div className="center">About</div>
    </div>

    <p className="block-title">Simple Cards</p>
    <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime deserunt ducimus veritatis, error iure perspiciatis sint velit fugit! Officia laborum tempora expedita earum totam tempore quaerat atque laudantium aperiam voluptate!</p>
  </div>
);

export default About;
