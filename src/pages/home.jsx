import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor() {

    super();
    this.state = {
      curTab: 'home',
    };
  }

  switchTab(tab) {
    this.setState({
      curTab: tab,
    });
  }

  render() {

    let { curTab } = this.state;

    return (
      <div className="main">
        <div className={`home ${curTab !== 'home' && 'hide'}`}>
          <div className="banner">
            <div className="logo"></div>
            <h1>Welcome to React</h1>
          </div>

          <p className="block-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime deserunt ducimus veritatis, error iure perspiciatis sint velit fugit! Officia laborum tempora expedita earum totam tempore quaerat atque laudantium aperiam voluptate!</p>
          <p className="block-title">Navigation</p>
          <Link to="/about" className="list-item">About<span>&gt;</span></Link>
        </div>

        <div className={`notice ${curTab !== 'notice' && 'hide'}`}>没有消息</div>

        <div className="foot-bar">
          <div className={`tab-link ${curTab === 'home' && 'active'}`} onClick={this.switchTab.bind(this, 'home')}>one</div>
          <div className={`tab-link ${curTab === 'notice' && 'active'}`} onClick={this.switchTab.bind(this, 'notice')}>two</div>
        </div>
      </div>
    );
  }
}

export default Home;
