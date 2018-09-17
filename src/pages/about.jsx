import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about animated slideInRight">
    <h2>About</h2>
    <p>back to <Link to="/">home</Link> page.</p>
    
    <div className="card">
      <div className="card-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laudantium possimus labore obcaecati et repellat, repellendus sapiente iure cumque aliquam quibusdam corporis, quo enim, asperiores, sint laboriosam commodi recusandae laborum.
      </div>
    </div>
  </div>
);

export default About;
