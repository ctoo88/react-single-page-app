import React, { Component } from 'react';

import Home from './home/index.jsx';
import Notice from './user/notice.jsx';
import Icon from '../components/icon.jsx';

class Main extends Component {

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
      <div>
        <Home active={curTab === 'home'}/>
        <Notice active={curTab === 'notice'}/>
    
        <div className="foot-bar">
          <div className="foot-item" onClick={this.switchTab.bind(this, 'home')}>
            <Icon name="#icon-home" fillName="#icon-home-fill" active={curTab === 'home'}/>
          </div>

          <div className="foot-item" onClick={this.switchTab.bind(this, 'notice')}>
            <Icon name="#icon-notice" fillName="#icon-notice-fill" active={curTab === 'notice'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
