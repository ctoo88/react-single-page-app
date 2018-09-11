import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about animated slideInRight">
    <h2>About</h2>
    back to <Link to="/">home</Link> page.
  </div>
);

export default About;
